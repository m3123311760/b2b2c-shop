import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    user: null,
    products: [],
    cart: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setProducts(state, products) {
      state.products = products
    },
    addToCart(state, product) {
      state.cart.push(product)
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get('https://api.b2b2c-mall.com/v1/products')
        commit('setProducts', response.data)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    },
    async login({ commit }, credentials) {
      try {
        const response = await axios.post('https://api.b2b2c-mall.com/v1/users/login', credentials)
        commit('setUser', response.data.user)
        localStorage.setItem('token', response.data.token)
      } catch (error) {
        console.error('Login error:', error)
      }
    }
  }
})