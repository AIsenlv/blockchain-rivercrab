<template>
  <div class="map" style="width:100%;height:100%;">
      <div ref="myChart" id="myChartsts" style="width:100%;height:100%;"></div>
  </div>
</template>
<script>
import echarts from 'echarts';
import 'echarts/map/js/china.js';
import option from './map/map-option2.js'

export default {
    data(){
        return{
             chart:null
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
            this.chart = this.$echarts.init(document.getElementById('myChartsts'));
            this.chart .setOption(option);
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

