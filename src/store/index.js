import { createStore } from 'vuex'

export default createStore({
  state: {
    stays: [],
    staysFiltered: []
  },
  mutations: {
    setStays(state, payload){
      state.stays = payload;
    },
    setStaysFiltered(state, payload){
      state.staysFiltered = payload;
    }
  },
  actions: {
    async fetchData({commit}){
      try {
        const res = await fetch('api.json')
        const data = await res.json()
        console.log(data)
        commit('setStays', data);
      } catch (error) {
        console.log(error)
      }
    }
  },getters:{
    topRated(state){
      return state.stays.sort((a,b) => {
        return a.rating < b.rating ? 1 : -1
      })
    }
  }
  ,
  modules: {
  }
})
