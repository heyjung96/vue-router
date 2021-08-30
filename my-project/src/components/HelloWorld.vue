<template>
  <div class="hello">
    <h2>{{ msg }}</h2>

    <router-link to="/user/testUSER">
      <h3>중첩된 라우트</h3>
    </router-link>
    <router-link to="/">
      <h3>여기는 path 가 /</h3>
    </router-link>
    <router-link to="/comp/user/componentIDTest">
      <h3>여기는 path 가 /comp/user/componentIDTest</h3>
    </router-link>

    <!-- router-link와 push  -->
    <router-link to="/push">
      <h3>프로그래밍 방식 네비게이션</h3>
    </router-link>
    <router-link to="/programing">
      <h3>리다이렉트가 됩니다</h3>
      <span>[원래경로 /programing => /push]</span>
    </router-link>

    <!--  -->
    <router-link to="/example">
      <h3>components !</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "안녕하세요. 여기는 홈입니다욧"
    };
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
