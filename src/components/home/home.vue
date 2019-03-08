<template>
    <div class="right-content home">
        <div class="charts-block">
            <div class="chart-wrap">
                <Titles :title="title"/>
            </div>
        </div>
         <div class="charts-block">
              <div class="chart-wrap">
                <Titles :title="title2"/>
              </div>
         </div>
          <div class="charts-block">
              <div class="chart-wrap">
                <Titles :title="title3"/>
              </div>
         </div>
          <div class="charts-block">
              <div class="chart-wrap">
                <Titles :title="title4"/>
              </div>
         </div>
    </div>
</template>
<script>
import Titles from '../modele/title.vue'
export default {
    components:{
        Titles
    },
    data(){
        return{
            title:'养殖基地监测',
            title2:'近一月销售情况',
            title3:'当年产品销售分布',
            title4:'当年投入品采购及使用走势'
        }
    }
}
</script>

