<template>
  <div class="user">
    <h2>$route.params.id 이름은 ~> {{ $route.params.id }}</h2>
    <router-link to="/">
      <h3>GO HOME >>></h3>
    </router-link>
    <router-link :to="'changeIDTest'">
      <div>router-link :to="changeIDTest"</div>
    </router-link>

    <h2>--------------------------</h2>
    <h3>children의 Not Found 페이지로 갈 것입니다요</h3>
    <router-link :to="'테스투/error'">
      <div>GO 404 : 하위에서 알수없는 경로로 이동 >>></div>
    </router-link>
    -----------
    <router-view></router-view>
    ------------
  </div>
</template>

<script>
export default {
  name: "User",
  created() {
    console.log("---");
    console.log("this.$router => ", this.$router);
    console.log("this.$route => ", this.$route);
  }
};
</script>

<style></style>
