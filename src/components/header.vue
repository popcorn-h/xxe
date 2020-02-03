<template>
  <div>
    <div class="herad relative">
      <nav
        class="navbar navbar-default addnav-color reomvecolor"
        style="direction: none;"
      >
        <div class="container sp">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#" ><img src="../images/log_03.png" alt="" class="navbar-img-log" /></a>

          </div>
          <div
            class="collapse navbar-collapse "
            id="bs-example-navbar-collapse-1"
          >
            <ul class="nav navbar-nav" id="nav">
              <li
                class="active-addcolor"
                @click="$router.push('/index').catch(err => err)"
              >
                <a href="javascript:;" class=""
                  >首页<span class="sr-only">(current)</span></a
                >
              </li>
              <li class="border-378">|</li>
              <li @click="$router.push('/scoreTime/11').catch(err => err)">
                <a href="javascript:;">即时比分</a>
              </li>
              <li class="border-378">|</li>
              <li @click="$router.push('/teamdetails').catch(err => err)">
                <a href="javascript:;">比赛推荐</a>
              </li>
              <li class="border-378">|</li>
              <li @click="$router.push('/professional').catch(err => err)">
                <a href="javascript:;">职业联赛</a>
              </li>
            </ul>

            <ul class="nav navbar-nav navbar-right">
              <li class="avatar" v-if="!islogin">
                <img src="../images/user.png" alt="">
              </li>
              <li class="addcolr-d register" v-show="!islogin">
                <a href="javascript:;"  @click="exit">退出</a>
              </li>
              <li class="addcolr-d log" id="login" v-show="islogin" @click="$router.push('/login').catch(err=>err)">
                <a href="javascript:;">登录</a>
              </li>
              <li class="addcolr-d register" v-show="islogin" @click="$router.push('/register').catch(err=>err)">
                <a href="javascript:;">注册</a>
              </li>
            </ul>
          </div>
          
        </div>
      </nav>
    </div>

    
    <div class="minitab">
      <ul>
        <li>我的收藏</li>
        <li>个人资料</li>
        <li>修改密码</li>
      </ul>
    </div>

  </div>
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {
      islogin:false,
      info:''
    };
  },
  created(){
    this.initlogin();
  },
  mounted() {
    this.gocenter();
    this.choosetab();
    this.inittab();
    this.minitab();
  },
  methods: {
    gocenter(){
      let that=this;
      $('.minitab ul').on('click','li',function(){
        console.log($(this).index());
        let num=$(this).index();
        window.localStorage.setItem('mini',num);
        that.$router.push('/maCenter').catch(err=>err);
      })
    },
    minitab(){
      $('.avatar').mouseover(function(){
        $('.minitab').show();
      })
       $('.minitab').mouseover(function(){
        $('.minitab').show();
      })
      $('.avatar').mouseout(function(){
        $('.minitab').hide();
      })
       $('.minitab').mouseout(function(){
        $('.minitab').hide();
       })
    },
    initlogin(){
      const token=window.localStorage.getItem('token');
      // this.info=JSON.parse(window.localStorage.getItem('userinfo'));//头像
      this.info='../images/user.png';
      if(!token){
        this.islogin=true
      }
    },
    exit(){
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('userinfo');
      this.islogin=true;
      this.$router.push('/index').catch(err=>err);
    },
    close(){
       $(".sg,.posi").hide();
    },
    inittab(){
      if(this.$route.path==="/register")return;
       const oldnum=window.localStorage.getItem('num');
      $('#nav>li').removeClass('active-addcolor').eq(oldnum).addClass('active-addcolor');
    },
    choosetab(){
      $('#nav>li').click(function() {
          var num=$(this).index();
          window.localStorage.setItem('num',num)
          $('#nav>li').removeClass('active-addcolor').eq(num).addClass('active-addcolor');
      })
    }
  }
};
</script>
<style lang="less">
@import "../css/carouse.css";
@import "../css/font-awesome.min.css";
@import "../css/swiper.min.css";
@import "../css/bootstrap.css";
@import "../css/common.css";
@import "../css/index.css";
@media (min-width: 1200px){
  .navbar-nav>li, .navbar-nav>li>a {
    height: 75px!important;
}
}
nav {
  width: 100%;
  margin-top: 0;
}
.box {
  z-index: 999999;
}
.sg .main1{
    padding-top: 15px;
    .close{
        float: right;
    }
}
.nav li img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}

.minitab{
  background-color: #32495d ;
  width: 100px;
  z-index: 9999;
  position: fixed;
  top: 85px;
  right: 311px;
  display: none;
  ul li{
    color:#fff;
    height: 35px;
    line-height: 35px;
    text-align: center;
  }
  ul li:hover{
    background-color: #21303d;
    cursor: pointer;
  }
}
</style>
