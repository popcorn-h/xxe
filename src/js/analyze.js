<<<<<<< HEAD
$(function(){
	var myChart = echarts.init(document.getElementById('broken_one'));
=======
export default() =>{
	var myChart = this.$echarts.init(document.getElementById('broken_one'));
>>>>>>> 2298b680fe96bb193f706b76ee7cdff8e5f962a2
 				var lintext={
   					 xAxis: {
				        type: 'category',
				        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
				        show: false
				    },
				    yAxis: {
				        type: 'value',
				         data: ['胜利', '负'],
				        show: false
				        
				    },
				    
				    itemStyle :{
				    	 normal : {
                            symbolSize:25,   //拐点圆的大小
                   			color:['red']  //折线条的颜色
                        }
				    },
				    line:{
				    	symbol:"heart"
				    },
				    series: [{
						//data: [0, 1, 1, 0, 0, 1, 1],
						//拐点设置图片
						//http://img02.tooopen.com/images/20131212/sy_51552288528.jpg
						//images/banner_07.png
				        data: [
				        {value:1, symbol:'image://images/banner_07.png',symbolSize:20},
				        {value:0, symbol:'image://images/banner_07.png',symbolSize:20},
				        {value:0,symbol:'image://images/banner_07.png',symbolSize:20},
				        {value:1, symbol:'image://images/banner_07.png',symbolSize:20},
				        {value:1, symbol:'image://images/banner_07.png',symbolSize:20}],
				        type: 'line',
				        symbol:'emptyCircle',
				        name: '实名人数',
				        show:true,
				        symbolSize:5,
				    	showSymbol:true,
				        itemStyle:{
                        normal:{
                            lineStyle:{
                                width:2,
                                color:"#3D8BBE",
                                type:'solid'  //'dotted'虚线 'solid'实线
                            }
                        }
                   			}
				    
				    }],
				    emphasis : {
			             label : {show: true}
			        }
 				};
 				myChart.setOption(lintext);
 				var broken_two = echarts.init(document.getElementById('broken_two'));
 				broken_two.setOption(lintext);
 				
<<<<<<< HEAD
})
=======
}
>>>>>>> 2298b680fe96bb193f706b76ee7cdff8e5f962a2
