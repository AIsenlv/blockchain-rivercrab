<template>
  <div class="right-content">
    <div class="content">
      <form class="con-form con-form-right">
        <div class="item">
          <label class="lalbel">养殖基地：</label>
          <div class="el-form-item__content">
            <div class="el-input">
              <input class="el-input__inner">
            </div>
          </div>
        </div>
        <div class="item">
          <label class="lalbel">养殖产品：</label>
          <div class="el-form-item__content">
            <div class="el-input">
              <Select class="con-itme-sele" placeholder="请选择">
                <Option value>全部</Option>
                <Option value="0">水稻田鞋类</Option>
                <Option value="3">浦江蟹</Option>
                <Option value="1">大宗产品蟹</Option>
                <Option value="2">大河西</Option>
                <Option value="4">大闸江蟹</Option>
                <Option value="5">嘉兴湖大闸蟹</Option>
                <Option value="5">小虾蟹</Option>
              </Select>
            </div>
          </div>
        </div>
        <div class="item">
          <label class="lalbel win54">操作：</label>
          <div class="el-form-item__content">
            <div class="el-input">
              <Select class="con-itme-sele" placeholder="请选择">
                <Option value>全部</Option>
                <Option value="0">已执行</Option>
                <Option value="1">已终止</Option>
              </Select>
            </div>
          </div>
        </div>
        <div class="time item">
          <label class="lalbel">实际结束时间：</label>
          <div class="el-form-item__content">
            <div class="el-input" >
              <DatePicker
                format="yyyy-MM-dd HH:mm:ss"
                type="datetime"
                placeholder="选择日期"
                class="inblock"
                style="width:180px"
              ></DatePicker>
              <div class="line inblock">一</div>
              <DatePicker
                format="yyyy-MM-dd HH:mm:ss"
                type="datetime"
                placeholder="选择日期"
                class="inblock"
                style="width:180px"
              ></DatePicker>
            </div>
          </div>
        </div>
        <div  class="el-form-item last-item item positions pisntsh">
          <div class="el-form-item__content">
            <button class="btn-add add-button" style="width:96px">
                新增
             </button>
            <button  class="search btn-submit">
                查询
            </button>

          </div>
        </div>
      </form>
      <Table class="tables" border :columns="columns1" :data="data1"></Table>
      <div class="page">
        <div class="left">共<span>100</span>条</div>
        <Page :total="100" prev-text="上一页" next-text="下一页" show-elevator></Page>
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
          title: "操作",
          key: "name"
        },
        {
          title: "投入品",
          key: "age"
        },
        {
          title: "使用量",
          key: "names"
        },
        {
          title: "捕捞量（只）",
          key: "son"
        },
        {
          title: "养殖基地",
          key: "sta"
        },
        {
          title: "养殖产品",
          key: "end"
        },
        {
          title: "生育期阶段",
          key: "ensd"
        },
        {
          title: "操作人",
          key: "ensfd"
        },
        {
          title: "操作时间",
          key: "ensfdt",
          width:175
        },
       
        {
          title: "操作",
          width: 200,
          key: "",
          render: (h, params) => {
            if (params.row.type == 3) {
              return h("div", [
                h("i", {
                  class: "icons icons1",
                  attrs: {
                    title: "查看"
                  }
                }),
                h("i", {
                  class: "icons icons2",
                  attrs: {
                    title: "终止"
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
                // h("i", {
                //   class: "icons icons5",
                //   attrs: {
                //     title: "执行"
                //   }
                // })
              ]);
            }
          }
        }
      ],
      data1: [
        {
          name: "投放饵料",
          age: '黄豆',
          names: "10 KG",
          son: "10",
          sta: "大闸蟹养殖基地01号",
          end: "小虾蟹",
          type: "1",
          ensd:"产中阶段",
          ensfd:"admin",
          ensfdt:"2017-12-26 10:43:52"
        },
        {
          name: "投放饵料",
          age: '黄豆',
          names: "10 KG",
          son: "10",
          sta: "大闸蟹养殖基地01号",
          end: "小虾蟹",
          type: "1",
          ensd:"产中阶段",
          ensfd:"admin",
          ensfdt:"2017-12-26 10:43:52"
        },
        {
          name: "投放饵料",
          age: '黄豆',
          names: "10 KG",
          son: "10",
          sta: "大闸蟹养殖基地01号",
          end: "小虾蟹",
          type: "1",
          ensd:"产中阶段",
          ensfd:"admin",
          ensfdt:"2017-12-26 10:43:52"
        },
        {
          name: "投放饵料",
          age: '黄豆',
          names: "10 KG",
          son: "10",
          sta: "大闸蟹养殖基地01号",
          end: "小虾蟹",
          type: "1",
          ensd:"产中阶段",
          ensfd:"admin",
          ensfdt:"2017-12-26 10:43:52"
        },
        {
          name: "投放饵料",
          age: '黄豆',
          names: "10 KG",
          son: "10",
          sta: "大闸蟹养殖基地01号",
          end: "小虾蟹",
          type: "1",
          ensd:"产中阶段",
          ensfd:"admin",
          ensfdt:"2017-12-26 10:43:52"
        },
        {
          name: "投放饵料",
          age: '黄豆',
          names: "10 KG",
          son: "10",
          sta: "大闸蟹养殖基地01号",
          end: "小虾蟹",
          type: "1",
          ensd:"产中阶段",
          ensfd:"admin",
          ensfdt:"2017-12-26 10:43:52"
        },
        {
          name: "投放饵料",
          age: '黄豆',
          names: "10 KG",
          son: "10",
          sta: "大闸蟹养殖基地01号",
          end: "小虾蟹",
          type: "1",
          ensd:"产中阶段",
          ensfd:"admin",
          ensfdt:"2017-12-26 10:43:52"
        },
        {
          name: "投放饵料",
          age: '黄豆',
          names: "10 KG",
          son: "10",
          sta: "大闸蟹养殖基地01号",
          end: "小虾蟹",
          type: "1",
          ensd:"产中阶段",
          ensfd:"admin",
          ensfdt:"2017-12-26 10:43:52"
        },
        {
          name: "投放饵料",
          age: '黄豆',
          names: "10 KG",
          son: "10",
          sta: "大闸蟹养殖基地01号",
          end: "小虾蟹",
          type: "1",
          ensd:"产中阶段",
          ensfd:"admin",
          ensfdt:"2017-12-26 10:43:52"
        },
        {
          name: "投放饵料",
          age: '黄豆',
          names: "10 KG",
          son: "10",
          sta: "大闸蟹养殖基地01号",
          end: "小虾蟹",
          type: "1",
          ensd:"产中阶段",
          ensfd:"admin",
          ensfdt:"2017-12-26 10:43:52"
        },
        
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.right-content .content .con-form .time {
  min-width: 480px;
  label {
    width: 110px !important;
  }
}
</style>

