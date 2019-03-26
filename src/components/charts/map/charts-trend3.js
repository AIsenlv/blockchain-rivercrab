export default {
    title: {
        text: ''
    },
    tooltip: {
        trigger: 'axis',
        backgroundColor:'rgba(1, 29, 42, 0.89)',
        formatter: function(value){
            let bs=value[0].name.slice(3,5);
            return `2018年10月${bs}号 <br/> 销售额: ${value[0].value} 次`
        },
    },

    toolbox: {
        
    },
    axisPointer: {
        lineStyle: {
          color: "#407678",
        },
      },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['10/01','10/05','10/10','10/15','10/20','10/25','10/31'],
        axisLabel: {
            color: '#ccc',
            align:'center',
            interval:0
        },
        splitLine: {
            lineStyle: {
              type: "dashed",
              color: "RGB(3,52,59)"
            }
          }
    },
    yAxis: {
        name:'只',
        nameTextStyle:{
            color:'#ccc',
        },
        type: 'value',
        minInterval:20,
        maxInterval:1000,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#ccc'
        },
        borderColor:'#ccc' ,
        splitLine: {
            show:true,
            lineStyle: {
              type: "dashed",
              color: "#34444c"
            }
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
        top:'28px',
        bottom:'66px',
        right:'20px',
        left:'50px',
        show: true,
        // backgroundColor:'rgba(12, 45, 60,0.2)',
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
            // areaStyle:{
            //     color: {
            //         type: 'linear',
            //         x: 0,y: 0, x2: 0, y2: 1,
            //         colorStops: [{
            //             offset: 1, color: '#0f477e' // 100% 处的颜色
            //         },{
            //             offset: 0.1,
            //             color: "#0f477e"
            //           }],
            //         global: false // 缺省为 false
            //     },
            //     opacity:'0.2'
            // },         
            data:[2000, 3500, 4600, 3000, 2300, 2200, 2300],
            itemStyle: {
                // color: "RGB(11,248,244)"
                color:'#36b6ff'
              }
        },
       
    ]
}