<template>
 <div>
	<select name="selector" @change="onOptionChange($event)" v-model="selectedCoffee">
    <option disabled value="">Choisissez</option>
		<option :key="option" v-for="option in options" :value=option> {{option}} </option>
	</select>
  {{ selectedCoffee }}
 </div>
</template>

<script>
export default {
  name: 'CoffeeSelector',
  props: {
    options: Array
  },
  data(){
    return {
      selectedCoffee:""
    }
  },
  methods: {
    onOptionChange: function(event) {
      this.$emit('selection', event.target.value)
    }
  }
}
</script>

<style scoped>

</style>
