<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <ul>
        <li v-for="(item,index) in students" :key="index">
          {{item.name}}
          {{item.games.length}}
          <button> Team A </button>
          <button> Team B </button>
        </li>
      </ul>
    
  </div>
</template>

<script>
// const data = require("../api/data.js");
// import data from "../api/data";
import store from "../store/index";

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "vuex practice"
      // students: []
    };
  },
  computed: {
    students() {
      return store.state.students;
    }
  },
  created() {
    // this.students = data.getStudents();
    store.dispatch("getStudens");
  }
};
</script>

<style scoped>
</style>
