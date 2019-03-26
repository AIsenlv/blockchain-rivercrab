export default {
    title: {
        text: ''
    },
    tooltip: {
        trigger: 'axis',
        formatter: "{b} <br/> 销售额: {c} 万",
    },

    toolbox: {
        
    },
    axisPointer: {
        lineStyle: {
          color: "rgb(51,75,92)",
        },
      },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2018-01','2018-02','2018-03','2018-04','2018-05','2018-06','2018-07','2018-09','2018-10','2018-11','2018-12'],
        axisLabel: {
            color: '#fff',
            align:'center',
            interval:1
        },
        
        splitLine: {
            lineStyle: {
              type: "dashed",
              color: "RGB(3,52,59)"
            }
          }
    },
    yAxis: {
        name:'万',
        nameTextStyle:{
            color:'#fff',
        },
        type: 'value',
        minInterval:20,
        maxInterval:100,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#fff'
        },
        borderColor:'#ccc' ,
        splitLine: {
            show:false,
            // lineStyle: {
            //   type: "dashed",
            //   color: "RGB(3,52,59)"
            // }
          },
          
    },
    title:{
        show:false,
        text:"",
        left: 'center',
        top :'10',
        textStyle: {
            color: '#fff',
            fontWeight:'400',
            fontSize:'16'
        }
    },
    grid: {
        top:'50px',
        bottom:'15%',
        right:'50',
        show: true,
        backgroundColor:'rgba(12, 45, 60,0.2)',
        borderWidth:0,
        zlevel:2,

    },
    series: [
        {
            name:'查询量',
            type:'line',
            stack: '总量',
            smooth:true, 
            symbolSize: 6,
            animationEasing: 'quadraticIn',
            areaStyle:{
                color: {
                    type: 'linear',
                    x: 0,y: 0, x2: 0, y2: 1,
                    colorStops: [{
                        offset: 1, color: '#0f477e' // 100% 处的颜色
                    },{
                        offset: 0.1,
                        color: "#0f477e"
                      }],
                    global: false // 缺省为 false
                },
                opacity:'0.2'
            },         
            animationDuration: 2000,
            data:[20, 35, 46, 30, 23, 22, 23, 54,65,56,42,30],
            itemStyle: {
                color: "RGB(11,248,244)"
              }
        },
       
    ]
}