<template>  
  <div id="app">
    <Apphome v-bind:foods="foods" msg="helloj"></Apphome>
  

  <!-- retrieve data from array -->
  <h1 class="text">What have you eat today?</h1> 
    <ul>
    <li v-bind:key="food.index" v-for="food of foods">{{food.name}}</li>
    </ul>

    <!-- add data to array -->

  </div>
</template>



<script>

import Apphome from './components/AppHome.vue';


export default {
  name: 'app',
  components: {
    Apphome

  },
  data() {
    msg : "hello"
    return {
      foods : [
        {id: 1, name : 'cheese'},
        {id : 2, name: 'choco'},
        {id: 3, name: 'cream'}

        

      ]   //array of objects
    }
  },
  // methods : {
    // addFood : function () {
    //   this.foods.push({ value : ''})
    // }

    // }
  }


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
