<template>
  <div class="w-full bg-black sm:bg-stone-700 flex flex-col justify-center items-center">
    <div v-if="players" class="w-2/3 md:w-3/4 bg-transparent">
      <Table :players="players" />
    </div>
    <div v-else class="m-20 text-white A flex flex-col bg-transparent items-center w-full h-auto text-center">
      <h1 class="text-4xl text-green-400 mb-6 bg-inherit">
        Currently we are down, Please try again later
      </h1>
      <nuxt-link to="/" class="text-center text-lg w-1/4 h-16 bg-green-400 text-black A rounded-md flex justify-center">
        <p class="text-black bg-inherit self-center">
          Try Again
        </p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import sanity from '../plugins/sanityClient.js'
import Table from '../components/Table.vue'
export default {
  name: 'Home',
  components: { Table },
  data () {
    return {
      players: []
    }
  },
  computed: {
    ...mapGetters({
      storedPlayers: 'getPlayers'
    })
  },
  async mounted () {
    this.players = await this.getPlayers('*[_type == "fifaCard"]')
  },
  methods: {
    async getPlayers (query = String) {
      const store = await this.storedPlayers
      if (store.length >= 1) {
        return store
      }
      const items = sanity.fetch(query)
      this.$store.commit('SET_PLAYERS', items)
      return items
    }
  }
}
</script>

<style>

*::-webkit-scrollbar {
  width: 8px;
}

*::-webkit-scrollbar-track {
  background-color: rgb(28 25 23 / var(1));
}

*::-webkit-scrollbar-thumb {
  background-color: #FFFFFF;
  border-radius: 1.2rem;
  height: 5px;
  border: 2px solid rgb(49, 49, 49);
}
</style>
