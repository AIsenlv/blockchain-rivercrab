<template>
  <div class="right-content">
    <div class="content">
      <form class="con-form">
        <div class="item">
          <label class="lalbel">产品名称：</label>
          <div class="el-form-item__content">
            <div class="el-input">
              <input class="el-input__inner">
            </div>
          </div>
        </div>
         <div class="item">
          <label class="lalbel">产品分类：</label>
          <div class="el-form-item__content">
            <div class="el-input">
              <Select class="con-itme-sele" placeholder="请选择">
                <Option value>全部</Option>
                <Option value="0">湖里蟹</Option>
                <Option value="3">浦江蟹</Option>
                <Option value="1">大宗产品蟹</Option>
                <Option value="4">大闸江蟹</Option>
                <Option value="5">嘉兴湖大闸蟹</Option>
                <Option value="6">小虾蟹</Option>
              </Select>
            </div>
          </div>
        </div>
        
        <div  class="el-form-item last-item item">
          <div class="el-form-item__content">
            <button  class="search btn-submit">
                <Icon type="ios-search"/>&nbsp;&nbsp;查询
            </button>
            <button  class="btn-add add-button win96">
              <Icon type="md-add"/>&nbsp;&nbsp;新增产品
            </button>
          </div>
        </div>
      </form>
      <Table class="tables" border :columns="columns1" :data="data1"></Table>
      <div class="page">
        <div class="left">共<span>20</span>条</div>
        <Page :total="20" prev-text="上一页" next-text="下一页" show-elevator></Page>
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
          title: "产品编号",
          key: "date",
          
        },
        {
          title: "产品名称",
          key: "age"
        },
        {
          title: "产品分类",
          key: "names",
          width:120
        },
        {
          title: "状态",
          key: "name",
          render:(h,parmas)=>{
               if (parmas.row.name == "1") {
                    return h(
                        "div",
                        {
                        style: {
                            color: "#48b400"
                        }
                        },
                        "启用"
                    );
                } else if(parmas.row.name=="100") {
                    return h(
                        "div",
                        {
                        style: {
                            color: "#e94343"
                        }
                        },
                        "停用"
                    );
                }else{
                     return h(
                        "div",
                        {
                        style: {
                            color: "#cfe2ff"
                        }
                        },
                        "未启用"
                    );
                }
          }
        },
        {
            title:"证书是否过有效期",
            key:'type',
             render: (h, params) => {
            if (params.row.type == 1) {
              return h(
                "div",
                {
                  style: {
                    color: "#48b400"
                  }
                },
                "是"
              );
            } else {
              return h(
                "div",
                {
                  style: {
                    color: "#e94343"
                  }
                },
                "否"
              );
            }
          }
        },
        {
          title: "操作",
          key: "",
          render: (h, params) => {
              if(params.row.type==1){
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
                ]);
              }else if(params.row.type==2){
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
                    class: "icons icons7",
                    attrs: {
                        title: "启用"
                    }
                    }),
                ]);
              }else{
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
                    class: "icons icons2",
                    attrs: {
                        title: "停用"
                    }
                    }),
                ]);
              }
              
           
          }
        }
      ],
      data1: [
        {
          name: "100",
          age: '阳澄湖大闸蟹',
          date: "465456454545",
          names: "湖里蟹",
          son: "浦江蟹",
          type:'1',
          diz:'深圳湾生态园11栋b座11楼'
        },
        {
          name: "100",
          age: '阳澄湖大闸蟹',
          date: "465456454545",
          names: "湖里蟹",
          son: "浦江蟹",
          type:'2',
          diz:'深圳湾生态园11栋b座11楼'
        },
        {
          name: "1",
          age: '阳澄湖大闸蟹',
          date: "465456454545",
          names: "湖里蟹",
          son: "浦江蟹",
          type:'1',
          diz:'深圳湾生态园11栋b座11楼'
        },
        {
          name: "100",
          age: '阳澄湖大闸蟹',
          date: "465456454545",
          names: "湖里蟹",
          son: "浦江蟹",
          type:'2',
          diz:'深圳湾生态园11栋b座11楼'
        },
        {
          name: "1000",
          age: '阳澄湖大闸蟹',
          date: "465456454545",
          names: "湖里蟹",
          son: "浦江蟹",
          type:'1',
          diz:'深圳湾生态园11栋b座11楼'
        },
        {
          name: "100",
          age: '阳澄湖大闸蟹',
          date: "465456454545",
          names: "湖里蟹",
          son: "浦江蟹",
          type:'10',
          diz:'深圳湾生态园11栋b座11楼'
        },
        {
          name: "100",
          age: '阳澄湖大闸蟹',
          date: "465456454545",
          names: "湖里蟹",
          son: "浦江蟹",
          type:'1',
          diz:'深圳湾生态园11栋b座11楼'
        },
        {
          name: "100",
          age: '阳澄湖大闸蟹',
          date: "465456454545",
          names: "湖里蟹",
          son: "浦江蟹",
          type:'2',
          diz:'深圳湾生态园11栋b座11楼'
        },
        {
          name: "100",
          age: '阳澄湖大闸蟹',
          date: "465456454545",
          names: "湖里蟹",
          son: "浦江蟹",
          type:'1',
          diz:'深圳湾生态园11栋b座11楼'
        },
        {
          name: "100",
          age: '阳澄湖大闸蟹',
          date: "465456454545",
          names: "湖里蟹",
          son: "浦江蟹",
          type:'1',
          diz:'深圳湾生态园11栋b座11楼'
        },
       
      ]
    };
  }
};
</script>
<style lang="less">
.right-content .content .con-form .time {
  min-width: 480px;
 
}
</style>

