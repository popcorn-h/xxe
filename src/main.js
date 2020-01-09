import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import router from "./router";
import store from "./store";
import echarts from "echarts";

Vue.prototype.$echarts = echarts;

axios.defaults.baseURL = "https://api.xxe.io/";
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = true;
// 如果允许请求携带cookie，此时 origin配置不能用 *，此时前端似乎也要做配置，让请求中携带cookie
// header('Access-Control-Allow-Credentials:true');

 
//配置token令牌在axios的请求拦截器中Authorization
axios.interceptors.request.use(config => {
  // config.headers.Authorization = window.sessionStorage.getItem('token');
  return config;
});

//响应拦截器
axios.interceptors.response.use(config => {
  return config;
});
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
