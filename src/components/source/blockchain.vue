<template>
  <div class="right-content">
    <div class="content">
      <form class="con-form">
        <div class="item">
          <label class="lalbel">交易码ID：</label>
          <div class="el-form-item__content">
            <div class="el-input">
              <input class="el-input__inner">
            </div>
          </div>
        </div>
        <div class="item">
          <label class="lalbel win70">溯源码：</label>
          <div class="el-form-item__content">
              <div class="el-form-item__content">
                <div class="el-input">
                  <input class="el-input__inner">
                </div>
              </div>
          </div>
        </div>
        <div class="item">
          <label class="lalbel">生产计划：</label>
          <div class="el-form-item__content">
            <div class="el-input">
              <input class="el-input__inner">
            </div>
          </div>
        </div>
        <div  class="el-form-item last-item item">
          <div class="el-form-item__content">
            <button  class="search btn-submit">
                查询
            </button>
            <button  class="btn-add add-button win96">
              新增
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
          title: "合约ID",
          key: "date",
        },
        {
          title: "节点类型",
          key: "age"
        },
        {
          title: "溯源码",
          key: "names",
          width:120
        },
        {
          title: "产品",
          key: "name"
        },
        {
          title: "生产计划",
          key: "diz"
        },
        {
          title:'上链时间',
          key:'tims'
        },
        {
          title: "操作",
          key: "",
          render: (h, params) => {
              return h("div", [
                h("i", {
                  class: "icons icons1",
                  attrs: {
                    title: "查看"
                  }
                }),
              ]);
           
          }
        }
      ],
      data1: [
        {
          name: "大龙虾",
          age: '物联网',
          date: "465456454545",
          names: "4141441",
          son: "浦江蟹",
          tims:'2019-03-23 11:55',
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

