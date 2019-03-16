<template>
  <div class="right-content">
    <div class="content">
      <form class="con-form con-form-right">
        <div class="item">
          <label class="lalbel">订单号：</label>
          <div class="el-form-item__content">
            <div class="el-input">
              <input class="el-input__inner">
            </div>
          </div>
        </div>
        <div class="item">
          <label class="lalbel">订单渠道：</label>
          <div class="el-form-item__content">
            <div class="el-input">
              <Select class="con-itme-sele" placeholder="请选择">
                <Option value>全部</Option>
                <Option value="0">线上</Option>
                <Option value="1">线下</Option>
              </Select>
            </div>
          </div>
        </div>
        <div class="item">
          <label class="lalbel">客户名称：</label>
          <div class="el-form-item__content">
            <div class="el-input">
              <input class="el-input__inner">
            </div>
          </div>
        </div>
       <div class="item">
          <label class="lalbel" style="width:54px">操作：</label>
          <div class="el-form-item__content">
            <div class="el-input">
              <Select class="con-itme-sele" placeholder="请选择">
                <Option value>全部</Option>
                <Option value="0">待处理</Option>
                <Option value="1">已处理</Option>
              </Select>
            </div>
          </div>
        </div>
        <div class="time item">
          <label class="lalbel wids">订单时间：</label>
          <div class="el-form-item__content">
            <div class="el-input" >
              <DatePicker
                format="yyyy-MM-dd HH:mm:ss"
                type="datetime"
                placeholder="选择日期"
                class="inblock"
                style="width: 180px"
              ></DatePicker>
              <div class="line inblock">一</div>
              <DatePicker
                format="yyyy-MM-dd HH:mm:ss"
                type="datetime"
                placeholder="选择日期"
                class="inblock"
                style="width: 180px"
              ></DatePicker>
            </div>
          </div>
        </div>
         
        <div  class="el-form-item last-item item positions pisntsh">
          <div class="el-form-item__content">
            <button class="btn-add add-button" style="width:96px">
                <i class="ivu-icon ivu-icon-md-add"></i>&nbsp;&nbsp;新增
             </button>
            <button  class="search btn-submit">
                <Icon type="ios-search"/>&nbsp;&nbsp;查询
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
          key: "name",
        },
        {
          title: "投入品",
          key: "age",
        },
        {
          title: "使用量",
          key: "names"
        },
        {
          title: "捕捞量（只）",
          key: "son",
          width:120
        },
        {
          title: "养殖基地",
          key: "sta",
        },
        {
          title: "养殖产品",
          key: "end",
        },
        {
          title: "生育期阶段",
          key: "ensd",
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
          width: 140,
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
                // h("i", {
                //   class: "icons icons2",
                //   attrs: {
                //     title: "终止"
                //   }
                // })
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
          type: "3",
          ensd:"产中阶段",
          ensfd:"hujie",
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
          ensfd:"hujie",
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
          ensfd:"hujie",
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
          ensfd:"hujie",
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
          ensfd:"hujie",
          ensfdt:"2017-12-26 10:43:52"
        },
        {
          name: "投放饵料",
          age: '黄豆',
          names: "10 KG",
          son: "10",
          sta: "大闸蟹养殖基地01号",
          end: "小虾蟹",
          type: "3",
          ensd:"产中阶段",
          ensfd:"hujie",
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
          ensfd:"hujie",
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
          ensfd:"hujie",
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
          ensfd:"hujie",
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
          ensfd:"hujie",
          ensfdt:"2017-12-26 10:43:52"
        },
        
      ]
    };
  }
};
</script>
<style lang="less">
.right-content .content .con-form .time {
  min-width: 480px;
  label {
    width: 110px !important;
  }
}
</style>

