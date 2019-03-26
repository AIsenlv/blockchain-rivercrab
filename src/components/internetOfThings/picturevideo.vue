<template>
  <div class="right-content">
    <div class="content">
      <form class="con-form">
        <div class="item">
          <label class="lalbel win54" >名称：</label>
          <div class="el-form-item__content">
            <div class="el-input">
              <input class="el-input__inner">
            </div>
          </div>
        </div>
        <div class="item">
          <label class="lalbel" >生产计划：</label>
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
          title: "名称",
          key: "date",
        },
        {
          title: "生产计划",
          key: "age"
        },
        {
          title: "上传时间",
          key: "names",
          width:200
        },
        {
          title: "上传类型",
          key: "types",
          render:(h,params)=>{
              if(params.row.types=="15"){
                  return h('span',{
                        style:{
                            color:'#20a0ff',
                            cursor:'pointer',
                            textDecoration: 'underline'
                        }
                    },'视频')
              }else{
                    return h('span',{
                        style:{
                            color:'#20a0ff',
                            cursor:'pointer',
                            textDecoration: 'underline'
                        }
                    },'图片('+params.row.types+')')
              }
          }
        },
         {
          title: "上传账号",
          key: "hsong"
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
          date: "2017121802",
          age: '张明',
          names: "2017-12-04 13:47:03",
          types: "20",
          hsong: "admin",
        },
        {
          date: "2017121802",
          age: '张明',
          names: "2017-12-04 13:47:03",
          types: "20",
          hsong: "admin",
        },
        {
          date: "2017121802",
          age: '张明',
          names: "2017-12-04 13:47:03",
          types: "20",
          hsong: "admin",
        },
        {
          date: "2017121802",
          age: '张明',
          names: "2017-12-04 13:47:03",
          types: "15",
          hsong: "admin",
        },
        {
          date: "2017121802",
          age: '张明',
          names: "2017-12-04 13:47:03",
          types: "20",
          hsong: "admin",
        },
        {
          date: "2017121802",
          age: '张明',
          names: "2017-12-04 13:47:03",
          types: "15",
          hsong: "admin",
        },
        {
          date: "2017121802",
          age: '张明',
          names: "2017-12-04 13:47:03",
          types: "20",
          hsong: "admin",
        },
        {
          date: "2017121802",
          age: '张明',
          names: "2017-12-04 13:47:03",
          types: "156",
          hsong: "admin",
        },
        {
          date: "2017121802",
          age: '张明',
          names: "2017-12-04 13:47:03",
          types: "20",
          hsong: "admin",
        },
        {
          date: "2017121802",
          age: '张明',
          names: "2017-12-04 13:47:03",
          types: "20",
          hsong: "admin",
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

