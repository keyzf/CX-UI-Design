import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import tabView from './modules/tabView';
import sideBar from './modules/sideBar';
import test from './modules/test';


import getters from './getters';


import cx_easy_form from 'cx-easy-form';

let Form = cx_easy_form.store


Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    Form,
    tabView,
    sideBar,
    user,
    test
  },
  getters
});


export default store