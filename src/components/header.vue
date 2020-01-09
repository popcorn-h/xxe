<template>
    <div>
        <div class="herad relative">
            <nav class="navbar navbar-default addnav-color reomvecolor" style="direction: none;">
            <div class="container sp">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#"><img src="../images/log_03.png" alt="" class="navbar-img-log"/></a>
                </div>
                <div class="collapse navbar-collapse " id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li class="active-addcolor" @click="$router.push('/index')"><a href="#" class="">首页<span class="sr-only">(current)</span></a></li>
                        <li class="border-378">|</li>
                        <li @click="$router.push('/scoreTime')"><a href="#">即时比分</a></li>
                            <li class="border-378">|</li>
                        <li @click="$router.push('/teamdetails')"><a href="#">比赛推荐</a></li>
                            <li class="border-378">|</li>
                        <li @click="$router.push('/professional')"><a href="#">职业联赛</a></li>
                    </ul>

                    <ul class="nav navbar-nav navbar-right">
                        <li class="addcolr-d log"><a href="#">登录</a></li>
                        <li class="addcolr-d register"  @click="$router.push('/register')"><a href="#">注册</a></li>
                    </ul>
                </div>
            </div>
            </nav>

            <div class="posi">
            </div>
            <div class="sg" v-show="isshow">
                <div class="main1">
                    <p>登录</p>
                    <div class="center">
                        <ul>
                            <li class="addooo">
                                <div class="w20">
                                    <i class="fa fa-mobile-phone"></i>
                                </div>
                                <div class="w80">
                                    <input type="text" name="" id="" value="" placeholder="请输入注册的手机号码" />
                                </div>
                            </li>
                            <li class="addooo">
                                <div class="w20">
                                    <i class="fa fa-mobile-phone"></i>
                                </div>
                                <div class="w80">
                                    <input type="text" name="" id="" value="" placeholder="请输入注册的手机号码" />
                                </div>
                            </li>
                            <li class="marg-right">
                                <p><a href="">忘记密码</a></p>
                            </li>
                            <li>
                                <button>登录</button>
                            </li>
                            <li>
                                <button>没有账号,立即注册</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    data(){
    return{
    }
    },
    methods:{
    }
}
</script>
<style lang='less'>
@import '../css/carouse.css';
@import '../css/font-awesome.min.css';
@import '../css/swiper.min.css';
@import '../css/bootstrap.css';
@import '../css/common.css';
@import '../css/index.css';
nav{
    width: 100%;
	margin-top:0;
}
</style>