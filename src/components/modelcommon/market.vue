<template>
  <div class="right-content">
    <div class="content">
      <form class="con-form">
        <div class="item">
          <label class="lalbel win70">订单号：</label>
          <div class="el-form-item__content">
            <div class="el-input">
              <input class="el-input__inner">
            </div>
          </div>
        </div>
        <div class="time item">
          <label class="lalbel">销售时间：</label>
          <div class="el-form-item__content">
            <div class="el-input">
              <DatePicker
                format="yyyy-MM-dd"
                type="date"
                placeholder="选择日期"
                class="inblock"
                style="width: 180px"
              ></DatePicker>
              <div class="line inblock">一</div>
              <DatePicker
                format="yyyy-MM-dd"
                type="date"
                placeholder="选择日期"
                class="inblock"
                style="width: 180px"
              ></DatePicker>
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
        
        <div  class="el-form-item last-item item">
          <div class="el-form-item__content">
            <button  class="search btn-submit">
                <Icon type="ios-search"/>&nbsp;&nbsp;查询
            </button>
            <button  class="btn-add add-button win96">
              <Icon type="md-add"/>&nbsp;&nbsp;新增
            </button>
          </div>
        </div>
      </form>
      <Table class="tables" border :columns="columns1" :data="data1"></Table>
      <div class="page">
        <div class="left">共<span>10</span>条</div>
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
          title: "销售时间	",
          key: "date",
          width:200
        },
        {
          title: "客户名称",
          key: "age"
        },
        {
          title: "销售量（只）",
          key: "names",
          width:120
        },
        {
          title: "订单号",
          key: "name"
        },
        {
          title: "操作",
          width: 200,
          key: "",
          render: (h, params) => {
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
              ]);
           
          }
        }
      ],
      data1: [
        {
          name: "2017121802",
          age: '张明',
          date: "2017-12-04 13:47:03",
          names: "20",
          son: "浦江蟹",
        },
        {
          name: "2017122203",
          age: "丽丹",
          date: "2017-12-04 13:47:03",
          names: "30",
          son: "浦江蟹",
         
        },
        {
          name: "2017121802",
          age: '张明',
          date: "2017-12-04 13:47:03",
          names: "20",
          son: "浦江蟹",
        },
        {
          name: "2017121802",
          age: '张明',
          date: "2017-12-04 13:47:03",
          names: "20",
          son: "浦江蟹",
        },
        {
          name: "2017121802",
          age: '张明',
          date: "2017-12-04 13:47:03",
          names: "20",
          son: "浦江蟹",
        },
        {
          name: "2017121802",
          age: '张明',
          date: "2017-12-04 13:47:03",
          names: "20",
          son: "浦江蟹",
        },
        {
          name: "2017121802",
          age: '张明',
          date: "2017-12-04 13:47:03",
          names: "20",
          son: "浦江蟹",
        },
        {
          name: "2017121802",
          age: '张明',
          date: "2017-12-04 13:47:03",
          names: "20",
          son: "浦江蟹",
        },
        {
          name: "2017121802",
          age: '张明',
          date: "2017-12-04 13:47:03",
          names: "20",
          son: "浦江蟹",
        },
        {
          name: "2017121802",
          age: '张明',
          date: "2017-12-04 13:47:03",
          names: "20",
          son: "浦江蟹",
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

