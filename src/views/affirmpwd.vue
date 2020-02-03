<template>
    <div>
        <header-bar />
        <!-- 中间部分 -->
        <div class="a indexw100 relative">
            <img src="/img/bgpng.png" alt=""  class="absolute"/>
            <div class=" center7" style="background: #22303B;">
                <div class="container5" style="width: 1200px;margin: 0 auto;padding: 20px 0;">
                    <p class="ioic-wited"><i class="fa fa-bell-o" aria-hidden="true"></i>：官方网站，请勿上当受骗，近期会员充值偶尔出现异常，请加QQ：123456789</p>
                </div>
            </div>
            <div class="addcor_center relative">
                <div class="title1 absolute">
                    <div class="title-box">
                        <p>找回密码</p>
                        <div class="addcor">
                            <div><i class="block5"></i></div>
                            <div>
                                <input type="tel" name="" id="" value="" placeholder="输入修改的密码" />
                            </div>
                        </div>
                        <div class="addcor">
                            <div><i class="block5"></i></div>
                            <div>
                                <input type="tel" name="" id="" value="" placeholder="请再次输入密码" />
                            </div>
                        </div>
                        <div class="w50">
                            <button>确定</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 尾部 -->
        <footer-bar />
    </div>
</template>

<script>
import $ from 'jquery';
import axios from 'axios';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../js/login.js';
import HeaderBar from '../components/Header.vue';
import FooterBar from '../components/Footer.vue';
export default {
    data(){
        return {
        }
    },
    mounted(){

    },
    methods:{

    },
    components:{
        HeaderBar,
        FooterBar
    }
}
</script>

<style scoped lang="less">
@import '../css/carouse.css';
@import '../css/font-awesome.min.css';
@import '../css/swiper.min.css';
@import '../css/bootstrap.css';
@import '../css/common.css';
@import '../css/index.css';
.addcor_center{
    /*background-image: url(img/bgpng.png);*/
    background-repeat: no-repeat;
    background-size: 100% auto;
    min-height: 800px;
    width: 100%;
}
.addcor_center>.row:first-child{
    background: #22303B;
}
.row{
    padding: 0;
    margin: 0;
}
.addcor_center .addbg-one{
    width: 100%;
    height: 100%;
    background: #313C47;
    left: 0;
    top: 0;
    z-index: 1;
    opacity: 0.5;
}
.addcor_center>div:last-child{
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 2;
    
}
.addcor_center .title1{
    width: 100%;
    height: 100%;
    
}
.title-box{
    width: 500px;
    margin: 50px auto;
    color: #fff;
    min-height: 300px;
    z-index: 9999;
    box-shadow: 1px 1px 52px #09131d;
    background: #1f2f3d;
}
.addcor_center .title1>div p{
    color: #30C7FF;
    text-align: center;
    font-size: 18px;
    line-height: 55px;
    margin: 0;
}
.addcor_center .title1>div .addcor{
    background: #172939;
    width: 50%;
    margin: 10px auto;
    display: flex;
        
}
.addcor_center .title1>div .addcor>div:first-child{
    width: 50px;
    text-align: center;
}
.addcor_center .title1>div .addcor>div:last-child{
    flex: 1;
}
.addcor_center .title1>div .addcor i{
    font-size: 28px;
    line-height: 40px;
    margin: 0 10px;
        
}
.addcor_center .title1>div .addcor input{
    background: #172939;
    border: none;
    line-height: 40px;
    padding:0 10px;
    width: 100%;
    outline:medium;
}
.addcor button{
    width: 100%;
    height: 100%;
    background: #1AA1D3;
    border: 1px solid #46EBFF;
    color: #fff;
    font-size: 12px;
}
.addcor1>div:first-child{
    width: 40% !important;
    height: 40px;
    box-sizing: border-box;
    margin-right: 1%;
}
.addcor1>div:last-child{
    width: 59% !important;
    height: 40px;
}
.w50{
    width: 50%;
    margin: 10px auto;
}
.w50 button{
    width: 100%;
    line-height: 30px;
    background: #1AA1D3;
    border: 1px solid #46EBFF;
    color: #fff;
    font-size: 12px;
}
.block5{
    display: block;
    width: 15px;
    height: 15px;
    background-image: url(../images/lock.png);
    background-repeat: no-repeat;
    background-size: 100% auto;
}
.addcor>div:first-child{
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>