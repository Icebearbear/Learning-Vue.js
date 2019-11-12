import Vue from 'vue'
import App from './App.vue'
import AppHome from './components/AppHome.vue'
import AppAbout from './components/AppAbout.vue'
import AppContact from './components/AppContact.vue'
import AppServices from './components/AppServices.vue'
import AppTeam from './components/AppTeam.vue'
import AppTestimonial from './components/AppTestimonial.vue'
// import Router from 'vue-router'

// Vue.use(Router);

Vue.component('app-home', AppHome);
Vue.component('app-about', AppAbout);
Vue.component('app-contact', AppContact);
Vue.component('app-services', AppServices);
Vue.component('app-team' , AppTeam);
Vue.component('app-testimonial', AppTestimonial);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
