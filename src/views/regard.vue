<template>
  <div>
    <!--头部-->
    <header-bar />

    <div class="indexw100 relative">
				<img src="img/bgpng.png" alt=""  class="absolute"/>
				<div class=" center6">
					<div class="container">
						<p class="ioic-wited"><i class="fa fa-bell-o" aria-hidden="true"></i>：官方网站，请勿上当受骗，近期会员充值偶尔出现异常，请加QQ：123456789</p>
					</div>
				</div>
			
			<div class="regard container" style="padding-top: 20px;">
				<div class="relative reg-left">
					<div class="absolute">
						
					</div>
					<div class="ls" style="padding-top: 20px;">
						<ul>
							<li class="active">
								<div>
									关于
								</div>
							</li>
							<li>
								<div>
									免费声明
								</div>
							</li>
							<li>
								<div>
									联系方式
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="relative reg-right">
					<!--关于-->
					<div class="reg relative" >
						<div class="absolute">
							
						</div>
						<h6>关于</h6>
						<p>{{msg.about_us}}</p>
					</div>
					<!--免费声明-->
					<div class="reg relative" style="display: none;">
						<div class="absolute">
							
						</div>
						<h6>免费声明</h6>
						<div v-html="msg.statement"></div>
					</div>
					<!--联系方式-->
					<div style="display: none;" class="reg relative">
						<div class="absolute">
							
						</div>
						<h6>联系方式</h6>
						<h6>用户服务</h6>
						<ul>
							<li>市场、合作邮箱：{{msg.contact_details}}</li>
							<li>商务合作QQ：{{msg.contact_details}}</li>
							<li>客服QQ：{{msg.contact_details}}</li>
							<li>联系电话：{{msg.contact_details}}</li>
							<li>联系地址：{{msg.contact_details}}</li>
						</ul>
					</div>
				</div>
			</div>
			</div>

    <!--底部-->
    <footer-bar />
  </div>
</template>
<script>
import $ from "jquery";
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../js/login';

import HeaderBar from '../components/Header.vue';
import FooterBar from '../components/Footer.vue';
export default {
  data() {
    return {
		msg:{}
	};
  },
  created(){
	  this.getmesage();
  },
  mounted(){
      this.change();
  },
  methods: {
	  async getmesage(){
		  const {data:res}=await this.$axios.get('http://gaming.prmajors.com/index.php/gaming/index/basis');
		  console.log(res.data);
		  this.msg=res.data
	  },
    change() {
      $(".ls li").click(function() {
        var index1 = $(this).index();
        $(".ls li")
          .removeClass("active")
          .eq(index1)
          .addClass("active");
        $(".reg")
          .hide()
          .eq(index1)
          .show();
      });
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
@import "../css/regard.css";
.container>div:nth-child(2) {
    margin:0;
}
</style>
