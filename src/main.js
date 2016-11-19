import Vue from 'vue';
/* eslint no-unused-vars: 0 */
const app = new Vue({
  components: {
    parent: require('./cardlist.vue'),
  }
}).$mount('#app');
