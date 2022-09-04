export const state = () => ({
  player: { name: 'veron' }
})

export const getters = {
  getPlayer: (state) => {
    return state.player
  }
}

export const mutations = {
  SET_PLAYER (state, value) {
    state.player = value
  }
}

export const actions = {
  setPlayer ({ commit }, newValue) {
    commit('SET_PLAYER', newValue)
  }
}
