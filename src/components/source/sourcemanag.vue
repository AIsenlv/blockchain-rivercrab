<template>
  <div class="right-content">
    <div class="content">
      <form class="con-form con-form-right">
        <div class="item">
          <label class="lalbel win70">溯源码：</label>
          <div class="el-form-item__content">
            <div class="el-input">
              <input class="el-input__inner">
            </div>
          </div>
        </div>
        <div class="item">
          <label class="lalbel">是否激活：</label>
          <div class="el-form-item__content">
            <div class="el-input">
              <Select class="con-itme-sele" placeholder="请选择">
                <Option value>全部</Option>
                <Option value="0">未激活</Option>
                <Option value="3">已激活</Option>
              </Select>
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
        <div class="item">
          <label class="lalbel win54">状态：</label>
          <div class="el-form-item__content">
            <div class="el-input">
              <Select class="con-itme-sele" placeholder="请选择">
                <Option value>全部</Option>
                <Option value="0">使用</Option>
                <Option value="1">作废</Option>
              </Select>
            </div>
          </div>
        </div>
        <div class="item">
          <label class="lalbel win54">产品：</label>
          <div class="el-form-item__content">
            <div class="el-input">
              <input class="el-input__inner">
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
        <div class="left">共<span>50</span>条</div>
        <Page :total="50" prev-text="上一页" next-text="下一页" show-elevator></Page>
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
          title: "溯源码",
          key: "name",
          render:(h,params)=>{
              return h('span',{
                  class:'linst'
              },params.row.name)
          }
        },
        {
          title: "是否激活",
          key: "age"
        },
        {
          title: "状态",
          key: "names"
        },
        {
          title: "激活时间",
          key: "son"
        },
        {
          title: "查询次数",
          key: "sta",
          render:(h,params)=>{
              return h('span',{
                  class:'linst'
              },params.row.sta)
          }
        },
        {
          title: "产品",
          key: "end"
        },
        {
            title:"生产计划",
            key:'jih'
        },
       
        {
          title: "操作",
          width: 200,
          key: "",
          render: (h, params) => {
              return h("div", [
                h("i", {
                  class: "icons icons6",
                  attrs: {
                    title: "维护状态"
                  }
                })
              ]);
          }
        }
      ],
      data1: [
        {
          name: "2017121802",
          age: '已激活',
          date: "使用",
          jih: "稻田蟹生产计划",
          names: "2017-12-12 16:20:00",
          son: "浦江蟹",
          sta: "20",
          end: "水稻田蟹",
          type: "1"
        },
        {
          name: "2017121802",
          age: '已激活',
          date: "使用",
          jih: "稻田蟹生产计划",
          names: "2017-12-12 16:20:00",
          son: "浦江蟹",
          sta: "20",
          end: "水稻田蟹",
          type: "1"
        },
        {
          name: "2017121802",
          age: '已激活',
          date: "使用",
          jih: "稻田蟹生产计划",
          names: "2017-12-12 16:20:00",
          son: "浦江蟹",
          sta: "20",
          end: "水稻田蟹",
          type: "1"
        },
        {
          name: "2017121802",
          age: '已激活',
          date: "使用",
          jih: "稻田蟹生产计划",
          names: "2017-12-12 16:20:00",
          son: "浦江蟹",
          sta: "20",
          end: "水稻田蟹",
          type: "1"
        },
        {
          name: "2017121802",
          age: '已激活',
          date: "使用",
          jih: "稻田蟹生产计划",
          names: "2017-12-12 16:20:00",
          son: "浦江蟹",
          sta: "20",
          end: "水稻田蟹",
          type: "1"
        },
        {
          name: "2017121802",
          age: '已激活',
          date: "使用",
          jih: "稻田蟹生产计划",
          names: "2017-12-12 16:20:00",
          son: "浦江蟹",
          sta: "20",
          end: "水稻田蟹",
          type: "1"
        },
        {
          name: "2017121802",
          age: '已激活',
          date: "使用",
          jih: "稻田蟹生产计划",
          names: "2017-12-12 16:20:00",
          son: "浦江蟹",
          sta: "20",
          end: "水稻田蟹",
          type: "1"
        },
        {
          name: "2017121802",
          age: '已激活',
          date: "使用",
          jih: "稻田蟹生产计划",
          names: "2017-12-12 16:20:00",
          son: "浦江蟹",
          sta: "20",
          end: "水稻田蟹",
          type: "1"
        },
        {
          name: "2017121802",
          age: '已激活',
          date: "使用",
          jih: "稻田蟹生产计划",
          names: "2017-12-12 16:20:00",
          son: "浦江蟹",
          sta: "20",
          end: "水稻田蟹",
          type: "1"
        },
        {
          name: "2017121802",
          age: '已激活',
          date: "使用",
          jih: "稻田蟹生产计划",
          names: "2017-12-12 16:20:00",
          son: "浦江蟹",
          sta: "20",
          end: "水稻田蟹",
          type: "1"
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

