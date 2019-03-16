<template>
  <div class="right-content">
    <div class="content birthc sdf">
      <div class="div_op">
        <div class="btn_add">
          <i class="ivu-icon ivu-icon-md-add"></i>&nbsp;新增
        </div>
      </div>
      <div class="div_left">
        <div class="div_tree">
          <div class="el-tree">
            <ggg :msg="dateArr"></ggg>
            <!---->
          </div>
        </div>
      </div>
      <div class="edit-box">
        <div class="box clearfix">
          <table>
            <tr>
              <td>机构名称：</td>
              <td>
                <div class="ipt_block">
                  <div class="el-input">
                    <!---->
                    <!---->
                    <input
                      autocomplete="off"
                      type="text"
                      rows="2"
                      v-model="arrs.text"
                      validateevent="true"
                      class="el-input__inner"
                    >
                    <!---->
                    <!---->
                  </div>
                </div>
                <span class="mb_mark">*</span>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>父级：</td>
              <td>
                <div class="ipt_block">
                  <input readonly="readonly" v-model="arrs2.text" @click="isoption(3)" class="row_txt select_txt txt_prod">
                </div>
                <span class="mb_mark">*</span>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <div class="div_selpanel"  v-show="show">
                  <div class="div_seltree">
                    <div class="el-tree">
                      <gensont :msg="dateArr2"></gensont>   
                    </div>
                  </div>
                  <div  class="btn_block">
                    <div  class="btn_selconfirm" @click="isoption(1)">重置</div>
                    <div  class="btn_selcancel" @click="isoption(2)">取消</div>
                 </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>描述：</td>
              <td>
                <div class="ipt_block">
                  <div class="el-textarea">
                    <textarea
                      type="textarea"
                      rows="4"
                      autocomplete="off"
                      validateevent="true"
                      v-model="arrs.texts"
                      class="el-textarea__inner"
                      style="min-height: 33px;"
                    ></textarea>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button type="primary ok-btn" class="btn-submit">确定</button>
                <!---->
                <button class="btn-cancel">取消</button>
              </td>
            </tr>
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
          text: "深圳水产养殖基地",
          valid: true,
          inx: 1,
          txt: false,
          texts:'水产养殖',
          parent:'',
          next: [
            {
              text: "生产部",
              texts:'水产养殖',
              valid: true,
              parent:'深圳水产养殖基地',
              inx: 2,
              next: [
                { text: "生产一部",texts:'水产养殖',parent:'生产部', valid: true, txt: false, inx: 3, next: [] },
                { text: "生产二部",texts:'水产养殖', parent:'生产部', valid: true, txt: false, inx: 3, next: [] },
              ]
            },
            {
              text: "销售部",
              valid: true,
              texts:'水产养殖',
              parent:'深圳水产养殖基地', 
              inx: 2,
              next: [
                { text: "销售一部", texts:'水产养殖',parent:'销售部', valid: true, txt: false, inx: 3, next: [] },
                
              ]
            },
            {
              text: "管理部",
              valid: true,
              texts:'水产养殖',
              inx: 2,
              next: [
                { text: "管理一部", texts:'水产养殖',valid: true, txt: false, inx: 3, next: [] },
                
              ]
            }
          ]
        }
      ],
      dateArr2: [
        {
          text: "深圳水产养殖基地",
          valid: true,
          inx: 1,
          txt: false,
          texts:'水产养殖',
          parent:'',
          next: [
            {
              text: "生产部",
              texts:'水产养殖',
              valid: true,
              parent:'深圳水产养殖基地',
              inx: 2,
              next: [
                { text: "生产一部",texts:'水产养殖',parent:'生产部', valid: true, txt: false, inx: 3, next: [] },
                { text: "生产二部",texts:'水产养殖', parent:'生产部', valid: true, txt: false, inx: 3, next: [] },
              ]
            },
            {
              text: "销售部",
              valid: true,
              texts:'水产养殖',
              parent:'深圳水产养殖基地', 
              inx: 2,
              next: [
                { text: "销售一部", texts:'水产养殖',parent:'销售部', valid: true, txt: false, inx: 3, next: [] },
                
              ]
            },
            {
              text: "管理部",
              valid: true,
              texts:'水产养殖',
              inx: 2,
              next: [
                { text: "管理一部", texts:'水产养殖',valid: true, txt: false, inx: 3, next: [] },
                
              ]
            }
          ]
        }
      ],
      show: false,
    };
  },
  computed:{
        arrs(){
            let ass=this.$store.getters.arrs;
           ass.parent= ass.parent?ass.parent:'根节点';
            return ass?ass:'';
        },
        arrs2(){
            let ass=this.$store.getters.arrs2;
            ass.text= ass.text?ass.text:'根节点';
            return ass?ass:'';
        }
  },
  methods: {
      isoption(inx){   
          if(inx==2){//关闭
               this.show=false;
          } else if(inx==1){
              this.$store.commit('arrss2',{text:null});
          }else if(inx==3){
              this.show=true;
          }
         
      }
  },
  components: {
    ggg: {
      name: "gs",
      template: `<div>
                    <div class="el-tree-node" v-for="a in msg">
                        <div class="el-tree-node__content"  >
                            <span class="el-tree-node__expand-icon" :class="a.valid || a.next.length=='0'?'expanded':''" :style="'margin-left:'+(a.inx==1?'50':(50+a.inx*10))+'px'"
                           @click.stop="a.valid=!a.valid"
                           ></span>
                            <span class="el-tree-node__label"  @click.stop="colorclick(a)" >{{a.text}}</span>
                            <span :class="a.next.length==0?'org-mager-icon':'hide'"><Icon type="md-close-circle" /></span>
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
            this.$store.commit('arrss',a);
        }
      },
      
    },
    gensont:{
        name:'hahas',
        template:`
            <div>
                <div class="el-tree-node" v-for="item in msg"  @click.stop="clis(item)">
                        <div class="el-tree-node__content" :class="item.txt?'acisnt':''" style="padding-left: 0px;">
                        <span class="el-tree-node__expand-icon" :class="!item.valid || item.next.length=='0'?'expanded':''" :style="'margin-left:'+(item.inx==1?'60':(60+item.inx*15))+'px'"></span>
                        <span class="el-tree-node__label">{{item.text}}</span>
                        </div>
                        <div class="el-tree-node__children" v-if="!item.valid">
                            <hahas :msg="item.next"></hahas>
                        </div>
                </div>  
            </div>       
        `,
        props: ["msg"],
        methods:{
            clis(item){
                this.$store.commit('arrss2',item);
                this.msg.forEach(res=>{
                    if(res.inx==item.inx && res.text==item.text){
                        res.valid=!res.valid;
                        return;
                    }
                })
            }
        }

    }
  }
};
</script>
<style lang="less">
@import "../basicmessage/css/index.less";
</style>

