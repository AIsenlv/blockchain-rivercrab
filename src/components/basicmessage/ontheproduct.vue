<template>
  <div class="right-content">
    <div class="content">
      <form class="con-form">
        
         <div class="item">
          <label class="lalbel win96">投入品分类：</label>
          <div class="el-form-item__content">
            <div class="el-input">
              <Select class="con-itme-sele" placeholder="请选择">
                <Option value>全部</Option>
                <Option value="0">饲料>植物性饲料</Option>
                <Option value="3">饲料>动物性饲料</Option>
                <Option value="1">蟹类饲料</Option>
                <Option value="4">饲料</Option>
              </Select>
            </div>
          </div>
        </div>
        <div class="item">
          <label class="lalbel" style="width:58px">产品：</label>
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
            <button  class="btn-add add-button win120">
              <Icon type="md-add"/>&nbsp;&nbsp;新增投入品
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
          title: "投入品分类",
          key: "date",
          
        },
        {
          title: "名称",
          key: "age"
        },
        {
          title: "库存量（kg）",
          key: "names",
        },
        {
          title: "操作",
          key: "",
          width:340,
          render: (h, params) => {
              if(params.row.type==1){
                  return h("div", [
                    h("i", {
                    class: "icons icons3",
                    attrs: {
                        title: "修改"
                    }
                    }),
                    h("i", {
                    class: "icons icons1",
                    attrs: {
                        title: "查看"
                    }
                    }),
                    h("i", {
                    class: "icons icons2",
                    attrs: {
                        title: "停用"
                    }
                    }),
                    h("span", {
                        class:'cursor',
                        style:{
                            marginLeft:'5px'
                        }
                    },'采购记录(1条) 使用的记录(1条)'),
                ]);
              }
          }
        }
      ],
      data1: [
        {
          name: "100",
          age: '玉米',
          date: "饲料>植物性饲料",
          names: "10",
          type:'1',
          diz:'深圳湾生态园11栋b座11楼'
        },
        {
          name: "100",
          age: '玉米',
          date: "饲料>植物性饲料",
          names: "10",
          type:'1',
          diz:'深圳湾生态园11栋b座11楼'
        },
        {
          name: "100",
          age: '玉米',
          date: "饲料>植物性饲料",
          names: "10",
          type:'1',
          diz:'深圳湾生态园11栋b座11楼'
        },
        {
          name: "100",
          age: '玉米',
          date: "饲料>植物性饲料",
          names: "10",
          type:'1',
          diz:'深圳湾生态园11栋b座11楼'
        },
        {
          name: "100",
          age: '玉米',
          date: "饲料>植物性饲料",
          names: "10",
          type:'1',
          diz:'深圳湾生态园11栋b座11楼'
        },
        {
          name: "100",
          age: '玉米',
          date: "饲料>植物性饲料",
          names: "10",
          type:'1',
          diz:'深圳湾生态园11栋b座11楼'
        },
        {
          name: "100",
          age: '玉米',
          date: "饲料>植物性饲料",
          names: "10",
          type:'1',
          diz:'深圳湾生态园11栋b座11楼'
        },
        {
          name: "100",
          age: '玉米',
          date: "饲料>植物性饲料",
          names: "10",
          type:'1',
          diz:'深圳湾生态园11栋b座11楼'
        },
        {
          name: "100",
          age: '玉米',
          date: "饲料>植物性饲料",
          names: "10",
          type:'1',
          diz:'深圳湾生态园11栋b座11楼'
        },
        {
          name: "100",
          age: '玉米',
          date: "饲料>植物性饲料",
          names: "10",
          type:'1',
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

