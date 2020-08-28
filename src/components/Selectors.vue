<template>
  <div>
    <selector-coffee :options='types'> </selector-coffee>
  </div>
</template>

<script>
import SelectorCoffee from './SelectorCoffee.vue'

export default {
  name: 'Selectors',
  components: {
    SelectorCoffee
  },
  computed: {
    types(){
      return this.$store.state.coffeetypes
    }
  },
}
</script>