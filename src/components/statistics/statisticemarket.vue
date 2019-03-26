<template>
    <div class="right-content home">
         <div class="content" style="min-height:auto">
         <form class="con-form con-form-right">
             <div class="item">
                <label class="lalbel win54">时间：</label>
                <div class="el-form-item__content">
                    <div class="el-input">
                    <Select class="con-itme-sele" placeholder="请选择">
                        <Option value="0">近一月</Option>
                        <Option value="3">近半年</Option>
                        <Option value="1">近一年</Option>
                    </Select>
                    </div>
                </div>
                </div>
            <div class="el-form-item last-item item positions">
            <div class="el-form-item__content">
                <button class="search btn-submit">统计</button>
            </div>
            </div>
        </form>
         </div>
        <div class="charts-block">
            <div class="chart-wrap">
                <Titles :title="title"/>
                <Pie2></Pie2>
            </div>
        </div>
         <div class="charts-block">
              <div class="chart-wrap">
                <Titles :title="title2"/>
                 <Map></Map>
              </div>
         </div>
          <div class="charts-block">
              <div class="chart-wrap">
                <Titles :title="title3"/>
                <Bar2></Bar2>
              </div>
         </div>
          <div class="charts-block">
              <div class="chart-wrap">
                <Titles :title="title4"/>
                 <Trend2></Trend2>
              </div>
         </div>
    </div>
</template>
<script>
import Titles from '../modele/title.vue'
import Map from '../charts/map'
import Trend2 from '../charts/trend2'
import Pie2 from '../charts/pie2'
import Bar2 from '../charts/bar2'
export default {
    components:{
        Titles,Map,Trend2,Pie2,Bar2
    },
    data(){
        return{
            title2:'产品销售分布',
            title:'销售情况',
            title3:'客户销售量',
            title4:'销售额趋势图'
        }
    }
}
</script>

<style scoped>
    .charts-block{
        height: 420px!important;
    }
</style>
