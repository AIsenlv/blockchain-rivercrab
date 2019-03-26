<template>
  <div class="right-content">
    <div class="content">
      <form class="con-form">
        <div class="item">
          <label class="lalbel">客户名称：</label>
          <div class="el-form-item__content">
            <div class="el-input">
              <input class="el-input__inner">
            </div>
          </div>
        </div>
        <div class="item">
          <label class="lalbel">所属区域：</label>
          <div class="el-form-item__content">
            <div class="el-input">
              <Select class="con-itme-sele" placeholder="请选择">
                <Option value>所属省份</Option>
                <Option value="0" v-for="item in maps" :key="item.id">{{item}}</Option>
               
              </Select>
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
        maps:["北京","天津","上海","重庆","河北","山西","辽宁","吉林","黑龙江","江苏","浙江","安徽","福建","江西","山东","河南","湖北","湖南","广东","海南","四川","贵州","云南","陕西","甘肃","青海","内蒙古","广西","西藏","宁夏","新疆维吾尔自治区","香港","澳门","台湾"],
      columns1: [
        {
          title: "客户编号",
          key: "date",
          width:200
        },
        {
          title: "客户名称",
          key: "age"
        },
        {
          title: "联系人",
          key: "names",
          width:120
        },
        {
          title: "所属区域",
          key: "name"
        },
        {
          title: "联系地址",
          key: "diz"
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
          name: "云南省",
          age: '张明',
          date: "465456454545",
          names: "张明",
          son: "浦江蟹",
          diz:'深圳湾生态园11栋b座11楼'
        },
        {
          name: "云南省",
          age: '张明',
          date: "465456454545",
          names: "张明",
          son: "浦江蟹",
          diz:'深圳湾生态园11栋b座11楼'
        },
        {
          name: "云南省",
          age: '张明',
          date: "465456454545",
          names: "张明",
          son: "浦江蟹",
          diz:'深圳湾生态园11栋b座11楼'
        },
        {
          name: "云南省",
          age: '张明',
          date: "465456454545",
          names: "张明",
          son: "浦江蟹",
          diz:'深圳湾生态园11栋b座11楼'
        },

        {
          name: "云南省",
          age: '张明',
          date: "465456454545",
          names: "张明",
          son: "浦江蟹",
          diz:'深圳湾生态园11栋b座11楼'
        },
        {
          name: "云南省",
          age: '张明',
          date: "465456454545",
          names: "张明",
          son: "浦江蟹",
          diz:'深圳湾生态园11栋b座11楼'
        },
        {
          name: "云南省",
          age: '张明',
          date: "465456454545",
          names: "张明",
          son: "浦江蟹",
          diz:'深圳湾生态园11栋b座11楼'
        },
        {
          name: "云南省",
          age: '张明',
          date: "465456454545",
          names: "张明",
          son: "浦江蟹",
          diz:'深圳湾生态园11栋b座11楼'
        },
        {
          name: "云南省",
          age: '张明',
          date: "465456454545",
          names: "张明",
          son: "浦江蟹",
          diz:'深圳湾生态园11栋b座11楼'
        },
        {
          name: "云南省",
          age: '张明',
          date: "465456454545",
          names: "张明",
          son: "浦江蟹",
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

