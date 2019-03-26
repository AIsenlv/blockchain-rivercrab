<template>
  <div class="map" style="width:100%;height:100%;">
      <div id="myChart-bar" style="width:100%;height:100%;"></div>
  </div>
</template>
<script>
import echarts from 'echarts';
import trend from './map/charts-bar2.js'

export default {
    data(){
        return{
             chart:null,
        }
    },
    mounted() {
        this.appay();
    },
    computed:{
          shows(){
              return this.$store.getters.showvalid;
          }
    },
    watch:{
        shows(newVal){
            this.chart.resize(); 
        }
    },
    methods:{
        appay(){
            this.chart = this.$echarts.init(document.getElementById('myChart-bar'));
            this.chart .setOption(trend);
            //window.onresize = this.chart.resize;//图表自适应宽度
            window.addEventListener("resize", () => { 
                this.chart.resize();  
            });
        }
    }   
}
</script>
<style>
    .hovercen{
        width: 100px;
        height: 80px;
        border: 1px solid #ccc;
    }
</style>

