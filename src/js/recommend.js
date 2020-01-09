
export default () => {
  var myChart = echarts.init(document.getElementById("container1"));

  var text = {
    title: { text: null }, // 隐藏图表标题
    legend: { enabled: false }, // 隐藏图例
    tooltip: {
      trigger: "axis"
    },
    calculable: true,
    polar: [
      {
        nameGap: 5, // 图中工艺等字距离图的距离
        center: ["50%", "50%"], // 图的位置
        name: {
          show: true, // 是否显示工艺等文字
          formatter: null, // 工艺等文字的显示形式
          textStyle: {
            color: "#a3a5b6" // 工艺等文字颜色
          }
        },
        indicator: [
          { text: "工艺", max: 100 },
          { text: "设备", max: 100 },
          { text: "安全", max: 100 },
          { text: "工艺", max: 100 },
          { text: "仪表", max: 100 }
        ],
        axisLine: {
          // 坐标轴线
          show: false // 默认显示，属性show控制显示与否
        },
        axisLabel: {
          // 坐标轴文本标签，详见axis.axisLabel
          show: false,
          textStyle: {
            color: "#247bd7" // 坐标轴刻度文字的样式
          }
        },
        splitArea: {
          show: true,
          areaStyle: {
            color: ["rgba(0,0,0,0)"] // 图表背景网格的颜色
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            width: 1,
            color: "#ff7300" // 图表背景网格线的颜色
          }
        }
      }
    ],
    series: [
      {
        name: "完全实况球员数据",
        type: "radar",
        symbol: "none", // 去掉图表中各个图区域的边框线拐点
        itemStyle: {
          normal: {
            color: "rgba(0,0,0,0)", // 图表中各个图区域的边框线拐点颜色
            lineStyle: {
              //	                                    color:"white" // 图表中各个图区域的边框线颜色
            },
            areaStyle: {
              type: "default"
            }
          }
        },
        data: [
          {
            value: [50, 42, 88, 60, 90],
            itemStyle: {
              normal: {
                areaStyle: {
                  type: "default",
                  opacity: 0.8, // 图表中各个图区域的透明度
                  color: "#1686c2" // 图表中各个图区域的颜色
                }
              }
            },

            areaStyle: {
              color: "#ff7300" //区域的颜色
            }
          }
        ]
      }
    ]
  };

  // 指定图表的配置项和数据
  var option = {
    title: {
      text: null,
      textStyle: {
        //title字体的样式
        color: "#ff7300",
        fontWeight: "normal",
        fontSize: 20
      }
    }, // 隐藏图表标题
    tooltip: {
      show: false //关闭鼠标放到图上不能显示值
    },
    legend: {
      enabled: false
    }, // 隐藏图例
    radar: {
      // shape: 'circle',
      name: {
        textStyle: {
          color: "#00AADD",
          borderRadius: 3
        }
      },
      indicator: [
        { name: "胜率", max: 6000 },
        { name: "胜率", max: 16000 },
        { name: "胜率", max: 30000 },
        { name: "胜率", max: 38000 },
        { name: "胜率", max: 52000 },
        { name: "胜率", max: 25000 }
      ],
      name: {
        textStyle: { color: "#EDEDED" }
      },
      axisLine: {
        show: true,
        lineStyle: {
          width: 1,
          color: "#33C0EF" // 线条颜色
        }
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ["rgba(0,0,0,0)"] // 图表背景网格的颜色
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          width: 1,
          color: "#33C0EF" // 线条颜色
        }
      }
    },

    series: [
      {
        //				        name: 'none',
        type: "radar",
        symbolSize: 0, //拐点大小
        // areaStyle: {normal: {}},
        data: [
          {
            value: [1200, 8000, 2000, 1800, 5000, 1600]
          }
        ],

        itemStyle: {
          normal: {
            color: "rgba(65,130,156,1)", // 区域内颜色
            //					        label: {
            //					          color:'#ff7300', //字的颜色
            //					          borderColor: 'tgba(253,143,36,1)',  //拐点边框颜色
            //					           show: true  //设置这个就会把值显示在图表上
            //					        },
            lineStyle: {
              //	                                    color:"#ff7300" // 图表中各个图区域的边框线颜色
            },
            areaStyle: {
              type: "default"
            },
            emphasis: {
              color: "#ff7300" //hover拐点颜色定义
            }
          }
        },
        splitArea: {
          show: true,
          areaStyle: {
            color: ["rgba(0,0,0,0)"] // 图表背景网格的颜色
          }
        },
        areaStyle: {
          color: "#ff7300"
        }
      }
    ],
    splitArea: {
      show: true,
      areaStyle: {
        color: ["#ff7300"] // 图表背景网格的颜色
      }
    }
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  // 使用刚指定的配置项和数据显示图表。
  //      		 	myChart.setOption(text);
  //雷达图
  var container12 = echarts.init(document.getElementById("container12"));
  container12.setOption(option);

  var line2 = echarts.init(document.getElementById("line2"));
  var myChart = echarts.init(document.getElementById("line"));
  var lintext = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],

      show: false
    },
    yAxis: {
      type: "value",
      show: false
    },

    itemStyle: {
      normal: {
        symbolSize: 25, //拐点圆的大小
        color: ["red"] //折线条的颜色
      }
    },
    series: [
      {
        //data: [0, 1, 1, 0, 0, 1, 1],
        //拐点设置图片
        data: [
          { value: 1, symbol: "image://images/banner_07.png", symbolSize: 20 },
          { value: 0, symbol: "image://images/banner_07.png", symbolSize: 20 },
          { value: 0, symbol: "image://images/banner_07.png", symbolSize: 20 },
          { value: 1, symbol: "image://images/banner_07.png", symbolSize: 20 },
          { value: 1, symbol: "image://images/banner_07.png", symbolSize: 20 },
          { value: 0, symbol: "image://images/banner_07.png", symbolSize: 20 },
          { value: 1, symbol: "image://images/banner_07.png", symbolSize: 20 }
        ],
        type: "line",
        symbol: "emptyCircle",
        name: "实名人数",
        show: true,
        symbolSize: 5,
        showSymbol: true,
        itemStyle: {
          normal: {
            lineStyle: {
              width: 2,
              color: "#3D8BBE",
              type: "solid" //'dotted'虚线 'solid'实线
            }
          }
        }
      }
    ],
    emphasis: {
      label: { show: true }
    }
  };
  myChart.setOption(lintext);
  line2.setOption(lintext);
};
