import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/index.vue";
import Teamdetails from "../views/teamdetails.vue";
import ScoreTime from "../views/scoreTime.vue";
import Register from "../views/register.vue";
import Regard from "../views/regard.vue";
import Recommend from "../views/recommend.vue";
import Professional from "../views/professional.vue";
import Password from "../views/password.vue";


Vue.use(VueRouter);

const routes = [
  { path:"/",redirect:'/index'},
  { path: "/index",name:"Index",component: Index},
  { path: "/teamdetails",name:"Teamdetails",component: Teamdetails},
  { path: "/scoreTime",name:"ScoreTime",component: ScoreTime},
  { path: "/register",name:"Register",component: Register},
  { path: "/regard",name:"Regard",component: Regard},
  { path: "/recommend",name:"Recommend",component: Recommend},
  { path: "/professional",name:"Professional",component: Professional},
  { path: "/password",name:"password",component: Password},
];


const router = new VueRouter({
  routes
});

router.beforeEach((to,from,next)=>{
  //to将要访问的路径
  //from代表从那个路径跳转来的
  //next是一个函数代表放行 next('/login')强制跳转
  // if(to.path==='/login')return next();
  // const tkstr=window.localStorage.getItem('token');
  // if(!tkstr) return next('/login');
  
  next();
})

export default router;
