import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    order: [],
    sizes: ["large", "medium", "small"],
    coffeetypes: ["dark", "strong", "light"],
    extras: ["no extras", "sugar", "milk", "cream"],
    coffee: {
      "type": "pouet pouet",
      "size": "",
      "extra": "",
      "price": 0,
      "detailSize": 0,
      "detailExtra": 0
      }
  },
  getters: {
    getOrder(state){
      return state.getOrder
    },
    getSizes(state){
      return state.sizes
    },
    getCoffeeTypes(state) {
      return state.coffeetypes
    },
    getExtras(state) {
    return state.extras
    },
    getCoffee (state) {
      return state.coffee
    }
  },
  mutations: {
    mutateOrder(state, order){
      state.order = order
    },
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
  },
  actions: {
    changeCoffeeType({commit}, opt){
      commit("mutateCoffeeType", opt)
   }
  }
})