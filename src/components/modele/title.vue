<template>
  <div data-v-77cbb8e1 class="chart-head">
    <div data-v-77cbb8e1 class="chart-border-l">
      <div data-v-77cbb8e1></div>
    </div>
    <div data-v-77cbb8e1 class="chart-border-r">
      <div data-v-77cbb8e1></div>
    </div>
    <div data-v-77cbb8e1 class="chart-tit">
      <div data-v-77cbb8e1 class="tit-border-l"></div>
      <div data-v-77cbb8e1 class="tit-text">{{title}}</div>
      <div data-v-77cbb8e1 class="tit-border-r"></div>
    </div>
  </div>
</template>
<script>
export default {
        props:{
            title:{
                type:String
            }
        },
   
}
</script>

<style lang='less'>
.chart-head {
    width: 100%;
    height: 26px;
    position: relative;
    margin-top: 5px;
    .chart-border-l {
        box-sizing: border-box;
        width: 25%;
        height: 25px;
        position: absolute;
        left: 0;
        top: 0;
        overflow: hidden;
        div{
            width: 100%;
            height: 100%;
            margin-left: -10px;
            box-sizing: border-box;
            transform: skew(40deg);
            border-top: 1px solid #407678;
            border-right: 1px solid #407678;
        }
    }
    .chart-border-r {
        box-sizing: border-box;
        width: 25%;
        height: 25px;
        position: absolute;
        right: 0;
        top: 0;
        overflow: hidden;
        div{
            width: 100%;
            height: 100%;
            margin-left: 10px;
            box-sizing: border-box;
            transform: skew(-40deg);
            border-top: 1px solid #407678;
            border-left: 1px solid #407678;
        }
    }
    .chart-tit{
        position: absolute;
        width: 50%;
        height: 25px;
        top: 0;
        left: 25%;
        box-sizing: border-box;
        border-bottom: 1px solid #407678;
        display: flex;
        flex-direction: row;
        .tit-border-l {
            height: 8px;
            flex: 1;
            background: #407678;
            position: relative;
            &:after {
                content: "";
                width: 0;
                height: 0;
                border-top: 8px solid #407678;
                border-left: 7px solid transparent;
                position: absolute;
                left: -7px;
                top: 0;
            }
            
        }
        .tit-text{
            margin-top: -4px;
            font-size: 16px;
            color: #ffffff;
            padding: 0 10px;
        }
        .tit-border-r {
            height: 8px;
            flex: 1;
            background: #407678;
            &:after {
                content: "";
                width: 0;
                height: 0;
                border-top: 8px solid #407678;
                border-right: 7px solid transparent;
                position: absolute;
                right: -7px;
                top: 0;
            }
        }
    }
}
</style>
