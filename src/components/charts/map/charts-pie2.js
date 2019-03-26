
 var data = [
    {value:35,hoverAnimation: true,  name:'竹鼠', "itemStyle": {
        "color": {
          "type": "radial",
          "x": 0.5,
          "y": 0.5,
          "r": 0.65,
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
        "borderColor": "RGBA(11, 255, 251,1)"
      }
    },
    
      
];
export default{
    title: {
         text: '总销售额度',
         subtext: '446万',
         textStyle: {
             color: '#f2f2f2',
             fontSize: 20,
             // align: 'center'
             verticalAlign :'top'
         },
         subtextStyle: {
             fontSize: 30,
             color: ['#ff9d19']
         },
         x: 'center',
         y: '42%',
     },
    tooltip: {
        show:false,
        trigger: "item",
        formatter: "{b}: {c} ({d}%)",
        backgroundColor: 'rgba(27,45,61,.8)',
        textStyle: {
          color: 'fff',
          fontSize: 12
        }
      },
    legend: {
        show:false,
        orient: 'horizontal',
        x: 'center',
        data:['竹鼠'],
        top:'10%',
        textStyle:{
            color:'#fff'
        }
    },
    
    grid: {
        backgroundColor:'rgba(38, 52, 75, 0.1)',
        borderWidth:0,
        show: true,
        zlevel:2,
    },
    
    series: [
        {
            type:'pie',
            radius: ['35%', '50%'],
            center: ['50%', '50%'],
            legendHoverLink :true,
            label: {
                show:false,
                 normal: {
                    show:false,
                    formatter: '{b}:({d}%)',
                    position: 'outside',
                    color:'#fff',
                    verticalAlign: 'middle',
                },
                emphasis: {
                }
            },
            itemStyle:{
            },
            data:data
        },
        
    ]
}