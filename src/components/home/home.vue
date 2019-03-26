<template>
    <div class="right-content home home-map">
        <div class="content conmap">
            <div class="iteming">
                <span>{{dateitem.getFullYear}}</span>
                <p>{{dateitem.item}}</p>
            </div>
            <div class="tis tis1">
                <div class="txt">
                    <img src="../../assets/lefts.png" alt="">
                    <span>产品销售量</span>
                    <img src="../../assets/rights.png" alt="">
                </div>
                <div class="blocktxt">
                    本月销售量<span class="inblock">19900<span class="t">只</span></span>
                </div>
                <div class="charts">
                     <Trend3></Trend3>
                </div>
            </div>
            <div class="tis tis2" >
                <div class="txt">
                    <img src="../../assets/lefts.png" alt="">
                    <span>朔源码使用情况</span>
                    <img src="../../assets/rights.png" alt="">
                </div>
                <div class="blocktxt blocktxtimg">
                    <div class="itxt">
                        <div class="top">
                            本月打印量
                            <div class="tts">
                                <span>852</span>次
                            </div>
                        </div>
                    </div>
                    <img src="../../assets/lines.png" class="itxt" alt="">
                    <div class="itxt">
                        <div class="top">
                            本月查询量
                            <div class="tts">
                                <span>1210</span>次
                            </div>
                        </div>
                    </div>
                </div>
                <div class="charts">
                     <Trend4></Trend4>
                </div>
            </div>
            <div class="tis tis3">
                <div class="txt">
                    <img src="../../assets/lefts.png" alt="">
                    <span>产品销售分布</span>
                    <img src="../../assets/rights.png" alt="">
                </div>
                <div class="charts">
                    <Map2></Map2>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Trend3 from '../charts/charts-trend3'
import Trend4 from '../charts/charts-trend4'
import Map2 from '../charts/map2'
export default {
    components:{
        Trend3,Trend4,Map2
    },
    data(){
        return{
            title:'养殖基地监测',
            title2:'近一月销售情况',
            title3:'当年产品销售分布',
            title4:'当年投入品采购及使用走势',
            dateitem:{
                getFullYear:'',
                item:''
            },
            show:null,
        }
    },
    created(){
        this.dateItem();
    },
    methods:{
        dateItem(){
            var myDate=new Date(); //第一次进入
            let txts='';
            txts+=myDate.getFullYear()+'年';
            txts+=(myDate.getMonth()+1)<10?'0'+(myDate.getMonth()+1)+'月':(myDate.getMonth()+1)+'月';
            txts+=myDate.getDate()+'日';
            let items='';
            items=String(myDate.getHours())+':'+String(myDate.getMinutes())+':'+String(myDate.getSeconds()<10?'0'+String(myDate.getSeconds()):myDate.getSeconds());
            this.dateitem={
                getFullYear:txts,
                item:items
            }
            this.show = setInterval(() => {
                var myDate=new Date();
                let txts='';
                txts+=myDate.getFullYear()+'年';
                txts+=(myDate.getMonth()+1)<10?'0'+(myDate.getMonth()+1)+'月':(myDate.getMonth()+1)+'月';
                txts+=myDate.getDate()+'日';
                let items='';
                items=String(myDate.getHours())+':'+String(myDate.getMinutes())+':'+String(myDate.getSeconds()<10?'0'+String(myDate.getSeconds()):myDate.getSeconds());
                this.dateitem={
                    getFullYear:txts,
                    item:items
                }
            }, 1000);
        }
    },
    beforeDestroy(){//关闭定时
        window.clearInterval(this.show);
    }

}
</script>



