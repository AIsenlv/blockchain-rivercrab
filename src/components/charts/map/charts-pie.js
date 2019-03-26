
 var data = [
    {value:35, name:'竹鼠',"itemStyle": {
        "color": {
          "type": "radial",
          "x": 0.20,
          "y": 1,
          "r": 1.5,
          "colorStops": [
            {
              "offset": 0.1,
              "color": "rgba(212,63,57,.1)"
            },
            {
              "offset": 0.7,
              "color": "RGBA(212,63,57,.6)"
            }
          ]
        },
      }},
    {value:80, name:'湖蟹',
    itemStyle:{
        normal:{
            color: {
                "type": "radial",
                "x": -0.2,
                "y": 0.5,
                "r": 3,
                colorStops: [{
                    offset: 0.2, color: 'RGBA(11, 255, 251, .1)' // 0% 处的颜色
                }, {
                    offset: 0.7, color: 'RGBA(11, 255, 251, .6)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            },
        },
    }},
    {value:54, name:'小龙虾',
    itemStyle:{
        normal:{
            color: {
                "type": "radial",
                "x": 0.5,
                "y": -0.8,
                "r": 2,
                colorStops: [{
                    offset: 0.1, color: 'rgba(7, 157, 227, 0.1)' // 0% 处的颜色
                }, {
                    offset: 0.8, color: 'rgba(7, 157, 227, 0.6)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            },
        },
        "borderColor": "RGBA(7, 157, 227, 1)"
    }},
    {value:65, name:'健康鸡',
    itemStyle:{
        normal:{
            color: {
                "type": "radial",
                "x": 1.2,
                "y": 0.4,
                "r": 2,
                colorStops: [{
                    offset: 0.1, color: 'RGBA(11, 251, 15, .1)' // 0% 处的颜色
                }, {
                    offset: 0.6, color: 'rgba(11, 251, 15, .6)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            },
        },
        "borderColor": "rgba(11, 251, 15, 1)"
    }},
    {value:48, name:'牛蛙',
    "itemStyle": {
        "color": {
          "type": "radial",
          "x": 0.9,
          "y": 1.5,
          "r": 2,
          "colorStops": [
            {
              "offset": 0.4,
              "color": "RGBA(11, 255, 251, .1)"
            },
            {
              "offset": 0.7,
              "color": "RGBA(11, 255, 251, .6)"
            }
          ]
        },
      }
    },
      
];
export default{
    title: {
         text: '总数',
         subtext: 19500,
         textStyle: {
             color: '#f2f2f2',
             fontSize: 30,
             // align: 'center'
             verticalAlign :'top'
         },
         subtextStyle: {
             fontSize: 30,
             color: ['#ff9d19']
         },
         x: 'center',
         y: 'center',
     },
    tooltip: {
        trigger: "item",
        formatter: "{b}: {c} ({d}%)",
        backgroundColor: 'rgba(27,45,61,.8)',
        textStyle: {
          color: 'fff',
          fontSize: 12
        }
      },
    legend: {
        orient: 'horizontal',
        x: 'center',
        data:['竹鼠','小龙虾','湖蟹','健康鸡','牛蛙'],
        top:'10%',
        textStyle:{
            color:'#fff'
        }
    },
    
    grid: {
        backgroundColor:'rgba(38, 52, 75, 0.1)',
        borderWidth:0,
        show: true,
        top:'20%',
        zlevel:2,
    },
    

    
    series: [
        {
            type:'pie',
            radius: ['30%', '50%'],
            center: ['50%', '54%'],
            legendHoverLink :true,
            label: {
                 normal: {
                    formatter: '{b}:({d}%)',
                    position: 'outside',
                    color:'#fff',
                    verticalAlign: 'middle',
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle:{
            },
            data:data
        },
        
    ]
}