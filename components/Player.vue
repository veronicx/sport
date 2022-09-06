<template>
  <div v-if="currentPlayer.statistics" class="bg-black h-full w-fit flex flex-col items-center justify-center text-white text-md pb-40 pt-20">
    <div class="w-fit bg-black flex flex-col  items-center justify-center sm:flex-row">
      <img :src="generateImage(currentPlayer.cardImage.asset._ref)" :alt="currentPlayer.name" class=" lg:w-1/6 lgh-1/6 sm:w-2/6 sm:h-2/6 object-contain">
      <div v-if="currentPlayer.statistics" class="grid grid-rows-3 grid-flow-col gap-4 justify-evenly sm:flex sm:flex-wrap lg:flex lg:flex-row lg:justify-around">
        <div class="flex flex-col justify-between h-fit p-2">
          <p class="uppercase p-0 w-full h-8 border-b-2 border-t-2 text-center flex flex-row justify-between">
            PACE <strong>{{ currentPlayer.statistics.pace.average }}</strong>
          </p>
          <p v-if="currentPlayer.statistics.pace.acceleration" class="p-0 w-full h-8 text-center flex flex-row justify-between mb-0">
            Acceleration <strong>{{ currentPlayer.statistics.pace.acceleration }}</strong>
          </p>
          <p v-if="currentPlayer.statistics.pace.sprintSpeed" class="p-0 w-full h-8 text-center flex flex-row items-end">
            Sprint Speed  <strong class="ml-2">{{ currentPlayer.statistics.pace.sprintSpeed }}</strong>
          </p>
        </div>
        <div class="flex flex-col justify-between h-fit p-2">
          <p class="uppercase p-0 w-full h-8 border-b-2 border-t-2 text-center flex flex-row justify-between">
            SHOOTING <strong class="ml-2">{{ currentPlayer.statistics.shooting.average }}</strong>
          </p>
          <p v-if="currentPlayer.statistics.shooting.finishing" class="p-0 w-full h-8 text-center flex flex-row justify-between mb-2">
            Finishing <strong class="ml-2">{{ currentPlayer.statistics.shooting.finishing }}</strong>
          </p>
          <p v-if="currentPlayer.statistics.shooting.longshot" class="p-0 w-full h-8 text-center flex flex-row justify-between mb-2">
            Longshot <strong class="ml-2">{{ currentPlayer.statistics.shooting.longshot }}</strong>
          </p>
          <p v-if="currentPlayer.statistics.shooting.penalties" class="p-0 w-full h-8 text-center flex flex-row justify-between mb-2">
            Penalties <strong class="ml-2">{{ currentPlayer.statistics.shooting.penalties }}</strong>
          </p>
          <p v-if="currentPlayer.statistics.shooting.positioning" class="p-0 w-full h-8 text-center flex flex-row justify-between mb-2">
            Positioning <strong class="ml-2">{{ currentPlayer.statistics.shooting.positioning }}</strong>
          </p>
          <p v-if="currentPlayer.statistics.shooting.shotPower" class="p-0 w-full h-8 text-center flex flex-row justify-between mb-2">
            Shot Power <strong class="ml-2">{{ currentPlayer.statistics.shooting.shotPower }}</strong>
          </p>
          <p v-if="currentPlayer.statistics.shooting.volleys" class="p-0 w-full h-8 text-center flex flex-row justify-between mb-2">
            Volleys <strong class="ml-2">{{ currentPlayer.statistics.shooting.volleys }}</strong>
          </p>
        </div>
        <div class="flex flex-col justify-between h-fit p-2">
          <p v-if="currentPlayer.statistics.passing.average" class="uppercase p-0 w-full h-8 border-b-2 border-t-2 text-center flex flex-row justify-between">
            PASSING  <strong class="ml-2">{{ currentPlayer.statistics.passing.average }}</strong>
          </p>
          <p v-if="currentPlayer.statistics.passing.crossing" class="p-0 w-full h-8 text-center flex flex-row justify-between mb-2">
            Crossing <strong class="ml-2">{{ currentPlayer.statistics.passing.crossing }}</strong>
          </p>
          <p v-if="currentPlayer.statistics.passing.curve" class="p-0 w-full h-8 text-center flex flex-row justify-between mb-2">
            Curve   <strong class="ml-2">{{ currentPlayer.statistics.passing.curve }}</strong>
          </p>
          <p v-if="currentPlayer.statistics.passing.freeKick" class="p-0 w-full h-8 text-center flex flex-row justify-between mb-2">
            Free Kick <strong class="ml-2">{{ currentPlayer.statistics.passing.freeKick }}</strong>
          </p>
          <p v-if="currentPlayer.statistics.passing.longPassing" class="p-0 w-full h-8 text-center flex flex-row justify-between mb-2">
            Long Passing <strong class="ml-2">{{ currentPlayer.statistics.passing.longPassing }}</strong>
          </p>
          <p v-if="currentPlayer.statistics.passing.shortPassing" class="p-0 w-full h-8 text-center flex flex-row justify-between mb-2">
            Short Passing <strong class="ml-2">{{ currentPlayer.statistics.passing.shortPassing }}</strong>
          </p>
          <p v-if="currentPlayer.statistics.passing.vision" class="p-0 w-full h-8 text-center flex flex-row justify-between mb-2">
            Vision <strong class="ml-2">{{ currentPlayer.statistics.passing.vision }}</strong>
          </p>
        </div>
        <div class="flex flex-col justify-between h-fit p-2">
          <p v-if="currentPlayer.statistics.dribbling.average" class="uppercase p-0 w-full h-8 border-b-2 border-t-2 text-center flex flex-row justify-between">
            DRIBBLING <strong class="ml-2">{{ currentPlayer.statistics.dribbling.average }}</strong>
          </p>
          <p v-if="currentPlayer.statistics.dribbling.agility" class="p-0 w-full h-8 text-center flex flex-row justify-between mb-2">
            Agility <strong class="ml-2">{{ currentPlayer.statistics.dribbling.agility }}</strong>
          </p>
          <p v-if="currentPlayer.statistics.dribbling.balance" class="p-0 w-full h-8 text-center flex flex-row justify-between mb-2">
            Balance <strong class="ml-2">{{ currentPlayer.statistics.dribbling.balance }}</strong>
          </p>
          <p v-if=" currentPlayer.statistics.dribbling.ballControl" class="p-0 w-full h-8 text-center flex flex-row justify-between mb-2">
            Ball Control <strong class="ml-2">{{ currentPlayer.statistics.dribbling.ballControl }}</strong>
          </p>
          <p v-if=" currentPlayer.statistics.dribbling.composure" class="p-0 w-full h-8 text-center flex flex-row justify-between mb-2">
            Composure <strong class="ml-2">{{ currentPlayer.statistics.dribbling.composure }}</strong>
          </p>
          <p v-if="currentPlayer.statistics.dribbling.reactions" class="p-0 w-full h-8 text-center flex flex-row justify-between mb-2">
            Reactions <strong class="ml-2">{{ currentPlayer.statistics.dribbling.reactions }}</strong>
          </p>
        </div>
        <div class="flex flex-col justify-between h-fit p-2">
          <p class="uppercase p-0 w-full h-8 border-b-2 border-t-2 text-center flex flex-row justify-between">
            DEFENSE <strong class="ml-2">{{ currentPlayer.statistics.defense.average }}</strong>
          </p>
          <p v-if="currentPlayer.statistics.defense.defAwareness" class="p-0 w-full h-8 text-center flex flex-row justify-between mb-2">
            Defense Awareness <strong class="ml-2">{{ currentPlayer.statistics.defense.defAwareness }}</strong>
          </p>
          <p v-if="currentPlayer.statistics.defense.heading" class="p-0 w-full h-8 text-center flex flex-row justify-between mb-2">
            Heading <strong class="ml-2">{{ currentPlayer.statistics.defense.heading }}</strong>
          </p>
          <p v-if="currentPlayer.statistics.defense.interceptions" class="p-0 w-full h-8 text-center flex flex-row justify-between mb-2">
            Interceptions <strong class="ml-2">{{ currentPlayer.statistics.defense.interceptions }}</strong>
          </p>
          <p v-if="currentPlayer.statistics.defense.slidingTackle" class="p-0 w-full h-8 text-center flex flex-row justify-between mb-2">
            Sliding Tackle <strong class="ml-2">{{ currentPlayer.statistics.defense.slidingTackle }}</strong>
          </p>
          <p v-if="currentPlayer.statistics.defense.standingTackle" class="p-0 w-full h-8 text-center flex flex-row justify-between mb-2">
            Standing Tackle <strong class="ml-2">{{ currentPlayer.statistics.defense.standingTackle }}</strong>
          </p>
        </div>
        <div class="flex flex-col justify-between h-fit p-2">
          <p class="uppercase p-0 w-full h-8 border-b-2 border-t-2 text-center flex flex-row justify-between">
            Physical <strong class="ml-2">{{ currentPlayer.statistics.physical.average }}</strong>
          </p>
          <p v-if="currentPlayer.statistics.physical.agression" class="p-0 w-full h-8 text-center flex flex-row justify-between mb-2">
            Agression <strong class="ml-2">{{ currentPlayer.statistics.physical.agression }}</strong>
          </p>
          <p v-if="currentPlayer.statistics.physical.jumping" class="p-0 w-full h-8 text-center flex flex-row justify-between mb-2">
            Jumping <strong class="ml-2">{{ currentPlayer.statistics.physical.jumping }}</strong>
          </p>
          <p v-if="currentPlayer.statistics.physical.stamina" class="p-0 w-full h-8 text-center flex flex-row justify-between mb-2">
            Stamina <strong class="ml-2">{{ currentPlayer.statistics.physical.stamina }}</strong>
          </p>
          <p v-if="currentPlayer.statistics.physical.strength" class="p-0 w-full h-8 text-center flex flex-row justify-between mb-2">
            Strength <strong class="ml-2">{{ currentPlayer.statistics.physical.strength }}</strong>
          </p>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-full justify-center items-center mt-10 p-4  sm:self-auto">
      <div class="flex flex-row w-full mb-4 justify-between p-2 items-center sm:self-start  sm:w-5/12 sm:mb-2">
        <h3 class="text-2xl mr-4">
          {{ currentPlayer.name }}
        </h3>
        <nuxt-link to="/" class="text-gray-400 hover:text-white self-center ml-4">
          View all cards
        </nuxt-link>
      </div>
      <div class="flex flex-col justify-between w-full p-2 sm:flex-col md:flex-row sm:w-full">
        <div class=" border-gray-800 border-b-2 pb-2 flex p-2 flex-row justify-between sm:w-auto sm:border-r-2 sm:border-b-0 sm:pr-4 sm:flex-col">
          <p class="text-gray-400">
            Club
          </p>
          <p>{{ currentPlayer.club }}</p>
        </div>
        <div class="border-gray-800 border-b-2 pb-2 flex p-2 flex-row justify-between sm:w-auto sm:border-r-2 sm:border-b-0 sm:pr-4 sm:flex-col">
          <p class="text-gray-400">
            League
          </p>
          <p>{{ currentPlayer.league }}</p>
        </div>
        <div class="border-gray-800 border-b-2 pb-2 flex p-2 flex-row justify-between sm:w-auto sm:border-r-2 sm:border-b-0 sm:pr-4 sm:flex-col">
          <p class="text-gray-400">
            Nation
          </p>
          <p>{{ currentPlayer.nation }}</p>
        </div>
        <div class="border-gray-800 border-b-2 pb-2 flex p-2 flex-row justify-between sm:w-auto sm:border-r-2 sm:border-b-0 sm:pr-4 sm:flex-col">
          <p class="text-gray-400">
            Strong Foot
          </p>
          <p>{{ currentPlayer.strongFoot }}</p>
        </div>
        <div class="border-gray-800 border-b-2 pb-2 flex p-2 flex-row justify-between sm:w-auto sm:border-r-2 sm:border-b-0 sm:pr-4 sm:flex-col">
          <p class="text-gray-400">
            Age
          </p>
          <p>{{ currentPlayer.age }}</p>
        </div>
        <div class="border-gray-800 border-b-2 pb-2 flex p-2 flex-row justify-between sm:w-auto sm:border-r-2 sm:border-b-0 sm:pr-4 sm:flex-col">
          <p class="text-gray-400">
            Height
          </p>
          <p>{{ currentPlayer.height }}</p>
        </div>
        <div class="border-gray-800 border-b-2 pb-2 flex p-2 flex-row justify-between sm:w-auto sm:border-r-2 sm:border-b-0 sm:pr-4 sm:flex-col">
          <p class="text-gray-400">
            Work Rates
          </p>
          <p>{{ currentPlayer.workRatesDefensive }}/{{ currentPlayer.workRatesAttacking }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imageUrlBuilder from '@sanity/image-url'
import client from '../plugins/sanityClient'
export default {
  name: 'Player',
  props: {
    currentPlayer: {
      type: Object,
      required: true
    }
  },
  methods: {
    generateImage (source) {
      const builder = imageUrlBuilder(client)
      return builder.image(source)
    }
  }
}
</script>
