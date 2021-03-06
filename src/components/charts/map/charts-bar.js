export default{
    tooltip : {
        trigger: 'axis',
        formatter: "{b}: {c} kg ",
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    grid: {
        top:'50px',
        backgroundColor:'rgba(12, 45, 60,0.2)',
        borderWidth:0,
        show: true,
        zlevel:2,
    },
    xAxis : [
        {   
            type : 'category',
            data : ['饲料','植物饲料','动物饲料','谷粒饲料','冬虫夏草','采购总量'],
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
                color: '#fff'
            },

        }
    ],
    yAxis : [
        {   
            name:'Kg',
            nameTextStyle:{
                color:'#fff'
            },
            minInterval:0,
            maxInterval:4000,
            type : 'value',
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
        }
        
    ],
    series : [
        {
            name:'',
            type:'bar',
            barWidth: '50%',
            itemStyle:{
                shadowBlur: 10,
                normal: {
                    barBorderRadius: [5, 5, 0, 0],
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#c1c1b3' // 0% 处的颜色
                        },{
                            offset: 0, color: '#0ecccc' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#0f477e' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }
                }
            },
            data:[2000,1000,1500,12000,3000,19500]
        }
    ]
}