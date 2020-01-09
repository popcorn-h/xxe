<template>
  <div>
    <header-bar />

     <div class="a">
        <div class=" container addbg relative indexw100">
          <!-- <img src="img/bgpng.png" alt="" class="absolute" /> -->
          <div class=" center6" style="width: 1200px;margin: 0 auto	;">
            <div class="news">
              <p >
                <i class="fa fa-bell-o" aria-hidden="true"></i
                >：官方网站，请勿上当受骗，近期会员充值偶尔出现异常，请加QQ：123456789
              </p>
            </div>
          </div>
          <div class="absolute">
            <div></div>
          </div>
          <div class="title1 absolute">
            <div>
              <p>找回密码</p>
              <div class="addcor">
                <div><i class="fa fa-mobile-phone"></i></div>
                <div>
                  <input
                    type="tel"
                    value=""
                    placeholder="输入注册用手机号"
                  />
                </div>
              </div>
              <div class="addcor addcor1">
                <div>
                  <input
                    type="tel"
                    value=""
                    placeholder="输入验证码"
                  />
                </div>
                <div>
                  <button>获取验证码</button>
                </div>
              </div>
              <div class="w50">
                <button>下一步</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    <footer-bar />
  </div>
</template>
<script>
import $ from "jquery";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../js/login";
import HeaderBar from '../components/Header.vue';
import FooterBar from '../components/Footer.vue';

export default {
  data() {
    return {};
  },
  methods: {},
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
body > div > div.a .container {
  background-repeat: no-repeat;
  background-size: 100% auto;
  min-height: 800px;
  width: 100%;
}
body > div > div.container > .row:first-child {
  background: #22303b;
}
.row {
  padding: 0;
  margin: 0;
}
.addbg > div:first-child {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;
}
.addbg > div:last-child {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 2;
}
.addbg > div:first-child > div {
  min-height: 500px;
}
.addbg .title1 > div {
  width: 500px;
  margin: 50px auto;
  color: #fff;
  min-height: 300px;
  z-index: 9999;
}
.addbg .title1 > div p {
  color: #30c7ff;
  text-align: center;
  font-size: 18px;
  line-height: 55px;
  margin: 0;
}
.addbg .title1 > div .addcor {
  background: #172939;
  width: 50%;
  margin: 10px auto;
  display: flex;
}
.addbg .title1 > div .addcor > div:first-child {
  width: 50px;
  text-align: center;
}
.addbg .title1 > div .addcor > div:last-child {
  flex: 1;
}
.addbg .title1 > div .addcor i {
  font-size: 28px;
  line-height: 40px;
  margin: 0 10px;
}
.addbg .title1 > div .addcor input {
  background: #172939;
  border: none;
  line-height: 40px;
  padding: 0 10px;
  width: 100%;
  outline: medium;
}
.addcor button {
  width: 100%;
  height: 100%;
  background: #1aa1d3;
  border: 1px solid #46ebff;
  color: #fff;
  font-size: 12px;
}
.addcor1 > div:first-child {
  width: 40% !important;
  height: 40px;
  box-sizing: border-box;
  margin-right: 1%;
}
.addcor1 > div:last-child {
  width: 59% !important;
  height: 40px;
}
.w50 {
  width: 50%;
  margin: 10px auto;
}
.w50 button {
  width: 100%;
  line-height: 30px;
  background: #1aa1d3;
  border: 1px solid #46ebff;
  color: #fff;
  font-size: 12px;
}
.addbg .title1 > div {
  background: #20394f;
}

.indexw100>div.center6 p{
    line-height: 10px;
    padding-left: 15px;
}
</style>
