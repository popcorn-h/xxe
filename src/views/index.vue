<template>
 <div>
	 <div>
			<!-- hander -->
				<header-bar/>
	
			<div class="indexw100 relative">
				<img src="img/bgpng.png" alt=""  class="absolute"/>
				<div class=" center6">
					<div class="container">
						<p class="ioic-wited"><i class="fa fa-bell-o" aria-hidden="true"></i>：官方网站，请勿上当受骗，近期会员充值偶尔出现异常，请加QQ：123456789</p>
					</div>
				</div>
			
			<div class="container">
				
				<!--内容部分-->
				<div class="row" id="mian">
					<div class="col-md-2 left-main">
						<div class="nav" style="margin-top: 0;">
							<div class="heard">
								<i class="fa fa-arrows-v" aria-hidden="true"></i>快速导航
							</div>
							<div class="center addh" @click="getgame(11)">
								<i class="i"></i>LOL比分
							</div>
							<div class="center addh" @click="getgame(24)">
								<i class="i"></i>DOTA2比分
							</div>
							<div class="center addh" @click="getgame(205)">
								<i class="i"></i>CSGO比分
							</div>
							<div class="center addh" @click="getgame(254)">
								<i class="i"></i>王者荣耀比分
							</div>
						</div>
						<div class="nav">
							<div class="heard">
								我关注的赛事
							</div>
							<div class="center addflex addh" >
								<div>
									<i class="i"></i>DOTA比分
								</div>
								<div>
									<i class="fa fa-heart"></i>
								</div>
							</div>
							<div class="center addflex addh">
								<div>
									<i class="i"></i>DOTA比分
								</div>
								<div>
									<i class="fa fa-heart"></i>
								</div>
							</div>
							
						</div>
						<div class="nav">
							<div class="heard">
								我关注的战队
							</div>
							<div class="center addflex addh">
								<div>
									<i class="i"></i>DOTA比分
								</div>
								<div>
									<i class="fa fa-heart-o"></i>
								</div>
							</div>
							<div class="center addflex addh">
								<div>
									<i class="i"></i>DOTA比分
								</div>
								<div>
									<i class="fa fa-heart-o"></i>
								</div>
							</div>
							
						</div>
						<div class="nav">
							<div class="heard">
								热门赛事
							</div>
							<div class="center ">
								<div>
									<div class="addflex clearfixaddborder addh">
										<div>
											LOL
										</div>
										<div>
											<i class="fa fa-angle-down"></i>
										</div>
									</div>
									<div class="centHiden">
										<ul>
											<li class="addflex">
												<div>
													<i class="i"></i>DOTA比分
												</div>
												<div>
													<i class="fa fa-heart"></i>
												</div>
											</li>
											<li class="addflex">
												<div>
													<i class="i"></i>DOTA比分
												</div>
												<div>
													<i class="fa fa-heart"></i>
												</div>
											</li>
										</ul>
									</div>
								</div>
								<div>
									<div class="addflex clearfixaddborder addh">
										<div>
											LOL
										</div>
										<div>
											<i class="fa fa-angle-right"></i>
										</div>
									</div>
									<div class="centHiden" style="display: none;">
										<ul>
											<li class="addflex">
												<div>
													<i class="i"></i>DOTA比分
												</div>
												<div>
													<i class="fa fa-heart"></i>
												</div>
											</li>
											<li class="addflex">
												<div>
													<i class="i"></i>DOTA比分
												</div>
												<div>
													<i class="fa fa-heart"></i>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						
						</div>
						<div class="nav">
							<div class="heard">
								热门战队
							</div>
							<div class="center ">
								<div>
									<div class="addflex clearfixaddborder addh">
										<div>
											LOL
										</div>
										<div>
											<i class="fa fa-angle-down"></i>
										</div>
									</div>
									<div class="centHiden">
										<ul>
											<li class="addflex">
												<div>
													<i class="i"></i>DOTA比分
												</div>
												<div>
													<i class="fa fa-heart"></i>
												</div>
											</li>
											<li class="addflex">
												<div>
													<i class="i"></i>DOTA比分
												</div>
												<div>
													<i class="fa fa-heart"></i>
												</div>
											</li>
										</ul>
									</div>
								</div>
								<div>
									<div class="addflex clearfixaddborder addh">
										<div>
											LOL
										</div>
										<div>
											<i class="fa fa-angle-right"></i>
										</div>
									</div>
									<div class="centHiden" style="display: none;">
										<ul>
											<li class="addflex">
												<div>
													<i class="i"></i>DOTA比分
												</div>
												<div>
													<i class="fa fa-heart"></i>
												</div>
											</li>
											<li class="addflex">
												<div>
													<i class="i"></i>DOTA比分
												</div>
												<div>
													<i class="fa fa-heart"></i>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						
						</div>
	
		
					</div>
					
					<div class="col-md-10">
						
						<!--轮播-->
						<!-- <div >
							<div id="certify">
								<div class="swiper-container swiper-container1">
									<div class="swiper-wrapper">
										<div class="swiper-slide a"><a href=""><img src="images/banner_07.png" /><p style="display: none;">非常难得又值钱的认证证书</p></a></div>
										<div class="swiper-slide a"><a href=""><img src="images/banner_07.png" /><p style="display: none;">非常难得又值钱的认证证书</p></a></div>
										<div class="swiper-slide a"><a href=""><img src="images/banner_07.png" /><p style="display: none;">非常难得又值钱的认证证书</p></a></div>
										<div class="swiper-slide a"><a href=""><img src="images/banner_07.png" /><p style="display: none;">非常难得又值钱的认证证书</p></a></div>
										<div class="swiper-slide a"><a href=""><img src="images/banner_07.png" /><p style="display: none;">非常难得又值钱的认证证书</p></a></div>
									</div>
								</div>
								<div class="swiper-pagination"></div>
								<div class="swiper-button-prev"></div>
							<div class="swiper-button-next"></div>
						</div>
					</div> -->
					<!-- Swiper -->
	<!-- Swiper -->
					<div class="swiper-container">
						<div class="swiper-wrapper">
							<div class="swiper-slide"><img src="../images/banner2.jpg" /><p style="display: none;"></p></div>
						<div class="swiper-slide"><img src="../images/banner1.jpg" /><p style="display: none;"></p></div>
						<div class="swiper-slide"><img src="../images/banner2.jpg" /><p style="display: none;"></p></div>
						<div class="swiper-slide"><img src="../images/banner1.jpg" /><p style="display: none;"></p></div>
						</div>
						<!-- Add Pagination -->
						<div class="swiper-pagination" style="    width: 99%;text-align: right;"></div>
						<!-- Add Arrows -->
						<div class="swiper-button-next"></div>
						<div class="swiper-button-prev"></div>
					</div>

		<div class="row" style="margin: 0;">
			
			<div class="col-md-9">
						
								<!--广告-->
								<div style="display: none;">
									<a href=""><img src=""/></a>
								</div>
								<div class="main">
									<div class="game-heard">
										<div class="allGame">
											<div class="">全部游戏</div>
											<ul class="">
												<li class="" @click="getgame(11)"><a href=""><i></i>LOL</a></li>
												<li class="" @click="getgame(24)"><a href=""><i></i>DOTA2</a></li>
												<li class="" @click="getgame(205)"><a href=""><i></i>CSGO</a></li>
												<li class="" @click="getgame(254)"><a href=""><i></i>王者荣耀</a></li>
											</ul>
										</div>
										<div class="game-tiem">
											<div>
												<ul>
													<li class="active">昨天<span>(25)</span></li>
													<li>今天<span>(25)</span></li>
													<li>明天<span>(25)</span></li>
												</ul>
											</div>
											<div>
												<ul>
													<li class="active">时间排序</li>
													<li>赛事排序</li>
												</ul>
											</div>
										</div>
										<div class="game-video">
											<p><span></span>正在直播<span></span></p>
											<div class=" row video">
												<!--直播列表-->
												<div class="col-lg-6 col-sm-12">
													<div class="colr1 row">
														<div class="col-sm-12 col-lg-6"><i></i>全球总决赛</div>
														<div class="col-sm-12 col-lg-6">第一局train</div>
													</div>
													<div class="score">
														<ul>
															<li>
																<i></i>
																<span>G2</span>
																<span>Esports</span>
																<span>6</span>
															</li>
															<li>
																<i></i>
																<span>G2</span>
																<span>Esports</span>
																<span>6</span>
															</li>
														</ul>
													</div>
												</div>
												<div class="col-lg-6 col-sm-12">
													<div class="colr1 row">
														<div class="col-sm-12 col-lg-6"><i></i>全球总决赛</div>
														<div class="col-sm-12 col-lg-6">第一局train</div>
													</div>
													<div class="score">
														<ul>
															<li>
																<i></i>
																<span>G2</span>
																<span>Esports</span>
																<span>6</span>
															</li>
															<li>
																<i></i>
																<span>G2</span>
																<span>Esports</span>
																<span>6</span>
															</li>
														</ul>
													</div>
												</div>
												<div class="col-lg-6 col-sm-12">
													<div class="colr1 row">
														<div class="col-sm-12 col-lg-6"><i></i>全球总决赛</div>
														<div class="col-sm-12 col-lg-6">第一局train</div>
													</div>
													<div class="score">
														<ul>
															<li>
																<i></i>
																<span>G2</span>
																<span>Esports</span>
																<span>6</span>
															</li>
															<li>
																<i></i>
																<span>G2</span>
																<span>Esports</span>
																<span>6</span>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
									<!--未开始比赛-->
									<div class="notStart">
										<div class="addcolor">未开始比赛</div>
										<div class="main">
											<ul>
												<li class="row" v-for="(item,index) in gamelist" :key="index">
													<div class="col-md-3 tiel">
														<i></i>
														<span>{{item.begin_time}}</span>
													</div>
													<div class="col-md-2 flx">
														<div class="stage">
															{{item.match_stage}}
														</div>
														<div>
															{{item.bo}}
														</div>
													</div>
													<div id="" class="col-md-5 flx">
														<div class="ag">
															{{item.team_a.name}}
															<img :src="item.team_a.icon" alt="">
															<i>-vs-</i>
															<img :src="item.team_b.icon" alt="">
															{{item.team_b.name}}
														</div>
													</div>
													<div class="col-md-2 flx">
														<div @click="$router.push('/analyze/'+item.game_id)"><a href="javascript:;">分析</a></div>
														<div><a href="javascript:;">数据</a></div>
													</div>
												</li>
												
											</ul>
										</div>
									</div>
									<!--已结束的比赛-->
									<div class="notStart">
										<div class="addcolor">已结束的比赛</div>
										<div class="main">
											<ul>
												<li class="row" v-for="(item,index) in gamelist" :key="index">
													<div class="col-md-3 tiel">
														<i></i>
														<span>{{item.begin_time}}</span>
													</div>
													<div class="col-md-2 flx">
														<div class="stage">
															{{item.match_stage}}
														</div>
														<div>
															{{item.bo}}
														</div>
													</div>
													<div id="" class="col-md-5 flx">
														<div class="ag">
															{{item.team_a.name}}
															<img :src="item.team_a.icon" alt="">
															<i>-vs-</i>
															<img :src="item.team_b.icon" alt="">
															{{item.team_b.name}}
														</div>
													</div>
													<div class="col-md-2 flx">
														<div @click="$router.push('/analyze/'+item.game_id)"><a href="javascript:;">分析</a></div>
														<div><a href="javascript:;">数据</a></div>
													</div>
												</li>
												
											</ul>
										</div>
									</div>
				
								</div>
							</div>
							<div class="col-md-3 right">
								<div class="right-heard">
									<div>
										排行榜
									</div>
									<div class="heard-btn">
										<ul>
											<li class="active">DOTA2</li>
											<li>英雄联盟</li>
											<li>英雄联盟</li>
											<li>英雄联盟</li>
										</ul>
									</div>
								</div>
								<div class="right-main clear">
									<div>
										<ul>
											<li class="addborder">
												<div>排名</div>
												<div>战队</div>
												<div>积分</div>
											</li>
										</ul>
									</div>
									<div>
										<ul class="num-color">
											<li>
												<div>
													<span>1</span>
												</div>
												<div><i></i>QG</div>
												<div>2100<i></i></div>
											</li>
											<li>
												<div>
													<span>1</span>
												</div>
												<div><i></i>QG</div>
												<div>2100<i></i></div>
											</li>
											<li>
													
																<div>
																	<span>1</span>
																</div>
																<div><i></i>QG</div>
																<div>2100<i></i></div>
															</li>
															<li>
																	<div>
																		<span>1</span>
																	</div>
																	<div><i></i>QG</div>
																	<div>2100<i></i></div>
																</li>
																<li>
												<div>
													<span>1</span>
												</div>
												<div><i></i>QG</div>
												<div>2100<i></i></div>
											</li>
											<li>
												<div>
													<span>1</span>
												</div>
												<div><i></i>QG</div>
												<div>2100<i></i></div>
											</li>
											<li>
												<div>
													<span>1</span>
												</div>
												<div><i></i>QG</div>
												<div>2100<i></i></div>
											</li>
											<li>
												<div>
													<span>1</span>
												</div>
												<div><i></i>QG</div>
												<div>2100<i></i></div>
											</li>
											<li>
												<div>
													<span>1</span>
												</div>
												<div><i></i>QG</div>
												<div>2100<i></i></div>
											</li>
											<li>
												<div>
													<span>1</span>
												</div>
												<div><i></i>QG</div>
												<div>2100<i></i></div>
											</li>
											<li>
												<div>
													<span>1</span>
												</div>
												<div><i></i>QG</div>
												<div>2100<i></i></div>
											</li>
											<li>
												<div>
													<span>1</span>
												</div>
												<div><i></i>QG</div>
												<div>2100<i></i></div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
			</div>
			</div>
			</div>
	<!-- footer -->
			
			<footer-bar/>
		</div>
 </div>
</template>

<script>
import qs from 'qs';
import $ from 'jquery';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import HeaderBar from '../components/Header.vue';
import FooterBar from '../components/Footer.vue';
import { color } from '../js/echarts';

export default {
 data(){
   return{
	gamelist:[]
   }
 },
 created(){
	 this.getgamelist();
 },
 mounted(){
	 this.initswiper();
 },
 methods:{
	 async getgamelist(){
		 const obj={
			'resource':'game',
			'func':'lists',
			'event_id':11
		}
		const {data:res}=await this.$axios.post(`/sign`,qs.stringify(obj));
		this.gamelist=res.data.data.slice(0,3);
		// console.log(this.gamelist);//114
	 },
	initswiper(){
		var swiper = new Swiper('.swiper-container', {
			autoplay:true,
			loop:true,
			pagination: {
				el: '.swiper-pagination',
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
	},
	getgame(gid){		
		this.$router.push('/scoreTime/'+gid);
	}
 },
 components: {
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
ul,ol{
	margin: 0;
	padding: 0;
}
.indexw100 > div.center6 p{
	line-height: 45px;
}
.main {
	.notStart .row .flx .ag img{
	margin: 0 10px;
	width:15px;
	height: 15px;
	}

}
.left-main .nav .center{
	cursor: pointer;
}
</style>
