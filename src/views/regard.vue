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
						<p>kwin是一个游戏爱好者交流平台。</p>
					</div>
					<!--免费声明-->
					<div class="reg relative" style="display: none;">
						<div class="absolute">
							
						</div>
						<h6>免费声明</h6>
						<p>本网数据仅供电精爱好者浏览之用，任何人不得用于非法用途，否则责任自负，如需转载注明出处。本网所登载广告均为广告客户的个人意见及表达方式，和本网无任何关系。如有疑问请联系广告客户本人。</p>
					</div>
					<!--联系方式-->
					<div style="display: none;" class="reg relative">
						<div class="absolute">
							
						</div>
						<h6>联系方式</h6>
						<h6>用户服务</h6>
						<ul>
							<li>市场、合作邮箱：15478923@163.com</li>
							<li>商务合作QQ：15478923@163.com</li>
							<li>客服QQ：15478923@163.com</li>
							<li>联系电话：15478923@163.com</li>
							<li>联系地址：15478923@163.com</li>
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
    return {};
  },
  mounted(){
      this.change();
  },
  methods: {
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
</style>
