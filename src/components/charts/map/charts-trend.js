export default {
    title: {
        text: ''
    },
    tooltip: {
        trigger: 'axis',
        formatter: "{b} <br/> 查询量: {c} 次",
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
        data: ['2019-01-01','2019-01-05','2019-01-10','2019-01-15','2019-01-20','2019-01-25','2019-01-30','2019-02-04'],
        axisLabel: {
            color: '#fff',
            align:'left',
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
        name:'次',
        nameTextStyle:{
            color:'#fff',
        },
        type: 'value',
        minInterval:0,
        maxInterval:5,
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
        text:"查询量趋势图",
        left: 'center',
        top :'10',
        textStyle: {
            color: '#fff',
            fontWeight:'400',
            fontSize:'16'
        }
    },
    grid: {
        top:'18%',
        bottom:'20%',
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
            data:[2, 3, 5, 2, 3, 2, 2, 4],
            itemStyle: {
                color: "RGB(11,248,244)"
              }
        },
       
    ]
}