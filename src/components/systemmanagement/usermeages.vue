<template>
  <div class="right-content">
    <div class="content">
      <form class="con-form">
        <div class="item">
          <label class="lalbel win70">用户名：</label>
          <div class="el-form-item__content">
            <div class="el-input">
              <input class="el-input__inner">
            </div>
          </div>
        </div>
        <div class="item">
          <label class="lalbel">所属机构：</label>
          <div class="el-form-item__content" style="width:200px">
            <div class="el-input">
              <input
                class="el-input__inner cursor"
                style="width:83%"
                placeholder="请选择"
                v-model="arrs.text"
                @click="clicks"
                readonly="readonly"
              >
              
              <span class="inblock cursor" @click="qichu">清除</span>
            </div>
            <div data-v-74c21338 class="select-item" v-if="arrs.show">
              <div data-v-74c21338 class="select-box" >
   
                  <shaihlt :msg="dateArr"></shaihlt>
                  <!---->
               
              </div>
            </div>
          </div>
        </div>
        <div class="el-form-item last-item item"  >
          <div class="el-form-item__content" style="min-width:290px">
            <button class="search btn-submit">
              查询
            </button>
            <button class="btn-add add-button win96">
              新增
            </button>
          </div>
        </div>
      </form>
      <Table class="tables" border :columns="columns1" :data="data1"></Table>
      <div class="page">
        <div class="left">共
          <span>10</span>条
        </div>
        <Page :total="10" prev-text="上一页" next-text="下一页" show-elevator></Page>
        <!-- <span class="inblock">确定</span> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    
    return {
      
      columns1: [
        {
          title: "用户名",
          key: "name"
        },
        {
          title: "姓名",
          key: "age"
        },
        {
          title: "所属机构",
          key: "ads"
        },
        {
          title: "角色",
          key: "jus"
        },
        {
          title: "账户状态",
          key: "type",
          render: (h, params) => {
            if (params.row.type == 1) {
              return h(
                "div",
                {
                  style: {
                    color: "#48b400"
                  }
                },
                "启用"
              );
            } else {
              return h(
                "div",
                {
                  style: {
                    color: "#ff9600"
                  }
                },
                "未启用"
              );
            }
          }
        },
        {
          title: "操作",
          key: "",
          width: 280,
          render: (h, params) => {
            if (params.row.type == 2) {
              return h("div", [
                h("i", {
                  class: "icons icons3",
                  attrs: {
                    title: "修改"
                  }
                }),
                h("i", {
                  class: "icons icons4",
                  attrs: {
                    title: "删除"
                  }
                }),
                h("i", {
                  class: "icons icons1",
                  attrs: {
                    title: "查看"
                  }
                }),
                h("i", {
                  class: "icons icons7",
                  attrs: {
                    title: "启用"
                  }
                }),
                h("i", {
                  class: "icons icons8",
                  attrs: {
                    title: "重制密码"
                  }
                }),
                h("i", {
                  class: "icons icons9",
                  attrs: {
                    title: "分配角色"
                  }
                })
              ]);
            } else {
              return h("div", [
                h("i", {
                  class: "icons icons3",
                  attrs: {
                    title: "修改"
                  }
                }),

                h("i", {
                  class: "icons icons1",
                  attrs: {
                    title: "查看"
                  }
                }),
                h("i", {
                  class: "icons icons2",
                  attrs: {
                    title: "停用"
                  }
                }),
                h("i", {
                  class: "icons icons8",
                  attrs: {
                    title: "重制密码"
                  }
                }),
                h("i", {
                  class: "icons icons9",
                  attrs: {
                    title: "分配角色"
                  }
                })
              ]);
            }
          }
        }
      ],
      data1: [
        {
          name: "张哈",
          age: "曾真",
          ads: "中琛源",
          jus: "销售角色",
          type: "2"
        },
        {
          name: "张哈",
          age: "曾真",
          ads: "中琛源",
          jus: "销售角色",
          type: "1"
        },
        {
          name: "张哈",
          age: "曾真",
          ads: "中琛源",
          jus: "销售角色",
          type: "2"
        },
        {
          name: "张哈",
          age: "曾真",
          ads: "中琛源",
          jus: "销售角色",
          type: "2"
        },
        {
          name: "张哈",
          age: "曾真",
          ads: "中琛源",
          jus: "销售角色",
          type: "2"
        },
        {
          name: "张哈",
          age: "曾真",
          ads: "中琛源",
          jus: "销售角色",
          type: "2"
        },
        {
          name: "张哈",
          age: "曾真",
          ads: "中琛源",
          jus: "销售角色",
          type: "1"
        },
        {
          name: "张哈",
          age: "曾真",
          ads: "中琛源",
          jus: "销售角色",
          type: "2"
        },
        {
          name: "张哈",
          age: "曾真",
          ads: "中琛源",
          jus: "销售角色",
          type: "1"
        },
        {
          name: "张哈",
          age: "曾真",
          ads: "中琛源",
          jus: "销售角色",
          type: "2"
        }
      ],
      dateArr: [
        {
          text: "深圳水产养殖基地",
          valid: false,
          inx: 1,
          txt: false,
          texts:'水产养殖',
          parent:'',
          next: [
            {
              text: "生产部",
              texts:'水产养殖',
              valid: false,
              parent:'深圳水产养殖基地',
              inx: 2,
              next: [
                { text: "生产一部",texts:'水产养殖',parent:'生产部', valid: false, txt: false, inx: 3, next: [] },
                { text: "生产二部",texts:'水产养殖', parent:'生产部', valid: false, txt: false, inx: 3, next: [] },
              ]
            },
            {
              text: "销售部",
              valid: false,
              texts:'水产养殖',
              parent:'深圳水产养殖基地', 
              inx: 2,
              next: [
                { text: "销售一部", texts:'水产养殖',parent:'销售部', valid: false, txt: false, inx: 3, next: [] },
                
              ]
            },
            {
              text: "管理部",
              valid: false,
              texts:'水产养殖',
              inx: 2,
              next: [
                { text: "管理一部", texts:'水产养殖',valid: false, txt: false, inx: 3, next: [] },
                
              ]
            }
          ]
        }
      ],
    };
  },
   computed:{
    arrs(){
        let ass=this.$store.getters.arrs;
        ass.show= ass.show?true:false;
        return ass?ass:'';
    },
   },
  components:{
      shaihlt:{
          name:'sdh',
          template:`
                <div class="el-tree">
                       <div class="el-tree-node is-expanded" v-for="item in msg" >
                          <div class="el-tree-node__content" :style="'padding-left:'+(item.inx==1?'15':(15+item.inx*15))+'px'"  @click.stop.self="clicktext(item)">
                            <span class="el-tree-node__expand-icon icon-1" :class="item.valid || item.next.length=='0'?'icon-2':''" @click.stop.self="colorclick(item)"></span>
                            <span class="el-tree-node__label" @click.stop.self="clicktext(item)">{{item.text}}</span>
                          </div>
                          <div class="el-tree-node__children" v-if="item.valid">
                                  <sdh :msg="item.next"></sdh>
                          </div>
                       </div>   
                </div>
          `,
          props:['msg'],
          methods:{
            colorclick(a) {
              
              this.msg.forEach(item => {
                if (a.inx == item.inx && a.text == item.text) {
                  item.valid = !item.valid;
                  this.show=false;
                  return;
                }
              });
            },
            clicktext(a){
                a.show=false;
                this.$store.commit('arrss',a);
                this.show=false;
            }
          }
      }
  },
  methods: {
    clicks() {
       this.$store.commit('arrss',{show:true});
    },
    qichu(){
        this.$store.commit('arrss',{text:''});
    }
  }
};
</script>
<style lang="less" >
.right-content .content .con-form .time {
  min-width: 480px;
  
}
.el-form-item__content{
  position: relative;
}
.select-box{
    width: 100%;
    position: absolute;
    top: 40px;
    left: 0;
    z-index: 9;
        margin-top: 10px;
    background: #4f86eb;
    max-height: 200px;
    transition: height .3s;
    border: 1px solid #20a0ff;
    background: #192333!important;
    border-radius: 3px;
    overflow-x: hidden;
    overflow-y: auto;
}
.el-tree-node__content {
    position: relative;
}
.el-tree-node__content {
    line-height: 36px;
    height: 36px;
    cursor: pointer;
}
.el-tree-node__content {
    line-height: 38px;
    height: 38px;
    color: #cfe2ff;
    padding-left: 20px;
    &:hover{
            background-color: rgba(79, 134, 235, 0.2); 
        }
}

.el-tree-node__expand-icon {
    font-size: 16px;
    border: none;
    // background: url('../../assets/clickicon.png') no-repeat;
    position: relative;
    display: inline-block;
    vertical-align: middle;
    z-index: 1;
}
.el-tree-node__expand-icon.expanded {
    transform: rotate(90deg);
}
.el-tree-node__expand-icon.expanded {
    transform: rotate(0);
    background-position: -24px 0;
}

.el-tree-node__content>.el-tree-node__expand-icon {
    margin-right: 15px;
}

.el-tree-node__expand-icon, .el-tree-node__label, .el-tree-node__loading-icon {
    display: inline-block;
    vertical-align: middle;
}

.el-tree-node__content>.el-checkbox, .el-tree-node__content>.el-tree-node__expand-icon {
    margin-right: 8px;
    
}


</style>

