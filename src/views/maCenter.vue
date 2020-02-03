<template>
    <div class="center">
        <!--头部-->
        <header-bar/>
        
        <div class="indexw100 relative">
            <img src="img/bgpng.png" alt=""  class="absolute"/>
                <div class=" center6" style="width: 1200px;margin: 0 auto	;">
                    <div class="container">
                        <p class="ioic-wited"><i class="fa fa-bell-o" aria-hidden="true"></i>：官方网站，请勿上当受骗，近期会员充值偶尔出现异常，请加QQ：123456789</p>
                    </div>
                </div>
        
        <div class="container">
            
            <div class="main row">
                <div class="col-lg-2 relative">
                    <div class="absolute tm">
                        
                    </div>
                    <div class="left-head">
                        <div class="img">
                            <img src="images/timg (1).jpg" alt="" />
                        </div>
                        <div class="color-w line-heigth">
                            测试账号
                        </div>
                        <div class="btn">
                            <ul>
                                <li class="active collect1">我的收藏</li>
                                <li class="datum1">个人资料</li>
                                <li>修改密码</li>
                            </ul>
                        </div>
                        <div class="quit">
                            <span class="pointer">退出登录</span>
                        </div>
                    </div>
                </div>
                <!--我的收藏 collect -->
                <div class="col-lg-10 relative collect " style=" padding-left: 20px;">
                    <div class="absolute">
                    </div>
                    <div class="heard">
                        <ul>
                            <li>全部游戏</li>
                            <li>DOTA2</li>
                            <li>CS:GO</li>
                            <li>英雄联盟</li>
                            <li>英雄联盟</li>
                            <li>英雄联盟</li>
                            <li>英雄联盟</li>
                            <li>英雄联盟</li>
                        </ul>
                    </div>
                    <div class="newStart">
                        <ul>
                            <li>未开始</li>
                            <li>已结束</li>
                        </ul>
                    </div>
                    <div class="data">
                        <!--<div class="heard">
                            <ul>
                                <li>比赛</li>
                                <li>时间</li>
                                <li>赛制</li>
                                <li>战队</li>
                                <li>VS</li>
                                <li>战队</li>
                                <li>数据</li>
                                <li>清空</li>
                            </ul>
                        </div>
                        <div class="data">
                            <ul>
                                <li>精英杯</li>
                                <li>11-22 19：00</li>
                                <li>BO5</li>
                                <li>AG超会玩<img src="" alt="" /></li>
                                <li><span>-</span></li>
                                <li>AG超会玩<img src="" alt="" /></li>
                                <li>数据</li>
                                <li>清空</li>
                            </ul>
                        </div>-->
                        <table class="table ">
                            <tr>
                                <th>比赛</th>
                                <th>时间</th>
                                <th>赛制</th>
                                <th>战队</th>
                                <th>VS</th>
                                <th>战队</th>
                                <th>数据</th>
                                <th>清空</th>
                            </tr>
                            <tr>
                                <td>精英杯</td>
                                <td>11-22 19：00</td>
                                <td>BO5</td>
                                <td><span class="a">AG超会玩</span><img src="images/timg.jpg" alt="" /></td>
                                <td><span>-</span></td>
                                <td><img src="images/timg.jpg" alt="" /><span class="b">AG超会玩</span></td>
                                <td>数据</td>
                                <td>清空</td>
                            </tr>
                            <tr>
                                <td>精英杯</td>
                                <td>11-22 19：00</td>
                                <td>BO5</td>
                                <td><span class="a">AG超会玩</span><img src="images/timg.jpg" alt="" /></td>
                                <td><span>-</span></td>
                                <td><img src="images/timg.jpg" alt="" /><span class="b">AG超会玩</span></td>
                                <td>数据</td>
                                <td>清空</td>
                            </tr>
                            <tr>
                                <td>精英杯</td>
                                <td>11-22 19：00</td>
                                <td>BO5</td>
                                <td><span class="a">AG超会玩</span><img src="images/timg.jpg" alt="" /></td>
                                <td><span>-</span></td>
                                <td><img src="images/timg.jpg" alt="" /><span class="b">AG超会玩</span></td>
                                <td>数据</td>
                                <td>清空</td>
                            </tr>
                            <tr>
                                <td>精英杯</td>
                                <td>11-22 19：00</td>
                                <td>BO5</td>
                                <td><span class="a">AG超会玩</span><img src="images/timg.jpg" alt="" /></td>
                                <td><span>-</span></td>
                                <td><img src="images/timg.jpg" alt="" /><span class="b">AG超会玩</span></td>
                                <td>数据</td>
                                <td>清空</td>
                            </tr>
                        </table>
                        <div class="page1">
                            <nav aria-label="Page navigation">
                                <ul class="pagination">
                                <li>
                                    <a href="#" aria-label="Previous">
                                    上一页
                                    </a>
                                </li>
                                <li><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li>
                                    <a href="#" aria-label="Next">
                                    <span aria-hidden="true">下一页</span>
                                    </a>
                                </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

                <!--个人资料 datum-->
                <div class="col-lg-10 relative datum" style="padding-left: 20px;padding-top: 20px;display: none; ">
                    <div class="bgrigh absolute" >
                        
                    </div>
                    <div class="box">
                         <form action="" method="post">
                        <div class="img">
                            <img id="images" src="../images/user.png" alt="" />
                            <input type="file" name=""/>   
                        </div>
                        <p>点击图片，更换头像</p>
                        <div class="text">
                            <ul>
                                <li>
                                    昵称：<div>{{msg.nickname}}</div>
                                </li>
                                <li>
                                    手机：<div>{{msg.phone}}</div>
                                </li>
                            </ul>
                        </div>
                         <input type="submit" value="保存修改">     
                         </form>
                    </div>
                </div>


                <!--修改密码-->
                <div class="col-lg-10 relative datum2" style="display: none;">
                    <div class="bgrigh absolute" >
                        
                    </div>
                    <div class="amend">
                        <div >
                            <p>修改密码</p>
                            <div class="fx">
                                <div>
                                    <i></i>
                                </div>
                                <div>
                                    <input type="" name="" :placeholder="oldmsg" v-model="oldpwd" @focus="oldmsg=''" @blur="oldmsg='请输入原密码'"/>
                                </div>
                            </div>
                            <div class="fx">
                                <div>
                                    <i></i>
                                </div>
                                <div>
                                    <input type="" name="" :placeholder="amsg" v-model="apwd" @focus="amsg=''" @blur="handle"/>
                                </div>
                            </div>
                            <div class="fx">
                                <div>
                                    <i></i>
                                </div>
                                <div>
                                    <input type="" name="" :placeholder="bmsg" v-model="bpwd" @focus="bmsg=''" @blur="handle2"/>
                                </div>
                            </div>
                                
                            <div class="btn1">
                                <button type="button" @click="modify">确定</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
            
        <!--底部-->
       <footer-bar />
    </div>
</template>

<script>
import qs from 'qs';
import $ from 'jquery';
import axios from 'axios';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import HeaderBar from '../components/Header.vue';
import FooterBar from '../components/Footer.vue';
export default {
    data(){
        return{
            oldmsg:'请输入原密码',
            amsg:'请输入新密码',
            bmsg:'请再次确认密码',
            msg:{},
            oldpwd:'',
            apwd:'',
            bpwd:''
        }
    },
    created(){
        this.getuserinfo();
    },
     mounted(){
         this.GetMaCenter();
    },
    methods:{
        //头像图片预览
        preview(){

        },
        handle(){
            var ab= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,10}$/;
            if(this.apwd=='')return this.amsg='请输入新密码';
            if(ab.test(this.apwd)==false)return alert('密码必须包含大小写字母和数字的组合,6~10位！');
        },
        handle2(){
            this.bmsg='请再次确认密码';
            if(this.bpwd!==this.apwd)return alert('两次输入密码不一致！');
        },//修改密码
        async modify(){
            const token=window.localStorage.getItem('token');
            const obj={
                password:this.oldpwd,
                password_new:this.bpwd,
                token:token
            }
            const {data:res}=await this.$axios.post('http://gaming.prmajors.com/index.php/gaming/user/password',qs.stringify(obj))
            if(res.code==0)return alert(res.msg);
            if(res.code==1){
                this.oldpwd='';
                this.apwd='';
                this.bpwd='';
                alert(res.msg);
            }
            console.log(res);
            
        },//获取用户信息
        getuserinfo(){
            this.msg=JSON.parse(window.localStorage.getItem('userinfo'));
        },//tab栏切换
       GetMaCenter(){
            function h(){
				$(".collect,.datum,.datum2").hide();
                $(".btn li").removeClass("active");
            }
            //选择minitab改变状态
            let mininum=window.localStorage.getItem('mini');
            if(mininum!==''){
                // console.log(123);
                h();
                $(".btn li").eq(mininum).addClass("active");
                if(mininum==0){
                    if($(".collect").is(':hidden')){
                        $(".collect").show();
                    }
                }else if(mininum==1){
                    if($(".datum").is(':hidden')){
                        $(".datum").show();
                    }
                }else if(mininum==2){
                    $(".datum2").show();
                }
            }

            //点击之后改变选中状态
			    $(".btn li").click(function(){     
					// console.log($(this).index())
                let numb=$(this).index();
                h();
                $(".btn li").eq(numb).addClass("active");
                if(numb==0){
                    if($(".collect").is(':hidden')){
                        $(".collect").show();
                    }
                }else if(numb==1){
                    if($(".datum").is(':hidden')){
                        $(".datum").show();
                    }
                }else if(numb==2){
                    $(".datum2").show();
                }
            })
        }
    },
    components:{
        HeaderBar,
        FooterBar
    }
}
</script>

<style lang="less" scoped>
@import '../css/carouse.css';
@import '../css/font-awesome.min.css';
@import '../css/swiper.min.css';
@import '../css/bootstrap.css';
@import '../css/common.css';
@import '../css/index.css';
@import '../css/mycenter.css';
.indexw100 .main{
    padding-top: 20px;
}
.pagination > li > a, .pagination > li > span{
    background-color:#4AA4DD !important;
}
.datum>div:last-child{
    min-height: 390px;
}
.img{
   input[type="file"]{
       width: 90px;
       height: 90px;
       border-radius: 50%;
        opacity: 0;
        position: fixed;
        top: 190px;
        cursor: pointer;
   }
}
.box{
    p{
        margin-left: 60px;
        margin-top: 10px;
    }
     input[type="submit"]{
        outline: none;
        border-radius: 5px;
        cursor: pointer;
        background-color: #31B0D5;
        border: none;
        width: 100px;
        height: 35px;
        line-height: 35px;
        margin-left: 75px;
        font-size: 14px;
    }
}
</style>