import Vue from 'vue'
import Vuex from 'vuex'
import UserService from '@/services/UserService.js'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
      axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`
    },
    CLEAR_USER_DATA() {
      // state.user = null
      localStorage.removeItem('user')
      // axios.defaults.headers.common['Authorization'] = null
      location.reload()
    }
  },
  actions: {
    async register({
      commit
    }, credentials) {
      const response = await UserService.setUser(credentials)
      commit('SET_USER_DATA', response.data)
    },
    async login({
      commit
    }, credentials) {
      const response = await UserService.login(credentials)
      commit('SET_USER_DATA', response.data)
    },
    logout({
      commit
    }) {
      commit('CLEAR_USER_DATA')
    }
  },
  getters: {
    loggedIn(state) {
      return !!state.user
    }
  }
})