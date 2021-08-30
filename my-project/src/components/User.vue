<template>
  <div class="user">
    <h2>$route.params.id 이름은 ~> {{ $route.params.id }}</h2>
    <router-link to="/">
      <h3>GO HOME >>></h3>
    </router-link>
    <router-view></router-view>
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
