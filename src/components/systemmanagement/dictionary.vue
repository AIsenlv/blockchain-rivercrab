<template>
  <div class="right-content">
    <div class="content birthc dictionary">
      <div class="div_op">
        <div class="btn_add win120">
          <i class="ivu-icon ivu-icon-md-add" ></i>&nbsp;新增字典值
        </div>
      </div>
      <div class="div_left">
        <div class="div_tree">
          <div class="el-tree">
            <ul>
              <li  @click="showftr(1)" :style="show==1?'cursor: pointer; background-color: rgba(79, 134, 235, 0.2)':''" >
                <!---->
                <!---->
                <Icon type="ios-checkmark-circle-outline"  class="iconfont icon-duihao stop-apply"/>
                <span>物联网监测项目</span>
                <span>
                  <i title="修改" class="c_icon modi"></i>
                  <i title="启用" class="c_icon start"></i>
                  <!---->
                  <i title="删除" class="c_icon del"></i>
                </span>
              </li>
              <li :style="show==2?'cursor: pointer; background-color: rgba(79, 134, 235, 0.2)':''"   @click="showftr(2)">
                <!---->
                <!---->
                <Icon type="ios-checkmark-circle-outline"  class="iconfont icon-duihao stop-apply"/>
                <span>检验检测项目</span>
                <span>
                  <i title="修改" class="c_icon modi"></i>
                  <i title="启用" class="c_icon start"></i>
                  <!---->
                  <i title="删除" class="c_icon del"></i>
                </span>
              </li>
              <li  @click="showftr(3)"
               
                :style="show==3?'cursor: pointer; background-color: rgba(79, 134, 235, 0.2)':''"
              >
                <Icon type="ios-checkmark-circle-outline"  class="iconfont icon-duihao"/>
              
                <span>产品规格</span>
                <span>
                  <i title="修改" class="c_icon modi"></i>
                  <i title="停用" class="c_icon stop"></i>
                </span>
              </li>
            </ul>
            <!---->
          </div>
        </div>
      </div>
      <div class="div_right">
        <div class="div_tb">
          <table border="0" cellspacing="0" cellpadding="0" width="100%">
            <tr>
              <th class="th_sort">生育顺序</th>
              <th class="th_phase">生育期阶段</th>
              <th class="th_status">状态</th>
              <th class="th_op">操作</th>
            </tr>
            <tr v-for="(item,i) in date" :key="item.id">
              <td>{{i+1}}</td>
              <td>{{item.name}}</td>
              <td>{{item.type}}</td>
              <td>
                <div>
                  <div class="div_opbtn">
                    <div title="停用" class="btn_op stop"></div>
                    <div title="修改" class="btn_op modi"></div>
                    <div title="查看" class="btn_op inq"></div>
                    <div title="上移" class="btn_op img_moveup"></div>
                    <div title="下移" class="btn_op img_movedown"></div>
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </div>
        <div class="page">
          <div class="left">共
            <span>{{date.length}}</span>条
          </div>
          <Page :total="date.length" prev-text="上一页" next-text="下一页" show-elevator></Page>
          <!-- <span class="inblock">确定</span> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        show:2,
      date: [
        { name: "产前", type: "启用" },
        { name: "产中", type: "启用" },
        { name: "产后", type: "启用" }
      ]
    };
  },
  methods: {
      showftr(inx){
        this.show=inx;
      }
  }
};
</script>
<style lang="less">
@import "../basicmessage/css/index.less";
</style>

