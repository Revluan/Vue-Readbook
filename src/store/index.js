import Vue from 'vue';
import Vuex from 'vuex';
import book from './modules/book'
import getters from './getters'
Vue.use(Vuex);
const store = new Vuex.Store({
  modules:{
    book
  },
  getters
});

export default store;
