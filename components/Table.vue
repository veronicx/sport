<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="w-full">
    <table class="block overflow-x-auto whitespace-nowrap text-xl">
      <thead>
        <tr>
          <th v-for="head in heads" :key="head" scope="col" class=" font-medium text-white border-r-2 b-slate-200 border-stone-600 bg-black px-2 py-2 text-left">
            <div class="flex flex-row justify-between items-center">
              {{ head }}
              <div class="flex flex-col">
                <img src="../static/up.png" :alt="`Up Button For ${head} which is one of the table heads `" @click="tableHead(head, 'up')">
                <img src="../static/down.png" :alt="`Down Button For ${head} which is one of the table heads `" @click="tableHead(head, 'down')">
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="player in players" :key="player._id">
          <td class=" text-white bg-stone-900 font-light px-2 py-4 whitespace-nowrap border-b border-black" @click="setPlayer(player)">
            {{ player.name }}
          </td>
          <td class=" text-white bg-stone-900 font-light px-2 py-4 whitespace-nowrap border-b border-black">
            <span class="w-full p-2 px-4  rounded bg-white text-black hover:bg-slate-400 hover:text-white">
              {{ player.rating }}
            </span>
          </td>
          <td class=" text-white bg-stone-900 self-center font-light px-2 py-2 whitespace-nowrap border-b border-black">
            <span class="w-full p-2 px-4  rounded bg-black text-white hover:bg-white hover:text-black h-5/6">
              {{ player.position }}
            </span>
          </td>
          <td class=" text-white bg-stone-900 font-light px-2 py-4 whitespace-nowrap border-b border-black">
            <span class="w-full p-2 px-4  rounded bg-black text-white hover:bg-white hover:text-black h-5/6">
              {{ player.position }}
            </span>
          </td>
          <td class=" text-white bg-stone-900 font-light px-2 py-4 whitespace-nowrap border-b border-black">
            <span class="w-full p-2 px-4 m-2  rounded bg-black border-2 border-white text-white hover:bg-white hover:text-black h-4/6">
              {{ player.statistics.pace.average }}
            </span>
          </td>
          <td class=" text-white bg-stone-900 font-light px-2 py-4 whitespace-nowrap border-b border-black">
            <span class="w-full p-2 px-4 m-2  rounded bg-black border-2 border-white text-white hover:bg-white hover:text-black h-4/6">
              {{ player.statistics.shooting.average }}
            </span>
          </td>
          <td class=" text-white bg-stone-900 font-light px-2 py-4 whitespace-nowrap border-b border-black">
            <span class="w-full p-2 px-4 m-2  rounded bg-black border-2 border-white text-white hover:bg-white hover:text-black h-4/6">
              {{ player.statistics.passing.average }}
            </span>
          </td>
          <td class=" text-white bg-stone-900 font-light px-2 py-4 whitespace-nowrap border-b border-black">
            <span class="w-full p-2 px-4 m-2  rounded bg-black border-2 border-white text-white hover:bg-white hover:text-black h-4/6">
              {{ player.statistics.dribbling.average }}
            </span>
          </td>
          <td class=" text-white bg-stone-900 font-light px-2 py-4 whitespace-nowrap border-b border-black">
            <span class="w-full p-2 px-4 m-2  rounded bg-black border-2 border-white text-white hover:bg-white hover:text-black h-4/6">
              {{ player.statistics.defense.average }}
            </span>
          </td>
          <td class=" text-white bg-stone-900 font-light px-2 py-4 whitespace-nowrap border-b border-black">
            <span class="w-full p-2 px-4 m-2  rounded bg-black border-2 border-white text-white hover:bg-white hover:text-black h-4/6">
              {{ player.statistics.physical.average }}
            </span>
          </td>
          <td class=" text-white bg-stone-900 font-light px-2 py-4 whitespace-nowrap border-b border-black">
            <span class="w-full p-2 px-4  rounded bg-black text-white hover:bg-white hover:text-black h-5/6">
              {{ player.workRatesDefensive.charAt(0) }}/{{ player.workRatesAttacking.charAt(0) }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    players: {
      type: Array,
      required: true,
      default: () => {}
    }
  },
  data () {
    return {
      heads: ['Name', 'OVR', 'POS', 'Type', 'PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY', 'WR'],
      playerList: this.players
    }
  },
  computed: {
    ...mapGetters({
      player: 'getPlayer'
    })
  },
  methods: {
    tableHead (head, type) {
      const array = this.players
      if (type === 'up') {
        switch (head) {
          case 'OVR':
            array.sort((a, b) => isNaN(a.rating) || a.rating - b.rating).reverse()
            break
          case 'POS':
            array.sort().reverse()
            break
          case 'Type':
            array.sort().reverse()
            break
          case 'PAC':
            array.sort((a, b) => isNaN(a.statistics.pace.average) || a.statistics.pace.average - b.statistics.pace.average).reverse()
            break
          case 'SHO':
            array.sort((a, b) => isNaN(a.statistics.shooting.average) || a.statistics.shooting.average - b.statistics.shooting.average).reverse()
            break
          case 'PAS':
            array.sort((a, b) => isNaN(a.statistics.passing.average) || a.statistics.passing.average - b.statistics.passing.average).reverse()
            break
          case 'DRI':
            array.sort((a, b) => isNaN(a.statistics.dribbling.average) || a.statistics.dribbling.average - b.statistics.dribbling.average).reverse()
            break
          case 'DEF':
            array.sort((a, b) => isNaN(a.statistics.defense.average) || a.statistics.defense.average - b.statistics.defense.average).reverse()
            break
          case 'PHY':
            array.sort((a, b) => isNaN(a.statistics.physical.average) || a.statistics.physical.average - b.statistics.physical.average).reverse()
        }
      } else {
        switch (head) {
          case 'OVR':
            array.sort((a, b) => isNaN(a.rating) || a.rating - b.rating)
            break
          case 'POS':
            array.sort().reverse()
            break
          case 'Type':
            array.sort().reverse()
            break
          case 'PAC':
            array.sort((a, b) => isNaN(a.statistics.pace.average) || a.statistics.pace.average - b.statistics.pace.average)
            break
          case 'SHO':
            array.sort((a, b) => isNaN(a.statistics.shooting.average) || a.statistics.shooting.average - b.statistics.shooting.average)
            break
          case 'PAS':
            array.sort((a, b) => isNaN(a.statistics.passing.average) || a.statistics.passing.average - b.statistics.passing.average)
            break
          case 'DRI':
            array.sort((a, b) => isNaN(a.statistics.dribbling.average) || a.statistics.dribbling.average - b.statistics.dribbling.average)
            break
          case 'DEF':
            array.sort((a, b) => isNaN(a.statistics.defense.average) || a.statistics.defense.average - b.statistics.defense.average)
            break
          case 'PHY':
            array.sort((a, b) => isNaN(a.statistics.physical.average) || a.statistics.physical.average - b.statistics.physical.average)
        }
      }
    },
    setPlayer (player) {
      this.$store.commit('SET_PLAYER', player)
      this.$router.push({ path: `${player.slug.current}` })
    }
  }
}
</script>
