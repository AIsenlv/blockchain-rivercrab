<template>
  <div class="right-content">
    <div class="content birthc">
      <div class="div_op">
        <div class="btn_add">
          <i class="ivu-icon ivu-icon-md-add"></i>&nbsp;新增
        </div>
      </div>
      <div class="div_left">
        <div class="div_tree">
          <div class="el-tree">
            <ggg @showbox="toshow" :msg="dateArr"></ggg>
            <!---->
          </div>
        </div>
      </div>
      <div class="div_right disltn">
        <div class="div_tb">
          <table border="0" cellspacing="0" cellpadding="0" width="100%">
            <tr>
              <th class="th_phase">生育期阶段</th>
              <th class="th_operateName">操作</th>
              <th class="th_executeTimeDesc">执行时间</th>
              <th class="th_operateContent">内容</th>
              <th class="th_status">状态</th>
              <th class="th_op">操作</th>
            </tr>
            <tbody v-if="show">

            
            <tr>
              <td rowspan="4" style="border-right: 1px solid rgb(41, 55, 74);">产前</td>
              <td>池塘消毒</td>
              <td style="text-align: left;">2017当年春节后一月左右</td>
              <td style="text-align: left;">
                1、利用生石灰改良底质。
                2、风吹，曝晒。
              </td>
              <td class="workcolor">启用</td>
              <td style="min-width: 182px;">
                <i title="停用" class="img_btn img_stop"></i>
                <!---->
                <i title="编辑" class="img_btn img_edit"></i>
                <i title="查看" class="img_btn img_view"></i>
                <!---->
                <i title="上移" class="img_btn img_moveup"></i>
                <i title="下移" class="img_btn img_movedown"></i>
              </td>
            </tr>
            <tr>
              <!---->
              <td>蟹苗准备</td>
              <td style="text-align: left;">2017五一左右培育</td>
              <td style="text-align: left;">养殖和培育同时进行</td>
              <td class="workcolor">启用</td>
              <td style="min-width: 182px;">
                <i title="停用" class="img_btn img_stop"></i>
                <!---->
                <i title="编辑" class="img_btn img_edit"></i>
                <i title="查看" class="img_btn img_view"></i>
                <!---->
                <i title="上移" class="img_btn img_moveup"></i>
                <i title="下移" class="img_btn img_movedown"></i>
              </td>
            </tr>
            <tr>
              <!---->
              <td>蟹苗投放</td>
              <td style="text-align: left;">2017当年3月1号左右</td>
              <td style="text-align: left;">林超、负责稻田边沟区域 肖成全负责池塘区域</td>
              <td class="workcolor">启用</td>
              <td style="min-width: 182px;">
                <i title="停用" class="img_btn img_stop"></i>
                <!---->
                <i title="编辑" class="img_btn img_edit"></i>
                <i title="查看" class="img_btn img_view"></i>
                <!---->
                <i title="上移" class="img_btn img_moveup"></i>
                <i title="下移" class="img_btn img_movedown"></i>
              </td>
            </tr>
            <tr>
              <!---->
              <td>池塘清淤</td>
              <td style="text-align: left;">2017当年春节后半月左右</td>
              <td style="text-align: left;">对接第三方专业清淤队伍</td>
              <td class="workcolor">启用</td>
              <td style="min-width: 182px;">
                <i title="停用" class="img_btn img_stop"></i>
                <!---->
                <i title="编辑" class="img_btn img_edit"></i>
                <i title="查看" class="img_btn img_view"></i>
                <!---->
                <i title="上移" class="img_btn img_moveup"></i>
                <i title="下移" class="img_btn img_movedown"></i>
              </td>
            </tr>
            <tr>
              <td rowspan="3" style="border-right: 1px solid rgb(41, 55, 74);">产中</td>
              <td>饵料采购</td>
              <td style="text-align: left;">当年2月中旬至9月1号 按月定制</td>
              <td style="text-align: left;">
                1、奥博七里生态生态占地面广生态系统丰富，各种水生动植物丰富，伟螃蟹提供了丰富的饵料
                2、园区自种的有机谷物为主，市场农户采购为辅
              </td>
              <td class="workcolor">启用</td>
              <td style="min-width: 182px;">
                <i title="停用" class="img_btn img_stop"></i>
                <!---->
                <i title="编辑" class="img_btn img_edit"></i>
                <i title="查看" class="img_btn img_view"></i>
                <!---->
                <i title="上移" class="img_btn img_moveup"></i>
                <i title="下移" class="img_btn img_movedown"></i>
              </td>
            </tr>
            <tr>
              <!---->
              <td>投放饵料</td>
              <td style="text-align: left;">当年3月1号-当年9月0号</td>
              <td style="text-align: left;">林超、负责稻田边沟区域 肖成全负责池塘区域</td>
              <td class="workcolor">启用</td>
              <td style="min-width: 182px;">
                <i title="停用" class="img_btn img_stop"></i>
                <!---->
                <i title="编辑" class="img_btn img_edit"></i>
                <i title="查看" class="img_btn img_view"></i>
                <!---->
                <i title="上移" class="img_btn img_moveup"></i>
                <i title="下移" class="img_btn img_movedown"></i>
              </td>
            </tr>
            <tr>
              <!---->
              <td>用药</td>
              <td style="text-align: left;">当年9月1号-12月3</td>
              <td style="text-align: left;">根据检验结果对水质进行有针对性的调整用药</td>
              <td class="workcolor">启用</td>
              <td style="min-width: 182px;">
                <i title="停用" class="img_btn img_stop"></i>
                <!---->
                <i title="编辑" class="img_btn img_edit"></i>
                <i title="查看" class="img_btn img_view"></i>
                <!---->
                <i title="上移" class="img_btn img_moveup"></i>
                <i title="下移" class="img_btn img_movedown"></i>
              </td>
            </tr>
            <tr>
              <td rowspan="3" style="border-right: 1px solid rgb(41, 55, 74);">产后</td>
              <td>捕捞</td>
              <td style="text-align: left;">当年3月1号-当年9月2号</td>
              <td style="text-align: left;">
                1、肖成全负责池塘捕捞
                2、林超负责稻田边沟捕捞
              </td>
              <td class="workcolor">启用</td>
              <td style="min-width: 182px;">
                <i title="停用" class="img_btn img_stop"></i>
                <!---->
                <i title="编辑" class="img_btn img_edit"></i>
                <i title="查看" class="img_btn img_view"></i>
                <!---->
                <i title="上移" class="img_btn img_moveup"></i>
                <i title="下移" class="img_btn img_movedown"></i>
              </td>
            </tr>
            <tr>
              <!---->
              <td>移池</td>
              <td style="text-align: left;">当年9月1号-12月1</td>
              <td style="text-align: left;">当天捕捞隔天销售</td>
              <td class="workcolor">启用</td>
              <td style="min-width: 182px;">
                <i title="停用" class="img_btn img_stop"></i>
                <!---->
                <i title="编辑" class="img_btn img_edit"></i>
                <i title="查看" class="img_btn img_view"></i>
                <!---->
                <i title="上移" class="img_btn img_moveup"></i>
                <i title="下移" class="img_btn img_movedown"></i>
              </td>
            </tr>
            <tr>
              <!---->
              <td>暂养</td>
              <td style="text-align: left;">当年9月1号-12月2</td>
              <td style="text-align: left;">氧气注入、饵料投放</td>
              <td class="workcolor">启用</td>
              <td style="min-width: 182px;">
                <i title="停用" class="img_btn img_stop"></i>
                <!---->
                <i title="编辑" class="img_btn img_edit"></i>
                <i title="查看" class="img_btn img_view"></i>
                <!---->
                <i title="上移" class="img_btn img_moveup"></i>
                <i title="下移" class="img_btn img_movedown"></i>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dateArr: [
        {
          text: "水产品",
          valid: false,
          inx: 1,
          txt: false,
          next: [
            {
              text: "蟹类",
              valid: false,
              inx: 2,
              next: [
                { text: "稻田蟹", valid: false, txt: false, inx: 3, next: [] },
                { text: "湖里蟹", valid: false, txt: false, inx: 3, next: [] },
                { text: "河蟹", valid: false, txt: false, inx: 3, next: [] },
                { text: "红蟹", valid: false, txt: false, inx: 3, next: [] }
              ]
            }
          ]
        }
      ],
      show:false,
    };
  },
  methods: {
    toshow(arr) {
      this.show =true;
    }
  },
  components: {
    ggg: {
      name: "gs",
      template: `<div>
                    <div class="el-tree-node" v-for="a in msg">
                        <div class="el-tree-node__content" :class="a.txt?'acisnt':''" @click="colorclick(a)">
                            <span class="el-tree-node__expand-icon" :class="a.valid || a.next.length=='0'?'expanded':''" :style="'margin-left:'+(a.inx==1?'100':(100+a.inx*15))+'px'"
                           
                            ></span>
                            <span class="el-tree-node__label"  >{{a.text}}</span>
                        </div>
                        <div class="el-tree-node__children" v-if="a.valid">
                                 <gs :msg="a.next"></gs>
                        </div>
                    </div>    
                   
                </div>
              `,
      props: ["msg"],
      methods: {
        colorclick(a) {
          this.$emit("showbox");
          this.msg.forEach(item => {
            if (a.inx == item.inx && a.text == item.text) {
              item.valid = !item.valid;
              if (
                a.inx == item.inx &&
                a.text == item.text &&
                item.next.length == 0
              ) {
                this.$emit("showbox");
                item.txt = true;
              }
            } else if (item.next.length > 0) {
              find(item.next, a);
            } else {
              item.txt = false;
              return;
            }
          });
        }
      },
      data() {
        return {};
      }
    }
  }
};
</script>
<style lang="less">
@import "./css/index.less";
</style>

