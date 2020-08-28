<template>
 <div>
	<select name="slector" >
		<option :key="option" v-for="option in options" > {{option}} </option>
	</select>
		{{this.$store.state.coffee.type}}

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
      selectedCoffeeType:""
    }
  }
}
</script>

<style scoped>

</style>
