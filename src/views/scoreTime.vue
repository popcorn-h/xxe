<template>
  <div>
      <div>
			<header-bar/>

			<div class="indexw100 relative">
				<div class=" center6">
					<div class="container">
						<p class="ioic-wited"><i class="fa fa-bell-o" aria-hidden="true"></i>：官方网站，请勿上当受骗，近期会员充值偶尔出现异常，请加QQ：123456789</p>
					</div>
				</div>
				<div class="container score">
					
					<div class="main relative">
						<div class="absolute heard">
							
						</div>
						<div class="main">
							<div class="list">
								<div>
									<ul class="clickCcore">
										<li class="active pointer">
											比分
										</li>
										<li class="pointer">
											完赛
										</li>
										<li class="pointer">
											赛程
										</li>
									</ul>
								</div>
								<div class="Competition pointer">
									选择赛事
								</div>
							</div>
							<!--比分-->
							<div style="display: block;" class="title sb">
								<table class="table">
									<thead>
										<th class="first-w">比赛</th>
										<th>时间</th>
										<th>赛制</th>
										<th>状态</th>
										<th class="w">战队<span>VS</span>战队</th>
										<th>比分</th>
										<th>比赛类型
											<!-- <span class="span"></span> -->
											</th>
										<th class="w50"></th>
										<th class="addflex1">赛事阶段</th>
										<th class="w40">数据</th>
										<th>人气</th>
										<th>功能</th>
									</thead>

									<!--未开始-->
									<tr class="ing" >
										<td class="gameing" colspan="8">
											<i></i>
											<span>未开始的比赛</span>
										</td>
									</tr>
									<!-- 1 -->
									<tr class="nogame" v-show="startgame">
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td>暂无比赛</td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
									</tr>
									<!-- 00 -->
									<tr class="a textIng" v-for="(item,index) in readylist" :key="index">
										<td class="first-w"><img src="../images/OMG.jpeg" alt="" />{{item.match_name}}</td>
										<td class="gametime">{{item.begin_time}}</td>
										<td>{{item.game_id}}</td>
										<td>未开始</td>
										<td class="w">{{item.team_a.name}}<br/>
											<span><img :src="item.team_a.icon" alt="" />-vs-<img :src="item.team_b.icon" alt="" /></span><br/>
											{{item.team_b.name}}</td>
										<td>{{item.score_a}}<span>-</span>{{item.score_b}}</td>
										<td class="economics"> 
											{{item.game_type}}
											<!-- <i></i>+4545K -->
											</td>
										<td class="video w50"><i class="pointer" @click="goanalyze(item.have_live,item.game_id)"></i></td>
										<td >
											{{item.match_stage}}
											<!-- <div>

												<p>2.43</p>
												<p>2.43</p>
											</div>
											<div>
												<p>独赢</p>
												<p>单局</p>
											</div>
											<div>
												<p>1.53</p>
												<p>1.53</p>
											</div> -->
										</td>
										<td class="w40"><a href="javascript:;" @click="$router.push('/analyze/'+item.game_id)">分析</a></td>
										<td><i class="heardUser"></i>150</td>
										<td class="feature"><i class="pointer"></i><i class="pointer"></i></td>
									</tr>

									
										<!--进行中的比赛-->
									<tr  class="ing" >
										<td class="gameing" colspan="8">
											<i></i>
											<span>进行中的比赛</span>
										</td>
									</tr>
									<!-- 01 -->
									<tr class="nogame" v-show="playgame">
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td>进行中</td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
									</tr>
									<tr class="a textIng" v-for="(item,index) in playlist" :key="index">
										<td class="first-w"><img src="../images/OMG.jpeg" alt="" />{{item.match_name}}</td>
										<td class="gametime">{{item.begin_time}}</td>
										<td>{{item.bo}}</td>
										<td>未开始</td>
										<td class="w">{{item.team_a.name}}<br/>
											<span><img :src="item.team_a.icon" alt="" />-vs-<img :src="item.team_b.icon" alt="" /></span><br/>
											{{item.team_b.name}}</td>
										<td>{{item.score_a}}<span>-</span>{{item.score_b}}</td>
										<td class="economics"> 
											{{item.game_type}}
											<!-- <i></i>+4545K -->
											</td>
										<td class="video w50"><i class="pointer"></i></td>
										<td >
											{{item.match_stage}}
											<!-- <div>
												<p>2.43</p>
												<p>2.43</p>
											</div>
											<div>
												<p>独赢</p>
												<p>单局</p>
											</div>
											<div>
												<p>1.53</p>
												<p>1.53</p>
											</div> -->
										</td>
										<td class="w40"><a href="javascript:;" @click="$router.push('/analyze/'+item.game_id)">分析</a></td>
										<td><i class="heardUser"></i>150</td>
										<td class="feature"><i class="pointer"></i><i class="pointer"></i></td>
									</tr>



									<!--已完成 accomplish-->
									<tr  class="ing" >
										<td class="gameing" colspan="8">
											<i></i>
											<span>已完成的比赛</span>
										</td>
									</tr>
									<!-- 001 -->
									<tr class="nogame" v-show="endgame">
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td>已完成</td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
									</tr>
									<!-- yes -->
									<tr class="a textIng" v-for="(item,index) in playlist" :key="index">
										<td class="first-w"><img src="../images/OMG.jpeg" alt="" />{{item.match_name}}</td>
										<td class="gametime">{{item.begin_time}}</td>
										<td>{{item.bo}}</td>
										<td>未开始</td>
										<td class="w">{{item.team_a.name}}<br/>
											<span><img :src="item.team_a.icon" alt="" />-vs-<img :src="item.team_b.icon" alt="" /></span><br/>
											{{item.team_b.name}}</td>
										<td>{{item.score_a}}<span>-</span>{{item.score_b}}</td>
										<td class="economics"> 
											{{item.game_type}}
											<!-- <i></i>+4545K -->
											</td>
										<td class="video w50"><i class="pointer"></i></td>
										<td >
											{{item.match_stage}}
											<!-- <div>
												<p>2.43</p>
												<p>2.43</p>
											</div>
											<div>
												<p>独赢</p>
												<p>单局</p>
											</div>
											<div>
												<p>1.53</p>
												<p>1.53</p>
											</div> -->
										</td>
										<td class="w40"><a href="javascript:;" @click="$router.push('/analyze/'+item.game_id)">分析</a></td>
										<td><i class="heardUser"></i>150</td>
										<td class="feature"><i class="pointer"></i><i class="pointer"></i></td>
									</tr>
								</table>
							
							</div>


							<!--完赛-->
							<div class="finish sb" style="display: none;">
								<div class="heard" >
									<div id="text2" lay-key="1" style="cursor:pointer;">
										<i class="fa  fa-calendar"></i><span>日历</span><i class="fa fa-angle-down"></i>
									</div>
									<div id="datetab" class="lastyear" >
										<ul>
											<li class="active">
												<div>
													<p>周一</p>
													<p>11/15</p>
												</div>
											</li>
											<li>
												<div>
													<p>周二</p>
													<p>11/15</p>
												</div>
											</li>
											<li>
												<div>
													<p>周三</p>
													<p>11/15</p>
												</div>
											</li>
											<li>
												<div>
													<p>周四</p>
													<p>11/15</p>
												</div>
											</li>
											<li>
												<div>
													<p>周五</p>
													<p>11/15</p>
												</div>
											</li>
											<li>
												<div>
													<p>周六</p>
													<p>11/15</p>
												</div>
											</li>
											<li>
												<div>
													<p>周日</p>
													<p>11/15</p>
												</div>
											</li>
										</ul>
									</div>
								</div>
								<table class="table" >
									<thead v-show="!endgame">
										<tr>
											<th class="first-w">比赛</th>
											<th>时间</th>
											<th>比赛维度</th>
											<th class="w">战队<span>VS</span>战队</th>
											<th class="w50"></th>
											<th>比分</th>
											<th class="last-left">数据</th>
										</tr>
									</thead>
									<tr class="nogame" v-show="endgame">
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td>暂无比赛</td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
									</tr>
									<!-- end1 -->
									<tr class="a textIng" v-for="(item,index) in endlist" :key="index"> 
										<td class="first-w"><img src="../images/OMG.jpeg" alt="" />{{item.match_name}}</td>
										<td>{{item.begin_time}}</td>
										<td>{{item.dimension==1? '两组对决':'多组混战'}}</td>
										<td class="w">
											{{item.team_a.name}}<br/>
											<span><img :src="item.team_a.icon" alt="" />-vs-<img :src="item.team_b.icon" alt="" /></span><br/>
											{{item.team_b.name}}</td>
										<td class="video w50"><i class="pointer"></i></td>
										<td >
											{{item.score_a}}:{{item.score_b}}
										</td>
										<td class="last-left"><a href="">分析</a></td>
									</tr>

								</table>


								<div class="las" v-show="!endgame">
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
									        下一页
									      </a>
									    </li>
									  </ul>
									</nav>
								</div>
							</div>
							<!--赛程-->
							<div class="finish sb" style="display: none;">
								<div class="heard" >
									<div id="text2" lay-key="1" style="cursor:pointer;">
										<i class="fa  fa-calendar"></i><span>日历</span><i class="fa fa-angle-down"></i>
									</div>
									<div class="lastyear">
										<ul>
											<li class="active">
												<div>
													<p>周一</p>
													<p>11/15</p>
												</div>
											</li>
											<li>
												<div>
													<p>周二</p>
													<p>11/15</p>
												</div>
											</li>
											<li>
												<div>
													<p>周三</p>
													<p>11/15</p>
												</div>
											</li>
											<li>
												<div>
													<p>周四</p>
													<p>11/15</p>
												</div>
											</li>
											<li>
												<div>
													<p>周五</p>
													<p>11/15</p>
												</div>
											</li>
											<li>
												<div>
													<p>周六</p>
													<p>11/15</p>
												</div>
											</li>
											<li>
												<div>
													<p>周日</p>
													<p>11/15</p>
												</div>
											</li>
										</ul>
									</div>
								</div>
								<table class="table">
									<thead>
										<tr>
											<th class="first-w">比赛</th>
											<th>时间</th>
											<th>比赛维度</th>
											<th class="w">战队<span>VS</span>战队</th>
											<th class="w50"></th>
											<th>赛事阶段</th>
											<th class="last-left">数据</th>
										</tr>
									</thead>
									
										<tr class="a textIng" v-for="(item,index) in readylist" :key="index"> 
										<td class="first-w"><img src="../images/OMG.jpeg" alt="" />{{item.match_name}}</td>
										<td>{{item.begin_time}}</td>
										<td>{{item.dimension==1? '两组对决':'多组混战'}}</td>
										<td class="w">
											{{item.team_a.name}}<br/>
											<span><img :src="item.team_a.icon" alt="" />-vs-<img :src="item.team_b.icon" alt="" /></span><br/>
											{{item.team_b.name}}</td>
										<td class="video w50"><i class="pointer" @click="goanalyze(item.have_live,item.game_id)"></i></td>
										<td >
											{{item.match_stage}}
										</td>
										<td class="last-left"><a href="javascript:;" @click="$router.push('/analyze/'+item.game_id)">分析</a></td>
									</tr>
								</table>

								<div class="las" v-show="!endgame">
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
									 
									    <li>
									      <a href="#" aria-label="Next">
									        下一页
									      </a>
									    </li>
									  </ul>
									</nav>
								</div>
							</div>
							
							<!--11-->
						</div>
					</div>
				</div>
			</div>

		<footer-bar/>
	
		</div>
  </div>
</template>
<script>
import qs from 'qs';
import $ from "jquery";
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../js/login';
import HeaderBar from '../components/Header.vue';
import FooterBar from '../components/Footer.vue';

export default {
  data() {
    return {
		laydate:window.laydate,
		gamelist:[],
		readylist:[],
		playlist:[],
		endlist:[],
		startgame:false,
		playgame:false,
		endgame:false
	};
  },
  created(){
	  this.getlist();
  },
  mounted() {
    this.getlaydate();
  },
  methods: {
	async getlist(){
		const gid=this.$route.params.gid;
		const obj={
			'resource':'game',
			'func':'lists',
			'event_id':gid
		}
		const {data:res}=await this.$axios.post(`/sign`,qs.stringify(obj));
		this.gamelist=res.data.data;
		// console.log(res.data.data);//114
		this.gamelist.forEach(el=>{
			if(el.game_status==0){
				this.readylist.push(el)
			}else if(el.game_status==1){
				this.playlist.push(el)
			}else{
				this.endlist.push(el)
			}
		})
		// 根据是否有数据来显示
			this.readylist.length==0 ? this.startgame=true:'';
			this.playlist.length==0 ? this.playgame=true:'';
			this.endlist.length==0 ? this.endgame=true:'';
		// console.log(this.readylist);//114
		// console.log(this.playlist);//0
		// console.log(this.endist);//0
		// have_live
		console.log(this.gamelist);
		
		var arr=[]
		this.gamelist.forEach(el=>{
			arr.push(el.have_live);
		})
		console.log(arr,'/////////');
	},
	goanalyze(status,gid){
		console.log(status);
		console.log(gid);
		status==0 ? alert('当前比赛还未开始！'):this.$router.push('/liveData/'+gid);
	},
    getlaydate() {
    //   var s = `<i class="fa  fa-calendar"></i><span>日历</span><i class="fa fa-angle-down"></i>`;
    //引用laydate日历
    //执行一个laydate实例
    //   this.laydate.render({
	//     elem: "#text1", //指定元素
	// format:'yyyy/MM/dd',
    //     trigger: "click",
    //     done: function(value, date, endDate) {
    //       //		  	$("#text1").html(s)
    //       console.log(value); //得到日期生成的值，如：2017-08-18
    //       console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
    //       console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
    //     }
    //   });
    //   this.laydate.render({
	//     elem: "#text2", //指定元素
	// format:'yyyy/MM/dd',
    //     trigger: "click",
    //     done: function(value, date, endDate) {
    //       //		  	$("#text1").html(s)
    //       console.log(value); //得到日期生成的值，如：2017-08-18
    //       console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
    //       console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
    //     }
    //   });
    //		进行中
    //   var textIng = $(".textIng");
    //   var nostart = $(".nostart");
    //   var accomplish = $(".accomplish");
    //   a(textIng);
    //   a(nostart);
    //   a(accomplish);
    //   function a(demo) {
    //     demo.each(function(index, item) {
    //       if ((index + 1) % 2 == 0) {
    //         $(this).addClass("active1");
    //       } else if ((index + 1) % 2 == 1) {
    //         $(this).addClass("activedef");
    //       }
    //     });
    //   }
    //   $("#text1").click(function() {
    //     $(this).html(s);
    //   });
      $(".clickCcore li").click(function() {
		var numb = $(this).index();
        $(".clickCcore li")
          .removeClass("active")
          .eq(numb)
          .addClass("active");
        $(".main .sb")
          .hide()
          .eq(numb)
          .show();
    //console.log(numb);
	  });
	  // 完赛 赛程日期tab栏
	$('#datetab li').click(function(){
		console.log(123);
		var index=$(this).index()
		$("#datetab li").removeClass('active').eq(index).addClass('active')
	})
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
@import "../css/scoreTime.css";
@import '../css/laydate.css';
@media (min-width: 1200px){
	.container {
   	 width: 1250px;
	}
}
.heard>div{
	padding: 0 20px;
}
.w50 {
  width: 40px;
}
table {
  border-collapse: separate;
  border-spacing: 0;
}

.main .addflex1 {
  width: 120px;
}

.main .w40 {
  width: 44px;
}
.main .w40 a {
  display: block;
  width: 100%;
  height: 100%;
  line-height: 100%;
  text-align: center;
}
.indexw100 {
  padding-bottom: 80px;
}
.finish table .addflex{
	width: 210px;
}
.finish .las{
	margin-top: 20px;
}
.table {
	tr{
		padding:10px 0;
	}
	th{
		height: 30px;
	}
	th,td{
		text-align: center;
	}
	tr td.w {
		padding: 5px 0;
		span{
		color: #fa1818;
	}
	}
	.first-w{
		text-align: left;
	}
	.nogame{
		height: 50px;
		line-height: 30px;
		text-align: center;
	}
}


</style>
