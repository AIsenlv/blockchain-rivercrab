<template>
  <div class="right-content">
    <div class="content">
      <form class="con-form">
        <div class="item autowin">
          <label class="lalbel" style="width:108px">打印溯源码量：</label>
          <div class="el-form-item__content">
            <div class="el-input win90">
              <input class="el-input__inner">
            </div>
             <div class="line inblock">一</div>
            <div class="el-input win90">
              <input class="el-input__inner">
            </div>
          </div>
          
        </div>
       
        
        <div class="time item">
          <label class="lalbel">计划开始时间：</label>
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
        <div  class="el-form-item last-item item">
          <div class="el-form-item__content">
            <button  class="search btn-submit">
                <Icon type="ios-search"/>&nbsp;&nbsp;查询
            </button>
            <button  class="btn-add add-button win96" >
              <Icon type="md-add"/>&nbsp;&nbsp;新增打印
            </button>
          </div>
        </div>
      </form>
      <Table class="tables" border :columns="columns1" :data="data1"></Table>
      <div class="page">
        <div class="left">共<span>2</span>条</div>
        <Page :total="2" prev-text="上一页" next-text="下一页" show-elevator></Page>
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
          title: "打印溯源码量",
          key: "name",
        },
        {
          title: "打印时间",
          key: "age",
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
          name: "3",
          age: '2017-12-27 14:35:54',
        },
        {
          name: "32",
          age: '2017-12-27 14:35:54',
        },
        {
          name: "3",
          age: '2017-12-27 14:35:54',
        },
        {
          name: "4",
          age: '2017-12-27 14:35:54',
        },
        {
          name: "23",
          age: '2017-12-27 14:35:54',
        },
        {
          name: "3",
          age: '2017-12-27 14:35:54',
        },
        {
          name: "43",
          age: '2017-12-27 14:35:54',
        },
        {
          name: "23",
          age: '2017-12-27 14:35:54',
        },
        {
          name: "22",
          age: '2017-12-27 14:35:54',
        },
        {
          name: "44",
          age: '2017-12-27 14:35:54',
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

