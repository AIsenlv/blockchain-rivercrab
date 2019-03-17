<template>
  <div class="right-content">
    <div class="content birthc">
      <div class="div_op">
        <div class="btn_add">
          <i class="ivu-icon ivu-icon-md-add"></i>&nbsp;新增
        </div>
      </div>
      <div class="div_left">
        <div class="div_tree">
          <div class="el-tree">
            <!-- <ggg @showbox="toshow" :msg="dateArr"></ggg> -->
             <div class="el-tree-node" v-for="a in dateArr" :key="a.id">
                        <div class="el-tree-node__content" :class="a.txt?'acisnt':''" @click.stop.self="colorclick(a)" >
                            <span class="el-tree-node__expand-icon" :class="a.valid || a.next.length=='0'?'expanded':''" :style="'margin-left:'+(a.inx==1?'100':(100+a.inx*15))+'px'"
                              @click.stop.self="colorclick(a)"
                            ></span>
                            <span class="el-tree-node__label" @click.stop.self="colorclick(a)">{{a.text}}</span>
                        </div>
                        <div class="el-tree-node__children" v-if="a.valid">
                                 <div class="el-tree-node" v-for="b in a.next" :key="b.id">
                                    <div class="el-tree-node__content" :class="b.txt?'acisnt':''" @click.stop.self="colorclick(b)" >
                                        <span class="el-tree-node__expand-icon" :class="b.valid || b.next.length=='0'?'expanded':''" :style="'margin-left:'+(b.inx==1?'100':(100+b.inx*15))+'px'"
                                          @click.stop.self="colorclick(b)"
                                        ></span>
                                        <span class="el-tree-node__label" @click.stop.self="colorclick(b)">{{b.text}}</span>
                                    </div>
                                    <div class="el-tree-node__children" v-if="b.valid">
                                             <div class="el-tree-node" v-for="c in b.next" :key="c.id">
                                                <div class="el-tree-node__content" :class="c.txt?'acisnt':''" @click.stop.self="colorclick(c)" >
                                                    <span class="el-tree-node__expand-icon" :class="c.valid || c.next.length=='0'?'expanded':''" :style="'margin-left:'+(c.inx==1?'100':(100+c.inx*15))+'px'"
                                                      @click.stop.self="colorclick(c)"
                                                    ></span>
                                                    <span class="el-tree-node__label" @click.stop.self="colorclick(c)">{{c.text}}</span>
                                                </div>
                                                
                                            </div>
                                    </div>
                                </div>
                        </div>
                    </div>
            <!---->
          </div>
        </div>
      </div>
      <div class="div_right">
        <div class="div_tb">
          <table border="0" cellspacing="0" cellpadding="0" width="100%">
            <tr>
              <th class="th_sort">生育顺序</th>
              <th class="th_phase">生育期阶段</th>
              <th class="th_status">状态</th>
              <th class="th_op">操作</th>
            </tr>
            <tr v-for="(item,i) in date" :key="item.id">
              <td>{{i+1}}</td>
              <td>{{item.name}}</td>
              <td>{{item.type}}</td>
              <td>
                <div>
                  <div class="div_opbtn">
                    <div title="停用" class="btn_op stop"></div>
                    <div title="修改" class="btn_op modi"></div>
                    <div title="查看" class="btn_op inq"></div>
                    <div title="上移" class="btn_op img_moveup"></div>
                    <div title="下移" class="btn_op img_movedown"></div>
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </div>
        <div class="page">
            <div class="left">共<span>{{date.length}}</span>条</div>
            <Page :total="date.length" prev-text="上一页" next-text="下一页" show-elevator></Page>
            <!-- <span class="inblock">确定</span> -->
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
          valid: true,
          inx: 1,
          txt: false,
          next: [
            {
              text: "蟹类",
              valid: true,
              inx: 2,
              next: [
                { text: "稻田蟹", valid: true, txt: false, inx: 3, next: [] },
                { text: "湖里蟹", valid: true, txt: false, inx: 3, next: [] },
                { text: "河蟹", valid: true, txt: false, inx: 3, next: [] },
                { text: "红蟹", valid: true, txt: false, inx: 3, next: [] }
              ]
            }
          ]
        }
      ],
      date: []
    };
  },
  methods: {
    toshow(arr) {
      if(arr.text=="河蟹" || arr.text=="红蟹"){
          this.date = [
            { name: "产前", type: "启用" },
            { name: "产中", type: "启用" },
            { name: "产后", type: "启用" }
          ];
      }else{
          this.date = [
            { name: "产前2", type: "启用" },
            { name: "产中2", type: "启用" },
            { name: "产后2", type: "启用" }
          ];
      }
      
    },
     colorclick(a) {
          this.dateArr.forEach(item => {
            if (a.inx == item.inx && a.text == item.text) {
              item.valid = !item.valid;
            } else{
               item.next &&  item.next.forEach(resf=>{
                    if (a.inx == resf.inx && a.text == resf.text) {
                    resf.valid = !resf.valid;
                  }else{
                    resf.next && resf.next.forEach(onts=>{
                        if (a.inx == onts.inx && a.text == onts.text) {
                            onts.valid = !onts.valid;
                            onts.txt = true;
                            this.toshow(onts);
                        }else{
                            onts.txt = false;
                        }
                    })
                      
                  }  
                })
                  
            
            }
          });
        }
  },
  components: {
    ggg: {
      name: "gs",
      template: `<div>
                    <div class="el-tree-node" v-for="a in msg">
                        <div class="el-tree-node__content" :class="a.txt?'acisnt':''" @click.stop.self="colorclick(a)" >
                            <span class="el-tree-node__expand-icon" :class="a.valid || a.next.length=='0'?'expanded':''" :style="'margin-left:'+(a.inx==1?'100':(100+a.inx*15))+'px'"
                              @click.stop.self="colorclick(a)"
                            ></span>
                            <span class="el-tree-node__label" @click.stop.self="colorclick(a)">{{a.text}}</span>
                        </div>
                        <div class="el-tree-node__children" v-if="a.valid">
                                 <gs :msg="a.next"></gs>
                        </div>
                    </div>    
                   
                </div>
              `,
      props: ["msg"],
      methods: {
       
      },
      data() {
        return {};
      }
    }
  }
};
</script>
<style lang="less">
@import "./css/index.less";
</style>

