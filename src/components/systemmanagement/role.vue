<template>
  <div class="right-content">
    <div class="content">
      <form class="con-form">
        <div class="item">
          <label class="lalbel win70">角色：</label>
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
            <button  class="btn-add add-button win96" >
              新增角色
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
          title: "角色",
          key: "name",
        },
        {
          title: "创建时间",
          key: "age",
        },
       
        {
          title: "操作",
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
          name: "张哈",
          age: '2019-03-13 15:23:01',
        },
        {
          name: "张哈",
          age: '2019-03-13 15:23:01',
        },
        {
          name: "张哈",
          age: '2019-03-13 15:23:01',
        },
        {
          name: "张哈",
          age: '2019-03-13 15:23:01',
        },
        {
          name: "张哈",
          age: '2019-03-13 15:23:01',
        },
        {
          name: "张哈",
          age: '2019-03-13 15:23:01',
        },
        {
          name: "张哈",
          age: '2019-03-13 15:23:01',
        },
        {
          name: "张哈",
          age: '2019-03-13 15:23:01',
        },
        {
          name: "张哈",
          age: '2019-03-13 15:23:01',
        },
        {
          name: "张哈",
          age: '2019-03-13 15:23:01',
        },
      ],
    };
  },
  methods:{
  
  }
};
</script>


