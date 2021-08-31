import Vue from "vue";
import Router from "vue-router";
import home from "@/components/HelloWorld";
import compUser from "@/components/User";
import push from "@/components/push";
import programing from "@/components/linkPrograming";
import notFound from "@/components/NotFound";
import notFoundChildren from "@/components/NotFoundChildren";
import example from "@/components/example";

Vue.use(Router);

const User = {
  props: ["id", "to"],
  template: `
    <div class="user">
      <h2>$route.params.id 이름은 ~> {{ $route.params.id }}</h2>
      <h2>id 의 이름은 ~> {{ id }} </h2>
      <router-link to="/">
        <h3>GO HOME >>> </h3>
      </router-link>
      <router-view></router-view>

      <h2>--------------------------</h2>
        <h3> ID가 바뀐다s ! </h3>
        <router-link :to="{path : 'profile'}">
          <div> router-link :to="{path : 'profile'}" </div>
        </router-link>
        <router-link :to="'profile'">
          <div> router-link :to="profile" </div>
        </router-link>

      <h2>--------------------------</h2>
        <h3>이쪽 아래를 클릭하면 프로필 영역이 생길것입니다 ,, </h3>
        <router-link :to="{name : 'profile'}">
          <div> router-link :to="{name : 'profile'}"  </div>
        </router-link>
        <router-link v-bind:to="{name : 'profile'}">
          <div> router-link v-bind:to="{name : 'profile'}"  </div>
        </router-link>
        <router-link :to="'profile'" append>
          <div> router-link :to="'profile'" append   </div>
        </router-link>



      <h2>--------------------------</h2>
        <h3>제일 바깥쪽의 Not Found 페이지로 갈 것입니다요 </h3>
        <router-link :to="'/profile'">
          <div>:to="'/profile'" >>> </div>
        </router-link>

        <router-link to="/profile">
          <div>to="'/profile'" >>> </div>
        </router-link>


      <h2>--------------------------</h2>
      <h3>children의 Not Found 페이지로 갈 것입니다요 </h3>
      <router-link to="/user/TEST/error">
        <div>GO 404 : 하위에서 알수없는 경로로 이동 >>> </div>
      </router-link>
    </div>
  `
};
const UserProfile = {
  template: `
    <div>
      프로필 영역이시다
      <router-link :to="'/user/newUSER'">
        <img style="height:50px" src="https://post-phinf.pstatic.net/MjAxODAyMTZfMTc1/MDAxNTE4NzY4MzY2Mzky.uHl9W4Ck2pCtJpTIRSsmSD_x3RrSJE9TgsAAH6KwBWYg.E5STeiemwcVj5M7BLB5zS5bfD6Ou2GzIK-TBVvn3YIMg.JPEG/%EB%AC%B4%EC%A0%9C-1_%EB%B3%B5%EC%82%AC.jpg?type=w1200" />
      </router-link>
    </div>`
};

// console.log(url.hash);
export default new Router({
  mode: "history",
  routes: [
    { path: "/", name: "home", component: home },
    { path: "/comp/user/:id", name: "compUser", component: compUser },
    {
      path: "/user/:id",
      name: "user",
      component: User,
      props: true,
      // redirect: { name: "push" },
      //중첩된 라우터로 경로 /user/:id/profile 일 경우에 component를 불러옴.
      children: [
        { path: "profile", name: "profile", component: UserProfile },
        {
          path: "error",
          name: "notFoundChildren",
          component: notFoundChildren
        },
        { path: "*", component: notFoundChildren }
      ]
    },
    { path: "/push", name: "push", component: push },
    {
      path: "/programing",
      name: "programing",
      redirect: { name: "push" },
      components: {
        default: programing,
        notFoundChildren: notFoundChildren
      }
    },
    {
      path: "/example",
      name: "example",
      components: { default: push, example: example }
    },
    //GO NOT FOUND PAGE
    { path: "*", component: notFound }
  ]
});
