

<template>
    <div>
    <!-- <h2 class="text">Sally is here to interrogate you!</h2>
    <img id="img" src="../assets/sally.png"> -->
  
    <h1 class="text">What have you eat today? lololol</h1>
    <div v-bind:key="food.id" v-for="food in foods"></div>
    <h3>{{food.name}}</h3>
    <button type="button" class="submit_button" @click="addFood">Add</button>
    <h3>{{msg}}</h3>
  
</div>
</template>

<script>
export default {
    name: "app-home",
    props: ["foods"]
  
}
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
    top: 80%
}

</style>


