<template>
  <div class="right-content">
    <div class="content">
      <form class="con-form">
        <div class="item">
          <label class="lalbel win70">病虫害：</label>
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
            <button  class="btn-add add-button win96" >
              <Icon type="md-add"/>&nbsp;&nbsp;新增角色
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
          title: "预警条件",
          key: "name",
        },
        {
          title: "可能存在的病虫害",
          key: "age",
        },
        {
            title:'症状',
            key:'namef'
        },
        {
            title:'防治方法',
            key:'ages'
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
                ]);
          }
        }
      ],
      data1: [
        {
          name: "盐度 >= 0.0",
          age: '盐症',
          namef: "病蟹体表清白，打开腹盖，轻压肛门，可见黄色黏液流出，病蟹消化不良，胃肠发炎、无食，有较多的淡红色黏液。若不及时治疗，不仅影响其生长，还会导致死亡。",
          ages: '1. 投喂新鲜无霉变的饲料，饲料应投放在浅水滩处，隔日清除残饵，保持池水清新。',
        },
        {
          name: "盐度 >= 0.0",
          age: '盐症',
          namef: "病蟹体表清白，打开腹盖，轻压肛门，可见黄色黏液流出，病蟹消化不良，胃肠发炎、无食，有较多的淡红色黏液。若不及时治疗，不仅影响其生长，还会导致死亡。",
          ages: '1. 投喂新鲜无霉变的饲料，饲料应投放在浅水滩处，隔日清除残饵，保持池水清新。',
        },
        {
          name: "盐度 >= 0.0",
          age: '盐症',
          namef: "病蟹体表清白，打开腹盖，轻压肛门，可见黄色黏液流出，病蟹消化不良，胃肠发炎、无食，有较多的淡红色黏液。若不及时治疗，不仅影响其生长，还会导致死亡。",
          ages: '1. 投喂新鲜无霉变的饲料，饲料应投放在浅水滩处，隔日清除残饵，保持池水清新。',
        },
        {
          name: "盐度 >= 0.0",
          age: '盐症',
          namef: "病蟹体表清白，打开腹盖，轻压肛门，可见黄色黏液流出，病蟹消化不良，胃肠发炎、无食，有较多的淡红色黏液。若不及时治疗，不仅影响其生长，还会导致死亡。",
          ages: '1. 投喂新鲜无霉变的饲料，饲料应投放在浅水滩处，隔日清除残饵，保持池水清新。',
        },
        {
          name: "盐度 >= 0.0",
          age: '盐症',
          namef: "病蟹体表清白，打开腹盖，轻压肛门，可见黄色黏液流出，病蟹消化不良，胃肠发炎、无食，有较多的淡红色黏液。若不及时治疗，不仅影响其生长，还会导致死亡。",
          ages: '1. 投喂新鲜无霉变的饲料，饲料应投放在浅水滩处，隔日清除残饵，保持池水清新。',
        },
        {
          name: "盐度 >= 0.0",
          age: '盐症',
          namef: "病蟹体表清白，打开腹盖，轻压肛门，可见黄色黏液流出，病蟹消化不良，胃肠发炎、无食，有较多的淡红色黏液。若不及时治疗，不仅影响其生长，还会导致死亡。",
          ages: '1. 投喂新鲜无霉变的饲料，饲料应投放在浅水滩处，隔日清除残饵，保持池水清新。',
        },
        {
          name: "盐度 >= 0.0",
          age: '盐症',
          namef: "病蟹体表清白，打开腹盖，轻压肛门，可见黄色黏液流出，病蟹消化不良，胃肠发炎、无食，有较多的淡红色黏液。若不及时治疗，不仅影响其生长，还会导致死亡。",
          ages: '1. 投喂新鲜无霉变的饲料，饲料应投放在浅水滩处，隔日清除残饵，保持池水清新。',
        },
        {
          name: "盐度 >= 0.0",
          age: '盐症',
          namef: "病蟹体表清白，打开腹盖，轻压肛门，可见黄色黏液流出，病蟹消化不良，胃肠发炎、无食，有较多的淡红色黏液。若不及时治疗，不仅影响其生长，还会导致死亡。",
          ages: '1. 投喂新鲜无霉变的饲料，饲料应投放在浅水滩处，隔日清除残饵，保持池水清新。',
        },
        {
          name: "盐度 >= 0.0",
          age: '盐症',
          namef: "病蟹体表清白，打开腹盖，轻压肛门，可见黄色黏液流出，病蟹消化不良，胃肠发炎、无食，有较多的淡红色黏液。若不及时治疗，不仅影响其生长，还会导致死亡。",
          ages: '1. 投喂新鲜无霉变的饲料，饲料应投放在浅水滩处，隔日清除残饵，保持池水清新。',
        },
        {
          name: "盐度 >= 0.0",
          age: '盐症',
          namef: "病蟹体表清白，打开腹盖，轻压肛门，可见黄色黏液流出，病蟹消化不良，胃肠发炎、无食，有较多的淡红色黏液。若不及时治疗，不仅影响其生长，还会导致死亡。",
          ages: '1. 投喂新鲜无霉变的饲料，饲料应投放在浅水滩处，隔日清除残饵，保持池水清新。',
        },
      ],
    };
  },
  methods:{
  
  }
};
</script>


