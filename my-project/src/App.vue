<template>
  <div id="app">
    <img
      style="height : 350px"
      src="https://cdn.hellodd.com/news/photo/202005/71835_craw1.jpg"
    />

    <router-view />

    <!--
      그냥 example 이런식으로 사용하면 컴포넌트를 직접 불러와서 그리는 방식이기때문에 어느 페이지를 가도 해당 화면이 보이게 된다.
      특정 페이지에서만 보이고 싶으면 router-view를 사용. 라우터 설정시 component's' 복수형으로 선언하고 오브젝트 형식으로 담아주면 특정 페이지에서만 보이게 된다.
    -->
    <!-- <example /> -->
    <!-- <router-view name="notFoundChildren"></router-view> -->
    <router-view name="example"></router-view>
  </div>
</template>

<script>
import example from "./components/example.vue";
export default {
  name: "App",
  components: { example }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  margin-bottom: 100px;
}
#img {
  height: 30px;
}
h1,
h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
div {
  margin: 10px;
}
</style>
