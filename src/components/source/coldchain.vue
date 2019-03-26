<template>
  <div class="right-content">
    <div class="content">
      <form class="con-form">
        <div class="item">
          <label class="lalbel">车辆牌照：</label>
          <div class="el-form-item__content">
            <div class="el-input">
              <input class="el-input__inner">
            </div>
          </div>
        </div>
        <div class="item">
          <label class="lalbel win96">冷链批次码：</label>
          <div class="el-form-item__content">
              <div class="el-form-item__content">
                <div class="el-input">
                  <input class="el-input__inner">
                </div>
              </div>
          </div>
        </div>
        <div class="item">
          <label class="lalbel win54">状态：</label>
          <div class="el-form-item__content">
            <div class="el-input">
              <Select class="con-itme-sele" placeholder="请选择">
                <Option value>全部</Option>
                <Option value="0">正常</Option>
                <Option value="3">异常</Option>
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
        <div class="left">共<span>3</span>条</div>
        <Page :total="3" prev-text="上一页" next-text="下一页" show-elevator></Page>
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
          title: "冷库车辆",
          key: "date",
        },
        {
          title: "所属中心",
          key: "age"
        },
        {
          title: "出发地",
          key: "names",
          width:120
        },
        {
          title: "到达地",
          key: "name"
        },
        {
          title: "车载温度",
          key: "diz"
        },
        {
          title:'运输时长',
          key:'tims'
        },
        {
          title:'冷链批次码',
          key:'sssst'
        },
        {
          title:'状态',
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
                "正常"
              );
            } else {
              return h(
                "div",
                {
                  style: {
                    color: "#e94343"
                  }
                },
                "异常"
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
          name: "深圳",
          age: '物联网',
          date: "D465456455",
          names: "福建仓库",
          son: "浦江蟹",
          type:1,
          sssst:'2323235584',
          tims:'13：21(正常)',
          diz:'14c(正常)'
        },
        {
          name: "深圳",
          age: '物联网',
          date: "D465456455",
          names: "福建仓库",
          son: "浦江蟹",
          type:2,
          sssst:'2323235584',
          tims:'13：21(正常)',
          diz:'14c(正常)'
        },
        {
          name: "深圳",
          age: '物联网',
          date: "D465456455",
          names: "福建仓库",
          son: "浦江蟹",
          type:1,
          sssst:'2323235584',
          tims:'13：21(正常)',
          diz:'14c(正常)'
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

