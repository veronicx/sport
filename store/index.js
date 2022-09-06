export const state = () => ({
  player: { name: 'veron' },
  players: []
})

export const getters = {
  getPlayer: (state) => {
    return state.player
  },
  getPlayers: (state) => {
    return state.players
  }
}

export const mutations = {
  SET_PLAYER (state, value) {
    state.player = value
  },
  SET_PLAYERS (state, value) {
    state.players = value
  }
}

export const actions = {
  setPlayer ({ commit }, newValue) {
    commit('SET_PLAYER', newValue)
  },
  setPlayers ({ commit }, newValue) {
    commit('SET_PLAYERS', newValue)
  }
}
