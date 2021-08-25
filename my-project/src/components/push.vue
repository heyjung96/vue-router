<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <h2>안뇽 !</h2>
    <!-- 이름을 가지는 라우트(선언적) -->
    <router-link :to="{ name: 'home' }">
      <h3>여기는 path 가 home</h3>
    </router-link>
    <!-- 리터럴 string -->
    <router-link to="/">/</router-link>

    <button v-on:click="btn(-1)">history.back(-1)</button>
    <button @click="btn(-2)">history.back(-2)</button>
    <button v-on:click="btn(1)">history.back(1)</button>
    <button @click="btn(2)">history.back(2)</button>
  </div>
</template>

<script>
export default {
  name: "push",
  data() {
    return {
      msg: "router-link와 push 테스트하는 곳입니다 (๑′ᴗ‵๑)"
    };
  },
  methods: {
    btn(history) {
      console.log("history", history);
      this.$router.go(history);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
