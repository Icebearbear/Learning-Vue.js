

<template>
  <div>
    <!-- <h2 class="text">Sally is here to interrogate you!</h2>
    <img id="img" src="../assets/sally.png">-->

    <ul>
      <li v-for="food of foods" v-bind:key="food.id">{{food.name}}</li>
    </ul>

    <input v-model="input" placeholder="type here" />
    <button type="button" class="submit_button" @click="addFood(input)">Add</button>
  </div>
</template>

<script>
export default {
  name: "Apphome",
  components: {},
  props: ["foods"],
  methods: {
    addFood: function(food) {
      this.$props.foods.push({ name: food });
    }
  }
};
</script>

<style scoped>
input {
  width: 250px;
  height: 50px;
  top: 80%;
}

button {
  width: 150px;
  height: 50px;
  top: 80%;
}
</style>