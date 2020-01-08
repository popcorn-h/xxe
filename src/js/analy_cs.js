$(function(){

 				
 				var line2 = echarts.init(document.getElementById('broken_two'));
 				var myChart = echarts.init(document.getElementById('broken_two2'));
 				var lintext={
   					 xAxis: {
				        type: 'category',
				        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
				        
				        show: false
				    },
				    yAxis: {
				        type: 'value',
				        show: false
				    },
				    
				    itemStyle :{
				    	 normal : {
                            symbolSize:25,   //拐点圆的大小
                   			color:['red']  //折线条的颜色
                        }
				    },
				    series: [{
						//data: [0, 1, 1, 0, 0, 1, 1],
						//拐点设置图片
				        data: [
				        	{value:1, symbol:'image://images/banner_07.png',symbolSize:20},
				        	{value:0, symbol:'image://images/banner_07.png',symbolSize:20},
				        	{value:0, symbol:'image://images/banner_07.png',symbolSize:20},
				        	{value:1, symbol:'image://images/banner_07.png',symbolSize:20},
				        	{value:1, symbol:'image://images/banner_07.png',symbolSize:20},
				        	{value:0, symbol:'image://images/banner_07.png',symbolSize:20},
				        	{value:1, symbol:'image://images/banner_07.png',symbolSize:20},
				        ],
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
 				line2.setOption(lintext);
			})