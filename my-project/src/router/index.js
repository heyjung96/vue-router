import Vue from "vue";
import Router from "vue-router";
import home from "@/components/HelloWorld";
import push from "@/components/push";
import programing from "@/components/linkPrograming";

Vue.use(Router);

const User = {
  props: ["id"],
  template: `
    <div class="user">
      <h2>$route.params.id 이름은 ~> {{ $route.params.id }}</h2>
      <router-view></router-view>
      <h2>id 의 이름은 ~> {{ id }} </h2>
    </div>
  `
};
const UserProfile = {
  template: "<div> 프로필 영역이시다 </div>"
};

// console.log(url.hash);
export default new Router({
  mode: "history",
  routes: [
    { path: "/", name: "home", component: home },
    {
      path: "/user/:id",
      name: "user",
      component: User,
      props: true,
      redirect: { name: "push" },
      //중첩된 라우터로 경로 /user/:id/profile 일 경우에 component를 불러옴.
      children: [{ path: "profile", component: UserProfile }]
    },
    { path: "/push", name: "push", component: push },
    { path: "/programing", name: "programing", component: programing }
  ]
});
