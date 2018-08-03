import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import data from '../api/data';

export default new Vuex.Store({
  state: {
    students: []
  },
  getters: {

  },
  actions: {
    getStudens(context) {
      context.commit('setStudents')
    }

  },
  mutations: {
    setStudents(state) {
      state.students = data.getStudents();
    }
  }
})
