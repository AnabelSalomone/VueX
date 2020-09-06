<template>
  <div>
    <custom-selector :options='types'> </custom-selector>
    <custom-selector :options='sizes'> </custom-selector>
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
    }
  },
}
</script>