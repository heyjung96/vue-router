import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import HelloWorld2 from "@/components/HelloWorld2";

Vue.use(Router);

// console.log(url.hash);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/test",
      name: "HelloWorld2",
      component: HelloWorld2
    }
  ]
});
