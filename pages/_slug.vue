<template>
  <div class="bg-gradient-to-r from-stone-600 to-stone-800 w-full h-full flex flex-col items-center justify-center">
    <div v-if="currentPlayer" class="h-full w-2/3 md:w-3/4 bg-black pb-40">
      <Player v-if="currentPlayer" :current-player="currentPlayer" />
    </div>
    <div v-else class="m-20 text-white A flex flex-col bg-transparent items-center w-full h-auto text-center">
      <h1 class="text-4xl text-green-400 mb-6 bg-inherit">
        Info for this player couldn't be found
      </h1>
      <nuxt-link to="/" class="text-center text-lg w-1/4 h-16 bg-green-400 text-black A rounded-md flex justify-center">
        <p class="text-black bg-inherit self-center">
          Home
        </p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import imageUrlBuilder from '@sanity/image-url'
import client from '../plugins/sanityClient'
export default {
  data () {
    return {
      currentPlayer: ''
    }
  },
  computed: {
    ...mapGetters({
      player: 'getPlayer'
    })
  },
  async mounted () {
    this.currentPlayer = await this.generateData()
  },
  methods: {
    generateImage (source) {
      const builder = imageUrlBuilder(client)
      return builder.image(source)
    },
    async generateData () {
      if (this.player.statistics) {
        return this.player
      }
      const data = await client.fetch(`*[slug.current == "${this.$route.params.slug}"]`)
      return data?.[0]
    }
  }
}
</script>

<style>
body{
  background: rgb(87,83,78);
background: linear-gradient(90deg, rgba(87,83,78,1) 0%, rgba(41,37,36,1) 100%);
}
</style>
