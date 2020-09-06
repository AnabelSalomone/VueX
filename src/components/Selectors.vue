<template>
  <div>
    <custom-selector :options='types' v-on:selection="changeType"> </custom-selector>
    <custom-selector :options='sizes'> </custom-selector>
    {{ coffee.type }}
  </div>
</template>

<script>
import CustomSelector from './CustomSelector.vue'

export default {
  name: 'Selectors',
  components: {
    CustomSelector
  },
  computed: {
    types(){
      return this.$store.getters.getCoffeeTypes
    },
    sizes(){
      return this.$store.getters.getSizes
    },
    coffee(){
      return this.$store.getters.getCoffee
    }
  },
  methods: {
    changeType(option){
      console.log("option", option)
      this.$store.dispatch("changeCoffeeType", option)
    }
  }
}
</script>