<template>
  <div class="right-content home">
    <div class="content">
      <form class="con-form con-form-right">
        <div class="time item">
          <label class="lalbel win54">&nbsp;&nbsp;时间：</label>
          <div class="el-form-item__content">
            <div class="el-input">
              <DatePicker format="yyyy-MM-dd" type="date" placeholder="选择日期" class="inblock"></DatePicker>
              <div class="line inblock">一</div>
              <DatePicker format="yyyy-MM-dd" type="date" placeholder="选择日期" class="inblock"></DatePicker>
            </div>
          </div>
        </div>
        <div class="el-form-item last-item item positions">
          <div class="el-form-item__content">
            <button class="search btn-submit">统计</button>
          </div>
        </div>
      </form>
      <div class="charts-block statistics">
        <div class="chart-wrap">
          <Titles :title="titlets"></Titles>
          <div class="t-search clearfix">
            <div class="total">
              <span class="num">23</span>
              <span class="text">查询总量(次)</span>
            </div>
            <div  class="line" style="">
                <Trend></Trend>
            </div>
          </div>
        </div>
      </div>
      <div class="cenleftrigh">
           <div class="charts-block">
            <div class="chart-wrap">
              <Titles :title="titlets2"></Titles>
              <Bar></Bar>
            </div>
           </div>   
           <div class="charts-block">
            <div class="chart-wrap">
              <Titles :title="titlets3"></Titles>
              <pie></pie>
            </div>
           </div>  
      </div>
    </div>
  </div>
</template>
<script>
import Titles from "../modele/title.vue";
import Trend from '../charts/trend'
import Bar from '../charts/bar'
import pie from '../charts/pie'

export default {
  components: {
    Titles,Trend,Bar,pie
  },
  data() {
    return {
      titlets: "溯源码查询情况统计",
      titlets2:'按采购量统计',
      titlets3:'不同产品使用量占比'
    };
  }
};
</script>
<style lang="less" scoped>
</style>

