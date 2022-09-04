<template>
  <div class="w-full bg-stone-700 flex flex-col justify-center items-center">
    <div />
    <div class="w-2/3 md:w-3/4 bg-transparent">
      <Table :players="players" />
    </div>
    <div />
  </div>
</template>

<script>
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
  computed: {},
  async mounted () {
    this.players = await this.getPlayers('*[_type == "fifaCard"]')
  },
  methods: {
    getPlayers (query = String) {
      return sanity.fetch(query)
    }
  }
}
</script>
