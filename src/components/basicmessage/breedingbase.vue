<template>
  <div class="right-content">
    <div class="content">
      <form class="con-form">
        <div class="item">
          <label class="lalbel">养殖基地：</label>
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
          title: "基地编号",
          key: "date",
          
        },
        {
          title: "养殖基地",
          key: "age"
        },
        {
          title: "负责人",
          key: "names",
          width:120
        },
        {
          title: "基地总面积（单位：亩）",
          key: "name",
          width:200
        },
        {
          title: "基地地址",
          key: "diz",
         
        },
        {
            title:"证书是否过有效期",
            key:'type',
             render: (h, params) => {
            if (params.row.type == 1) {
              return h(
                "div",
                {
                  style: {
                    color: "#48b400"
                  }
                },
                "是"
              );
            } else {
              return h(
                "div",
                {
                  style: {
                    color: "#e94343"
                  }
                },
                "否"
              );
            }
          }
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
                h('img',{
                    class: "icons",
                  attrs: {
                    src:require('../../assets/dayin.png'),
                    title: "查看"
                  },
                  
                }),
              ]);
           
          }
        }
      ],
      data1: [
        {
          name: "100",
          age: '稻田养殖区',
          date: "465456454545",
          names: "张明",
          son: "浦江蟹",
          type:'1',
          diz:'深圳湾生态园11栋b座11楼'
        },
        {
          name: "100",
          age: '稻田养殖区',
          date: "465456454545",
          names: "张明",
          son: "浦江蟹",
          type:'1',
          diz:'深圳湾生态园11栋b座11楼'
        },
        {
          name: "100",
          age: '稻田养殖区',
          date: "465456454545",
          names: "张明",
          son: "浦江蟹",
          type:'1',
          diz:'深圳湾生态园11栋b座11楼'
        },
        {
          name: "100",
          age: '稻田养殖区',
          date: "465456454545",
          names: "张明",
          son: "浦江蟹",
          type:'2',
          diz:'深圳湾生态园11栋b座11楼'
        },
        {
          name: "100",
          age: '稻田养殖区',
          date: "465456454545",
          names: "张明",
          son: "浦江蟹",
          type:'1',
          diz:'深圳湾生态园11栋b座11楼'
        },
        {
          name: "100",
          age: '稻田养殖区',
          date: "465456454545",
          names: "张明",
          son: "浦江蟹",
          type:'1',
          diz:'深圳湾生态园11栋b座11楼'
        },
        {
          name: "100",
          age: '稻田养殖区',
          date: "465456454545",
          names: "张明",
          son: "浦江蟹",
          type:'1',
          diz:'深圳湾生态园11栋b座11楼'
        },
        {
          name: "100",
          age: '稻田养殖区',
          date: "465456454545",
          names: "张明",
          son: "浦江蟹",
          type:'2',
          diz:'深圳湾生态园11栋b座11楼'
        },
        {
          name: "100",
          age: '稻田养殖区',
          date: "465456454545",
          names: "张明",
          son: "浦江蟹",
          type:'1',
          diz:'深圳湾生态园11栋b座11楼'
        },
        {
          name: "100",
          age: '稻田养殖区',
          date: "465456454545",
          names: "张明",
          son: "浦江蟹",
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

