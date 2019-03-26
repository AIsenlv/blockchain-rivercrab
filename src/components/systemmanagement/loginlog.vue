<template>
  <div class="right-content">
    <div class="content">
      <form class="con-form">
        <div class="item">
          <label class="lalbel win54" >账户：</label>
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
          title: "操作账户",
          key: "name",
        },
        {
          title: "操作人部门",
          key: "age",
        },
        {
            title:'操作日期',
            key:'namef'
        },
        {
            title:'操作ip',
            key:'ages'
        },
        {
            title:'操作地区',
            key:'diqu'
        },
      ],
      data1: [
        {
          name: "admins",
          age: '生产三部',
          namef: "2018-01-03 14:20:06",
          ages: '172.16.100.163',
          diqu:'福建省'
        },
         {
          name: "admins",
          age: '生产三部',
          namef: "2018-01-03 14:20:06",
          ages: '172.16.100.163',
          diqu:'福建省'
        }, {
          name: "admins",
          age: '生产三部',
          namef: "2018-01-03 14:20:06",
          ages: '172.16.100.163',
          diqu:'福建省'
        },

         {
          name: "admins",
          age: '生产三部',
          namef: "2018-01-03 14:20:06",
          ages: '172.16.100.163',
          diqu:'福建省'
        },
         {
          name: "admins",
          age: '生产三部',
          namef: "2018-01-03 14:20:06",
          ages: '172.16.100.163',
          diqu:'福建省'
        },
         {
          name: "admins",
          age: '生产三部',
          namef: "2018-01-03 14:20:06",
          ages: '172.16.100.163',
          diqu:'福建省'
        },
         {
          name: "admins",
          age: '生产三部',
          namef: "2018-01-03 14:20:06",
          ages: '172.16.100.163',
          diqu:'福建省'
        },
         {
          name: "admins",
          age: '生产三部',
          namef: "2018-01-03 14:20:06",
          ages: '172.16.100.163',
          diqu:'福建省'
        },
         {
          name: "admins",
          age: '生产三部',
          namef: "2018-01-03 14:20:06",
          ages: '172.16.100.163',
          diqu:'福建省'
        },
         {
          name: "admins",
          age: '生产三部',
          namef: "2018-01-03 14:20:06",
          ages: '172.16.100.163',
          diqu:'福建省'
        },
        
      ],
    };
  },
  methods:{
  
  }
};
</script>


