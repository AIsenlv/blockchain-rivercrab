<template>
  <div class="right-content">
    <div class="content">
      <form class="con-form con-form-right">
        <!-- <div class="item">
          <label class="lalbel">养殖基地：</label>
          <div class="el-form-item__content">
            <div class="el-input">
              <input class="el-input__inner">
            </div>
          </div>
        </div> -->
        <div class="item">
          <label class="lalbel">产品名称：</label>
          <div class="el-form-item__content">
            <div class="el-input">
              <Select class="con-itme-sele" placeholder="请选择">
                <Option value>全部</Option>
                <Option value="0">水稻田鞋类</Option>
                <Option value="3">浦江蟹</Option>
                <Option value="1">大宗产品蟹</Option>
                <Option value="2">大河西</Option>
                <Option value="4">大闸江蟹</Option>
                <Option value="5">嘉兴湖大闸蟹</Option>
                 <Option value="5">小虾蟹</Option>
              </Select>
            </div>
          </div>
        </div>
        <div class="item">
          <label class="lalbel">检测结果：</label>
          <div class="el-form-item__content">
            <div class="el-input">
              <Select class="con-itme-sele" placeholder="请选择">
                <Option value>全部</Option>
                <Option value="0">合格</Option>
                <Option value="3">不合格</Option>
              </Select>
            </div>
          </div>
        </div>
        <div class="item">
          <label class="lalbel">养殖基地：</label>
          <div class="el-form-item__content">
            <div class="el-input">
              <Select class="con-itme-sele" placeholder="请选择">
                <Option value>全部</Option>
                <Option value="0">稻田养殖区</Option>
                <Option value="3">池塘混养区</Option>
                <Option value="1">鱼养殖区</Option>
                <Option value="2">湖里蟹养殖基地001</Option>
              </Select>
            </div>
          </div>
        </div>
       
        <div class="time item">
          <label class="lalbel">检测时间：</label>
          <div class="el-form-item__content">
            <div class="el-input" >
              <DatePicker
                format="yyyy-MM-dd"
                type="date"
                placeholder="选择日期"
                class="inblock"
                style="width: 200px"
              ></DatePicker>
              <div class="line inblock">一</div>
              <DatePicker
                format="yyyy-MM-dd"
                type="date"
                placeholder="选择日期"
                class="inblock"
                style="width: 200px"
              ></DatePicker>
            </div>
          </div>
        </div>
        <div  class="el-form-item last-item item positions pisntsh">
          <div class="el-form-item__content">
            <button class="btn-add add-button" style="width:96px">
                <i class="ivu-icon ivu-icon-md-add"></i>&nbsp;&nbsp;新增
             </button>
            <button  class="search btn-submit">
                <Icon type="ios-search"/>&nbsp;&nbsp;查询
            </button>

          </div>
        </div>
      </form>
      <Table class="tables" border :columns="columns1" :data="data1"></Table>
      <div class="page">
        <div class="left">共<span>100</span>条</div>
        <Page :total="100" prev-text="上一页" next-text="下一页" show-elevator></Page>
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
          title: "养殖基地",
          key: "name"
        },
        {
          title: "捕捞产品",
          key: "age"
        },
        {
          title: "捕捞时间",
          key: "names"
        },
        {
          title: "检测类型",
          key: "son"
        },
        {
          title: "检测时间",
          key: "sta"
        },
        {
          title: "检测结果",
          key: "type",
          render: (h, params) => {
            if (params.row.type == 1) {
              return h(
                "div",
                {
                  style: {
                    color: "#48b400"
                  }
                },
                "合格"
              );
            } else {
              return h(
                "div",
                {
                  style: {
                    color: "#e94343"
                  }
                },
                "不合格"
              );
            }
          }
        },
        {
          title: "是否公开",
          key: "ensd",
          
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
                // h("i", {
                //   class: "icons icons5",
                //   attrs: {
                //     title: "执行"
                //   }
                // })
              ]);
            
          }
        }
      ],
      data1: [
        {
          name: "湖里养殖基地",
          age: '阳澄湖大闸蟹',
          names: "2017-12-04",
          son: "企业自检",
          sta: "2017-12-04",
          end: "小虾蟹",
          type: "1",
          ensd:"公开",
          ensfd:"公开",
        },
         {
          name: "湖里养殖基地",
          age: '阳澄湖大闸蟹',
          names: "2017-12-04",
          son: "企业自检",
          sta: "2017-12-04",
          end: "小虾蟹",
          type: "1",
          ensd:"公开",
          ensfd:"公开",
        },
         {
          name: "湖里养殖基地",
          age: '阳澄湖大闸蟹',
          names: "2017-12-04",
          son: "企业自检",
          sta: "2017-12-04",
          end: "小虾蟹",
          type: "1",
          ensd:"公开",
          ensfd:"公开",
        },
         {
          name: "湖里养殖基地",
          age: '阳澄湖大闸蟹',
          names: "2017-12-04",
          son: "企业自检",
          sta: "2017-12-04",
          end: "小虾蟹",
          type: "1",
          ensd:"公开",
          ensfd:"公开",
        },
         {
          name: "湖里养殖基地",
          age: '阳澄湖大闸蟹',
          names: "2017-12-04",
          son: "企业自检",
          sta: "2017-12-04",
          end: "小虾蟹",
          type: "2",
          ensd:"公开",
          ensfd:"公开",
        },
         {
          name: "湖里养殖基地",
          age: '阳澄湖大闸蟹',
          names: "2017-12-04",
          son: "企业自检",
          sta: "2017-12-04",
          end: "小虾蟹",
          type: "1",
          ensd:"公开",
          ensfd:"公开",
        },
         {
          name: "湖里养殖基地",
          age: '阳澄湖大闸蟹',
          names: "2017-12-04",
          son: "企业自检",
          sta: "2017-12-04",
          end: "小虾蟹",
          type: "2",
          ensd:"公开",
          ensfd:"公开",
        },
         {
          name: "湖里养殖基地",
          age: '阳澄湖大闸蟹',
          names: "2017-12-04",
          son: "企业自检",
          sta: "2017-12-04",
          end: "小虾蟹",
          type: "1",
          ensd:"公开",
          ensfd:"公开",
        },
         {
          name: "湖里养殖基地",
          age: '阳澄湖大闸蟹',
          names: "2017-12-04",
          son: "企业自检",
          sta: "2017-12-04",
          end: "小虾蟹",
          type: "1",
          ensd:"公开",
          ensfd:"公开",
        },
         {
          name: "湖里养殖基地",
          age: '阳澄湖大闸蟹',
          names: "2017-12-04",
          son: "企业自检",
          sta: "2017-12-04",
          end: "小虾蟹",
          type: "2",
          ensd:"公开",
          ensfd:"公开",
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

