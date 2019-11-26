

<template>
    <div>
    <!-- <h2 class="text">Sally is here to interrogate you!</h2>
    <img id="img" src="../assets/sally.png"> -->
  
    <ul>
    <li v-bind:key="food.index" v-for="food of foods">{{food.name}}</li>
    </ul> 

    <input v-model="message" placeholder="type here" :key="index" value="">
    <button type="button" class="submit_button" @click="addFood">Add</button>
 

  
</div>
</template>

<script>

export default {
    name: "Apphome",
    components: {
    

    },
    props: ["foods"],
    methods: {
        addFood : function(){
            // console.log(this.foods)
            this.foods.push({name: value})
        }
    }
  
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


