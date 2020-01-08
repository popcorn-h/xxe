    //echarts样式集:>
    function randomData() {
        now = new Date(+now + oneDay);
        value = value + Math.random() * 21 - 10;
        return {
            name: now.toString(),
            value: [
                [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
                Math.round(value)
            ]
        }
    }
    var data = [];
    var now = +new Date(1997, 9, 3);
    var oneDay = 24 * 3600 * 1000;
    var value = Math.random() * 1000;
    for (var i = 0; i < 1000; i++) {
        data.push(randomData());
    }
    
    var option = {
        title: {
            show:false,
            text: '动态数据 + 时间坐标轴'
        },
        tooltip: {
            trigger: 'axis',
            formatter: function (params) {
                params = params[0];
                var date = new Date(params.name);
                return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
            },
            axisPointer: {
                animation: false
            }
        },
        xAxis: {
            type: 'time',
            splitLine: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#8EE0E7',  //更改坐标轴文字颜色
                    fontSize : 14      //更改坐标轴文字大小
                }
                },
                axisLine:{
                    show:true,
                    lineStyle:{
                    color:'#315070' //更改坐标轴颜色
                    },
            splitLine: {
                                    show: true, 
                                    //  改变轴线颜色
                                    lineStyle: {
                                        // 使用深浅的间隔色
                                        color: ['red']
                                    }                            
                            }
            }
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%'],
            splitLine: {
                show: false
            },
            axisLine:{
                    lineStyle:{
                    color:'#315070' //更改坐标轴颜色
                    }
            }
        },
        series: [{
            name: '模拟数据',
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: data,
            itemStyle : {  
                    normal : {  
                        lineStyle:{  
                        color:'#C0F1F2'  
                        }  
                    }  
            },
            
        }]
    };
    
    setInterval(function () {
    
        for (var i = 0; i < 5; i++) {
            data.shift();
            data.push(randomData());
        }
    
        // myChart.setOption({
        //     series: [{
        //         data: data
        //     }]
        // });
    }, 1000);
    var sb_title = this.$echarts.init(document.getElementById('tianh'));
    sb_title.setOption(option);
    //折线图
    var line2 = this.$echarts.init(document.getElementById('senic1P'));
    var lintext={
            xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            
            show: false,
            splitLine :{
            lineStyle:{
            type:'dashed'
            }
            }
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
                {value:15, symbol:'image://images/banner_07.png',symbolSize:20},
                {value:58, symbol:'image://images/banner_07.png',symbolSize:20},
                {value:15, symbol:'image://images/banner_07.png',symbolSize:20},
                {value:4.9, symbol:'image://images/banner_07.png',symbolSize:20},
                {value:15, symbol:'image://images/banner_07.png',symbolSize:20},
                {value:5.8, symbol:'image://images/banner_07.png',symbolSize:20},
                {value:15, symbol:'image://images/banner_07.png',symbolSize:20},
            ],
            type: 'line',
                smooth: true,
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
    
    line2.setOption(option);
                //echarts样式集:>