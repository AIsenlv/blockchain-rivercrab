 <template>
  <div class="right-content">
    <!-- <ggg :msg='dateArr'></ggg> -->
    <div class="content">
      <form class="con-form">
        <div class="item">
          <label class="lalbel win96">产品名称：</label>
          <div class="el-form-item__content">
            <div class="el-input">
              <input class="el-input__inner">
            </div>
          </div>
        </div>
        <div class="item">
          <label class="lalbel" style="width:54px">状态：</label>
          <div class="el-form-item__content">
            <div class="el-input">
              <Select class="con-itme-sele">
                <Option value>全部</Option>
                <Option value="0">未启用</Option>
                <Option value="3">启用</Option>
                <Option value="1">停用</Option>
              </Select>
            </div>
          </div>
        </div>
        <div class="el-form-item last-item item">
          <div class="el-form-item__content">
            <button class="search btn-submit">
              <Icon type="ios-search"/>&nbsp;&nbsp;查询
            </button>
            <button class="btn-add add-button win96">
              <Icon type="md-add"/>&nbsp;&nbsp;新增
            </button>
          </div>
        </div>
      </form>
      <div class="table-block">
        <div class="table-border">
          <div class="thead">
            <div class="th1">分类编号及产品名称</div>
            <div class="th2">状态</div>
            <div class="th3">说明</div>
            <div class="th4">操作</div>
          </div>
        </div>
        <div class="el-tree">
            <ggg :msg="dateArr"></ggg>
          
         
        </div>
      </div>
    </div>
  </div>
</template>
 <script>
export default {
  data() {
    return {
      dateArr: [
        {
          text: "水产品",
          valid: false,
          inx:1,
          next: [
            { text: "蟹类", valid: false, inx:2,next:[
                { text: "稻田蟹", valid: false, inx:3,next:[]},
                { text: "湖里蟹", valid: false, inx:3,next:[]},
                { text: "河蟹", valid: false, inx:3,next:[]},
                { text: "红蟹", valid: false, inx:3 ,next:[]},
            ]}
          ]
        }
      ]
    };
  },
  components: {
    ggg: {
      name: "gs",
      template: `<div>
                    <div class="el-tree-node is-expanded" v-for="a in msg" >
                        <div class="el-tree-node__content" style="padding-left: 0px;" v-if="a.next">
                        <span class="el-tree-node__expand-icon" :class="a.valid || a.next.length=='0'?'expanded':''" :style="'margin-left:'+(a.inx==1?'100':(100+a.inx*15))+'px'"  @click.stop.self='a.valid=!a.valid'></span>
                        <!---->
                        <!---->
                        <span>
                            <span>
                            <span>{{a.text}}</span>
                            </span>
                            <span class="rend_span_wrap">
                            <span class="rend_btn_span">
                                <i title="停用" class="c_icon start stop"></i>
                                <i title="修改" class="c_icon modi"></i>
                            </span>
                            <span title="饲料" class="rend_explain_span">{{a.text}}</span>
                            <span class="rend_state_span">
                                <span style="color: rgb(69, 173, 3);">启用</span>
                            </span>
                            </span>
                        </span>
                        </div>
                        <div  class="el-tree-node__children" v-if="a.valid" >
                            <gs :msg="a.next"></gs>
                        </div>
                    </div>
                </div>
              `,
      props: ["msg"],
      data() {
        return {
        };
      }
    }
  }
};
</script>
<style lang="less">
    @import './css/index.less';
</style>

 