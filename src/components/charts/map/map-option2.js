export default {
    title: {
        text: '',
        subtext: '',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        textStyle:{
            align: 'left',
            baseline: 'bottom',
            fontSize: 14,
        },
        backgroundColor:'rgba(2, 30, 42, 0.69)',
        formatter: '销售量：<br/>{b}: {c}'
    },
   
    //左侧小导航图标
    visualMap: {
        min: 0,
        max: '5000',
        text:['高','底'],
        realtime: true,
        calculable: true,
        itemWidth:14,
        itemHeight:120,
        textStyle:{
            color:'#fff'
        },
        name:'只',
        padding: [120,50,20,50],
        color: ['rgb(212,63,57)','rgb(231,152,35)','rgb(5,144,199)']
    },
   

    //配置属性
    series: [{
        name: '数据',
        type: 'map',
        // width: '70%',
        // height:'80%',
        mapType: 'china',
        roam: false,
        
        label: {
            normal: {
                show: true , //省份名称
                color:'#fff',
            },
            emphasis: {
                show: true
            }
        },
      
        itemStyle: {  
            normal: {
                areaColor: "#101f32",
                borderWidth: 1.1,
                textStyle: {
                    color: "#fff"
                },
                //borderColor: "#43d0d6" //地图边框颜色
                borderColor: '#0ba3ae',
                borderWidth: 1,
                shadowColor: '#05dcd9',
                shadowBlur: 30,
                areaColor: '#112246',
            },
            borderType :'solid',
            emphasis: {
                label:{
                    color: "#fff",
                },
                areaColor: 'RGBA(11, 255, 251, .6)',
               
              
            }
          },
         
        data:[
            {name: '北京',value: Math.round(Math.random()*5000) },
            {name: '天津',value: Math.round(Math.random()*5000) },
            {name: '上海',value: Math.round(Math.random()*5000) },
            {name: '重庆',value: Math.round(Math.random()*5000) },
            {name: '河北',value: Math.round(Math.random()*5000) },
            {name: '河南',value: Math.round(Math.random()*5000) },
            {name: '云南',value: Math.round(Math.random()*5000) },
            {name: '辽宁',value: Math.round(Math.random()*5000) },
            {name: '黑龙江',value: Math.round(Math.random()*5000) },
            {name: '湖南',value: Math.round(Math.random()*5000) },
            {name: '安徽',value: Math.round(Math.random()*5000) },
            {name: '山东',value: Math.round(Math.random()*5000) },
            {name: '新疆',value: Math.round(Math.random()*5000) },
            {name: '江苏',value: Math.round(Math.random()*5000) },
            {name: '浙江',value: Math.round(Math.random()*5000) },
            {name: '江西',value: Math.round(Math.random()*5000) },
            {name: '湖北',value: Math.round(Math.random()*5000) },
            {name: '广西',value: Math.round(Math.random()*5000) },
            {name: '甘肃',value: Math.round(Math.random()*5000) },
            {name: '山西',value: Math.round(Math.random()*5000) },
            {name: '内蒙古',value: Math.round(Math.random()*5000) },
            {name: '陕西',value: Math.round(Math.random()*5000) },
            {name: '吉林',value: Math.round(Math.random()*5000) },
            {name: '福建',value: Math.round(Math.random()*5000) },
            {name: '贵州',value: Math.round(Math.random()*5000) },
            {name: '广东',value: Math.round(Math.random()*5000) },
            {name: '青海',value: Math.round(Math.random()*5000) },
            {name: '西藏',value: Math.round(Math.random()*5000) },
            {name: '四川',value: Math.round(Math.random()*5000) },
            {name: '宁夏',value: Math.round(Math.random()*5000) },
            {name: '海南',value: Math.round(Math.random()*5000) },
            {name: '台湾',value: Math.round(Math.random()*5000) },
            {name: '香港',value: Math.round(Math.random()*5000) },
            {name: '澳门',value: Math.round(Math.random()*5000) },
            {name: '南海诸岛',value:Math.round(Math.random()*5000)},
        ]  //数据
    }]
};
