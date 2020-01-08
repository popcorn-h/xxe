<template>
  <div>
    <header-bar />
        <div class="indexw100 relative">
				<img src="img/bgpng.png" alt=""  class="absolute"/>
				<div class=" center6">
					<div class="container">
						<p class="ioic-wited"><i class="fa fa-bell-o" aria-hidden="true"></i>：官方网站，请勿上当受骗，近期会员充值偶尔出现异常，请加QQ：123456789</p>
					</div>
				</div>
			
			
			<div class="container professional">
				
				<div class="heard-prof">
					<div>
						<ul>
							<li><a href="">首页</a></li>
							<li>></li>
							<li>DOTA2联赛</li>
						</ul>
					</div>
				</div>
				<!--联赛列表-->
				<div class="list">
					<div>
						<div class="list-nav">
							<ul>
								<li class="active">首页</li>
								<li>国际邀请赛</li>
								<li>甲级联赛</li>
								<li>甲级联赛</li>
								<li>预选赛</li>
								<li>甲级联赛</li>
							</ul>
						</div>
						<div class="list-show">
							<div>
								<ul class="list-tiele">
									<li class="">
										<a href="">
											<div>
												<div class="relative">
													<img src="../images/league_03.png" alt="" />
														<div class="addimg absolute">
															<span class="bg">进行中</span>
														</div>
												</div>
												<div class="text-cent">
													Parimatch联赛 第一赛季
												</div>
											</div>
										</a>
									</li>
									<li class="">
										<a href="">
											<div>
												<div class="relative">
													<img src="../images/league_03.png" alt="" />
														<div class="addimg absolute">
															<span class="bg">进行中</span>
														</div>
												</div>
												<div class="text-cent">
													Parimatch联赛 第一赛季
												</div>
											</div>
										</a>
									</li>
									<li class="">
										<a href="">
											<div>
												<div class="relative">
													<img src="../images/league_03.png" alt="" />
														<div class="addimg absolute">
															<span class="bg">进行中</span>
														</div>
												</div>
												<div class="text-cent">
													Parimatch联赛 第一赛季
												</div>
											</div>
										</a>
									</li>
									<li class="">
										<a href="">
											<div>
												<div class="relative">
													<img src="../images/league_03.png" alt="" />
														<div class="addimg absolute">
															<span class="bg">进行中</span>
														</div>
												</div>
												<div class="text-cent">
													Parimatch联赛 第一赛季
												</div>
											</div>
										</a>
									</li>
									<li class="">
										<a href="">
											<div>
												<div class="relative">
													<img src="../images/league_03.png" alt="" />
														<div class="addimg absolute">
															<span class="bg">进行中</span>
														</div>
												</div>
												<div class="text-cent">
													Parimatch联赛 第一赛季
												</div>
											</div>
										</a>
									</li>
									<li class="">
										<a href="">
											<div>
												<div class="relative">
													<img src="../images/league_03.png" alt="" />
														<div class="addimg absolute">
															<span class="bg">进行中</span>
														</div>
												</div>
												<div class="text-cent">
													Parimatch联赛 第一赛季
												</div>
											</div>
										</a>
									</li>
								</ul>
							</div>
							<div class="clear list-page">
								<nav aria-label="Page navigation">
								  <ul class="pagination">
								    <li>
								      <a href="#" aria-label="Previous">
								        <span aria-hidden="true">&laquo;</span>
								      </a>
								    </li>
								    <li><a href="#">1</a></li>
								    <li><a href="#">2</a></li>
								    <li><a href="#">3</a></li>
								    <li><a href="#">4</a></li>
								    <li><a href="#">5</a></li>
								    <li>
								      <a href="#" aria-label="Next">
								        <span aria-hidden="true">&raquo;</span>
								      </a>
								    </li>
								  </ul>
								</nav>
							</div>
						</div>
					</div>
					<div class="addbordr-rad">
						<!--热门战队-->
						<div class="teamNew">
							<div class="team-heard">
								<strong>.</strong>
								<span>热门战队</span>
								<span class="addcolor-bluer">hot teams</span>
							</div>
							<div class="list-teamNew1">
								<ul>
									<li>
										<a href="">
											<div>
												<img src="../images/OMG.jpeg" alt="" />
											</div>
											<div>
												AG
											</div>
										</a>
									</li>
									<li>
										<a href="">
											<div>
												<img src="../images/OMG.jpeg" alt="" />
											</div>
											<div>
												AG
											</div>
										</a>
									</li>
									<li>
										<a href="">
											<div>
												<img src="../images/OMG.jpeg" alt="" />
											</div>
											<div>
												AG
											</div>
										</a>
									</li>
									<li>
										<a href="">
											<div>
												<img src="../images/OMG.jpeg" alt="" />
											</div>
											<div>
												AG
											</div>
										</a>
									</li>
									<li>
										<a href="">
											<div>
												<img src="../images/OMG.jpeg" alt="" />
											</div>
											<div>
												AG
											</div>
										</a>
									</li>
								</ul>
							</div>
						</div>
						<!--热门队员-->
						<div class="clear">
							
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
import HeaderBar from "../components/header";
import FooterBar from "../components/footer";

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
@import "../css/professional.css";
@import "../css/laydate.css";
.heard-prof {
  margin-top: 20px;
}
.indexw100 {
  padding-bottom: 50px;
}

</style>
