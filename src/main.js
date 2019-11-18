import Vue from 'vue'
import App from './App.vue' // component
// import AppHome from './components/AppHome.vue'
// import Router from 'vue-router'
// Vue.use(Router);

// Vue.component('app-home', AppHome);

Vue.config.productionTip = false

//ViewModel
new Vue({   //rendering new Vue instance 
  render: h => h(App),    //rendering App component 
}).$mount('#app')       //inside an element with id of app
