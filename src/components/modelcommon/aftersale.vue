<template>
  <div class="right-content">
    <div class="content">
      <form class="con-form">
        <div class="item">
          <label class="lalbel" style="width:65px">反馈人：</label>
          <div class="el-form-item__content">
            <div class="el-input">
              <input class="el-input__inner">
            </div>
          </div>
        </div>
        <div class="time item">
          <label class="lalbel" style="width:75px!important">提出时间：</label>
          <div class="el-form-item__content">
            <div class="el-input">
              <DatePicker
               format="yyyy-MM-dd HH:mm:ss"
                type="datetime"
                placeholder="选择日期"
                class="inblock"
                style="width:180px"
                
              ></DatePicker>
              <div class="line inblock">一</div>
              <DatePicker
                format="yyyy-MM-dd HH:mm:ss"
                type="datetime"
                placeholder="选择日期"
                class="inblock"
                style="width:180px"
                
              ></DatePicker>
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
        <div class="left">共<span>200</span>条</div>
        <Page :total="200" prev-text="上一页" next-text="下一页" show-elevator></Page>
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
          title: "反馈人",
          key: "name",
        },
        {
          title: "联系电话",
          key: "age"
        },
        {
          title: "联系地址",
          key: "names",
          width:236
        },
        {
          title: "反馈问题",
          key: "fank",
          width:236
        },
        {
            title:'订单号',
            key:'ddan'
        },
        {
            title:'提出时间',
            key:"keys"
        },
        {
            title:'处理结果',
            key:"son"
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
          name: "张明",
          age: '18124005968',
          date: "2017-12-04 13:47:03",
          names: "深圳湾生态园11栋b座11楼",
          fank: "螃蟹已过期，请给我换个新的",
          ddan: '31231254323',
          keys:'2017-12-04 13:47:03',
          son: "更换",
        },
        {
          name: "张明",
          age: '18124005968',
          date: "2017-12-04 13:47:03",
          names: "深圳湾生态园11栋b座11楼",
          fank: "螃蟹已过期，请给我换个新的",
          ddan: '31231254323',
          keys:'2017-12-04 13:47:03',
          son: "更换",
        },
        {
          name: "张明",
          age: '18124005968',
          date: "2017-12-04 13:47:03",
          names: "深圳湾生态园11栋b座11楼",
          fank: "螃蟹已过期，请给我换个新的",
          ddan: '31231254323',
          keys:'2017-12-04 13:47:03',
          son: "更换",
        },
        {
          name: "张明",
          age: '18124005968',
          date: "2017-12-04 13:47:03",
          names: "深圳湾生态园11栋b座11楼",
          fank: "螃蟹已过期，请给我换个新的",
          ddan: '31231254323',
          keys:'2017-12-04 13:47:03',
          son: "更换",
        },
        {
          name: "张明",
          age: '18124005968',
          date: "2017-12-04 13:47:03",
          names: "深圳湾生态园11栋b座11楼",
          fank: "螃蟹已过期，请给我换个新的",
          ddan: '31231254323',
          keys:'2017-12-04 13:47:03',
          son: "更换",
        },
        {
          name: "张明",
          age: '18124005968',
          date: "2017-12-04 13:47:03",
          names: "深圳湾生态园11栋b座11楼",
          fank: "螃蟹已过期，请给我换个新的",
          ddan: '31231254323',
          keys:'2017-12-04 13:47:03',
          son: "更换",
        },
        {
          name: "张明",
          age: '18124005968',
          date: "2017-12-04 13:47:03",
          names: "深圳湾生态园11栋b座11楼",
          fank: "螃蟹已过期，请给我换个新的",
          ddan: '31231254323',
          keys:'2017-12-04 13:47:03',
          son: "退货",
        },
        {
          name: "张明",
          age: '18124005968',
          date: "2017-12-04 13:47:03",
          names: "深圳湾生态园11栋b座11楼",
          fank: "螃蟹已过期，请给我换个新的",
          ddan: '31231254323',
          keys:'2017-12-04 13:47:03',
          son: "更换",
        },
        {
          name: "张明",
          age: '18124005968',
          date: "2017-12-04 13:47:03",
          names: "深圳湾生态园11栋b座11楼",
          fank: "螃蟹已过期，请给我换个新的",
          ddan: '31231254323',
          keys:'2017-12-04 13:47:03',
          son: "其他",
        },
        {
          name: "张明",
          age: '18124005968',
          date: "2017-12-04 13:47:03",
          names: "深圳湾生态园11栋b座11楼",
          fank: "螃蟹已过期，请给我换个新的",
          ddan: '31231254323',
          keys:'2017-12-04 13:47:03',
          son: "更换",
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

