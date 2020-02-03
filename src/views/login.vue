z<template>
  <div>
    <!-- header -->
    <header-bar />
    <div class="indexw100 relative">
      <div class=" center6">
        <div class="container">
          <p class="ioic-wited">
            <i class="fa fa-bell-o" aria-hidden="true"></i
            >：官方网站，请勿上当受骗，近期会员充值偶尔出现异常，请加QQ：123456789
          </p>
        </div>
      </div>
      <div class="container relative min-height500">
        <div class="absolute">
          <div></div>
        </div>
        <div class="mianLogiin">
          <p>登录</p>
          <form>
            <ul>
              <li>
                <div class="padd">
                  <i class="user"></i>
                </div>
                <div>
                  <input
                    type="text"
                    :placeholder="telmsg"
                    v-model="phone"
                    @focus="telmsg = ''"
                    @blur="telmsg='请输入手机号'"
                  />
                </div>
              </li>
              <li>
                <div class="padd">
                  <i class="ibg"></i>
                </div>
                <div>
                  <input
                    type="password"
                    :placeholder="pwdmsg"
                    v-model="pwd"
                    @focus="pwdmsg = ''"
                    @blur=" pwdmsg='请输入密码'"
                  />
                </div>
              </li>
            </ul>
            <div class="flex">
              <div @click="$router.push('/password')">忘记密码?</div>
            </div>
            <div class="register-admin login">
              <button type="button" @click="login">登录</button>
            </div>
            <div class="login">
              <button
                type="button"
                @click="$router.push('/register').catch(err => err)"
              >
                没有账号,去注册
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- footer -->
    <footer-bar />
  </div>
</template>
<script>
import qs from "qs";
import HeaderBar from "../components/Header.vue";
import FooterBar from "../components/Footer.vue";

export default {
  data() {
    return {
      telmsg:'请输入手机号',
      pwdmsg:'请输入密码',
      phone: "",
      pwd: ""
    };
  },
  created() {
  },
  mounted() {},
  methods: {
    async login() {
      var abtel = /^[1][3,4,5,7,8,9][0-9]{9}$/;
      var abpwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,10}$/;
      if (abpwd.test(this.pwd) == false || abtel.test(this.phone) == false) {
        this.pwd = "";
        this.phone = "";
        this.telmsg = "请输入手机号";
        this.pmsg = "请输入密码";
        return alert("账号或密码错误！");
      }
      console.log(123);
      const info={
        'phone':this.phone,
        'password':this.pwd
      }
      const {data:res}= await this.$axios.post('http://gaming.prmajors.com/index.php/gaming/user/login',qs.stringify(info))
      console.log(res);
      const userInfo={
        nickname:res.data.nickname,
        phone:res.data.phone,
        avatar:res.data.avatar
      }
      window.localStorage.setItem('token',res.data.token);
      window.localStorage.setItem('userinfo',JSON.stringify(userInfo));
      if(res.code==0)return alert(res.msg);
      if(res.code==1)return this.$router.push('/maCenter');
    }
  },
  components: {
    HeaderBar,
    FooterBar
  }
};
</script>
<style lang="less" scoped>
@import "../css/carouse.css";
@import "../css/font-awesome.min.css";
@import "../css/swiper.min.css";
@import "../css/bootstrap.css";
@import "../css/common.css";
@import "../css/index.css";
.indexw100 {
  /*background: url(../img/bgpng.gif);*/
  background-repeat: no-repeat;
  background-size: 100% auto;
}
.min-height500 {
  min-height: 680px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.min-height500 > div:first-child {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  opacity: 0.5;
  z-index: 2;
  /*background: #3A3D40;*/
}
.min-height500 > div:first-child > div {
  height: 450px;
  background: #384f63;
  margin: 130px auto;
  width: 400px;
  color: #fff;
  min-height: 300px;
  z-index: 9999;
  border-radius: 7px;
  box-shadow: 1px 1px 52px #09131d;
  background: #1f2f3d;
}
.mianLogiin {
  z-index: 999;
}
.mianLogiin p {
  font-size: 18px;
  text-align: center;
  color: #30c7ff;
}
.mianLogiin li {
  background: #172939;
  display: flex;
  margin-top: 10px;
}
.mianLogiin li .user {
  display: inline-block;
  width: 15px;
  height: 15px;
  background: url(../images/userHeard.png);
  background-repeat: no-repeat;
  background-size: 100% auto;
}
.mianLogiin li input {
  background: #172939;
  border: none;
  outline: medium;
  color: #fff;
  line-height: 35px;
  font-size: 16px;
  padding: 5px 10px;
}
.mianLogiin li > div {
  display: flex;
  align-items: center;
  justify-content: center;
}
.mianLogiin li .padd {
  padding: 0 15px;
}
.mianLogiin li .ibg {
  display: block;
  width: 15px;
  height: 15px;
  background-image: url(../images/lock.png);
  background-repeat: no-repeat;
  background-size: 100% auto;
}
.s .fa-mobile-phone {
  color: #fff;
  font-size: 26px;
}
.flexcenter {
  display: flex;
}
#safety1 {
  display: block;
  width: 15px;
  height: 15px;
  background-image: url(../images/safety.png);
  background-repeat: no-repeat;
  background-size: 100% auto;
  margin-left: 15px;
}
.w60 {
  width: 100px;
}

.w60 button {
  width: 100%;
  height: 100%;
  background: #1aa1d3;
  color: #fff;
  border: none;
  border: 1px solid #46ebff;
  box-sizing: border-box;
}
.fl1 > div:first-child {
  width: 150px;
}
.fl1 > div:first-child input {
  width: 100%;
}
.th25 {
  width: 70%;
}
form .flex {
  float: right;
  color: #fff;
  margin: 10px 5px;
}
form .flex > div:last-child {
  margin-left: 10px;
  line-height: 22px;
  display: flex;
  align-items: center;
  padding-top: 2px;
}
form .flex input {
  border-color: #fff;
  width: 18px;
  height: 18px;
  color: #22b14c;
}
form .flex > div:first-child {
  display: flex;
  align-items: center;
}
.register-admin button {
  background: #1d2e3b;
  color: #fff;
  border: none;
  text-align: center;
  line-height: 40px;
  width: 250px;
}
.register-admin {
  margin: 10px 0;
}
.login button {
  border: none;
  text-align: center;
  line-height: 40px;
  width: 250px;
  color: #fff;
  background: #1aa1d3;
  border: 1px solid #46ebff;
  box-sizing: border-box;
}
.herad .navbar {
  margin: 0 !important;
}
.flex div{
  cursor: pointer;
}
.flex div:hover{
  color: #1aa1d3;
}
</style>
