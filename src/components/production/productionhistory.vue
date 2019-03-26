<template>
  <div class="right-content">
    <div class="content">
      <form class="con-form con-form-right">
        <div class="item">
          <label class="lalbel">生产计划：</label>
          <div class="el-form-item__content">
            <div class="el-input">
              <input class="el-input__inner">
            </div>
          </div>
        </div>
        <div class="item">
          <label class="lalbel">产品名称：</label>
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
          <label class="lalbel win54" >状态：</label>
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
            <div class="el-input">
              <DatePicker
                format="yyyy-MM-dd"
                type="date"
                placeholder="选择日期"
                class="inblock"
                
              ></DatePicker>
              <div class="line inblock">一</div>
              <DatePicker
                format="yyyy-MM-dd"
                type="date"
                placeholder="选择日期"
                class="inblock"
                
              ></DatePicker>
            </div>
          </div>
        </div>
        <div  class="el-form-item last-item item positions">
          <div class="el-form-item__content">
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
          title: "生产计划编号	",
          key: "name"
        },
        {
          title: "生产计划",
          key: "age"
        },
        {
          title: "养殖基地",
          key: "names"
        },
        {
          title: "产品名称",
          key: "son"
        },
        {
          title: "开始时间",
          key: "sta"
        },
        {
          title: "结束时间",
          key: "end"
        },
        {
          title: "状态",
          key: "type",
          render: (h, params) => {
            if (params.row.type == 1) {
              return h(
                "div",
                {
                  style: {
                    color: "#fff"
                  }
                },
                "已执行"
              );
            } else {
              return h(
                "div",
                {
                  style: {
                     color: "#77797c"
                  }
                },
                "已终止"
              );
            }
          }
        },
        {
          title: "操作",
          width: 200,
          key: "",
          render: (h, params) => {
            if (params.row.type == 1) {
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
                h("i", {
                  class: "icons icons5",
                  attrs: {
                    title: "执行"
                  }
                })
              ]);
            }
          }
        }
      ],
      data1: [
        {
          name: "2017121802",
          age: 33,
          date: "2016-10-03",
          names: "大闸蟹养殖基地01号",
          son: "浦江蟹",
          sta: "2017-12-12",
          end: "2017-12-20",
          type: "1"
        },
        {
          name: "2017122203",
          age: "2018年河蟹养殖计划",
          date: "2016-10-03",
          names: "大闸蟹养殖基地01号",
          son: "浦江蟹",
          sta: "2017-12-12",
          end: "2017-12-20",
          type: "2"
        },
        {
          name: "2017122203",
          age: "2018年河蟹养殖计划",
          date: "2016-10-03",
          names: "大闸蟹养殖基地01号",
          son: "浦江蟹",
          sta: "2017-12-12",
          end: "2017-12-20",
          type: "2"
        },
        {
          name: "2017122203",
          age: "2018年河蟹养殖计划",
          date: "2016-10-03",
          names: "大闸蟹养殖基地01号",
          son: "浦江蟹",
          sta: "2017-12-12",
          end: "2017-12-20",
          type: "2"
        },
        {
          name: "2017122203",
          age: "2018年河蟹养殖计划",
          date: "2016-10-03",
          names: "大闸蟹养殖基地01号",
          son: "浦江蟹",
          sta: "2017-12-12",
          end: "2017-12-20",
          type: "2"
        },
        {
          name: "2017122203",
          age: "2018年河蟹养殖计划",
          date: "2016-10-03",
          names: "大闸蟹养殖基地01号",
          son: "浦江蟹",
          sta: "2017-12-12",
          end: "2017-12-20",
          type: "2"
        },
        {
          name: "2017122203",
          age: "2018年河蟹养殖计划",
          date: "2016-10-03",
          names: "大闸蟹养殖基地01号",
          son: "浦江蟹",
          sta: "2017-12-12",
          end: "2017-12-20",
          type: "2"
        },
        {
          name: "2017122203",
          age: "2018年河蟹养殖计划",
          date: "2016-10-03",
          names: "大闸蟹养殖基地01号",
          son: "浦江蟹",
          sta: "2017-12-12",
          end: "2017-12-20",
          type: "2"
        },
        {
          name: "2017122203",
          age: "2018年河蟹养殖计划",
          date: "2016-10-03",
          names: "大闸蟹养殖基地01号",
          son: "浦江蟹",
          sta: "2017-12-12",
          end: "2017-12-20",
          type: "2"
        }
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

