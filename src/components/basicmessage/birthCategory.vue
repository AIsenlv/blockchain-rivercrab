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
            <div class="left">共<span>{{date.length}}</span>条</div>
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
      date: []
    };
  },
  methods: {
    toshow(arr) {
      this.date = [
        { name: "产前", type: "启用" },
        { name: "产中", type: "启用" },
        { name: "产后", type: "启用" }
      ];
    }
  },
  components: {
    ggg: {
      name: "gs",
      template: `<div>
                    <div class="el-tree-node" v-for="a in msg">
                        <div class="el-tree-node__content" :class="a.txt?'acisnt':''" @click.stop.self="colorclick(a)" >
                            <span class="el-tree-node__expand-icon" :class="a.valid || a.next.length=='0'?'expanded':''" :style="'margin-left:'+(a.inx==1?'100':(100+a.inx*15))+'px'"
                              @click.stop.self="colorclick(a)"
                            ></span>
                            <span class="el-tree-node__label" @click.stop.self="colorclick(a)">{{a.text}}</span>
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

