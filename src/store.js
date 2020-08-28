import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    sizes: ["large", "medium", "small"],
    order: [],
    coffeetypes: ["dark", "strong", "light"],
    coffee: {
      "type": "poo",
      "size": "",
      "extra": "",
      "price": 0,
      "detailSize": 0,
      "detailExtra": 0
      }
  },
  getters: {
    getSizes(state){
      return state.sizes
    },
    getOrder(state){
      return state.getOrder
    },
    getCoffeeTypes(state) {
      return state.coffeetypes
    },
    getCoffee (state) {
      return state.coffee
    }
  },
  mutations: {
    mutateCoffeeType(state, type){
      state.coffee.type = type
    },
    mutateCoffeeSize(state, size){
      state.coffee.size = size
    },
    mutateCoffeeExtras(state, extra){
      state.coffee.extra = extra
    },
    mutateCoffeePrice(state, price){
      state.coffee.price = price
    },
    mutateCoffeeDetailSize(state, detailSize){
      state.coffee.detailSize = detailSize
    },
    mutateCoffeeDetailExtra(state, detailExtra){
      state.coffee.detailExtra = detailExtra
    }
  }
})