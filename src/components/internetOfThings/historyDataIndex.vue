<template>
  <div class="right-content">
    <div class="content">
      <div class="div_tab">
        <div class="tab_first " :class="show?'tab_select':''"  @click="colorclick">历史监控</div>
        <div class="tab_second" :class="!show?'tab_select':''" @click="colorclick">历史病虫害预警</div>
      </div>
      <div v-if="show">
            <form class="con-form">
                <div class="time item">
                <label class="lalbel">监控时间：</label>
                <div class="el-form-item__content">
                    <div class="el-input">
                    <DatePicker
                        format="yyyy-MM-dd"
                        type="date"
                        placeholder="选择日期"
                        class="inblock"
                        
                    ></DatePicker>
                    <div class="line inblock">一</div>
                    <DatePicker
                        format="yyyy-MM-dd"
                        type="date"
                        placeholder="选择日期"
                        class="inblock"
                        
                    ></DatePicker>
                    </div>
                </div>
                </div>
                <div class="item">
                <label class="lalbel">监控地点：</label>
                <div class="el-form-item__content">
                    <div class="el-input">
                    <Select class="con-itme-sele" placeholder="请选择">
                        <Option value>全部</Option>
                        <Option value="0">稻田养殖场</Option>
                        <Option value="1">池塘混养场</Option>
                        <Option value="12">鱼养殖场</Option>
                        <Option value="13">湖里养殖场</Option>
                    </Select>
                    </div>
                </div>
                </div>
                <div class="item">
                <label class="lalbel win54" >设备：</label>
                <div class="el-form-item__content">
                    <div class="el-input">
                    <input class="el-input__inner">
                    </div>
                </div>
                </div>
                
                <div  class="el-form-item last-item item">
                <div class="el-form-item__content">
                    <button  class="search btn-submit">
                        查询
                    </button>
                </div>
                </div>
            </form>
            <Table class="tables" border :columns="columns1s" :data="data1s"></Table>
            <div class="page">
                <div class="left">共<span>10</span>条</div>
                <Page :total="10" prev-text="上一页" next-text="下一页" show-elevator></Page>
                <!-- <span class="inblock">确定</span> -->
            </div>
       </div>
        <div v-if="!show">
            <form class="con-form">
                <div class="time item" style="min-width:326px">
                <label class="lalbel win54" >时间：</label>
                <div class="el-form-item__content">
                    <div class="el-input">
                    <DatePicker
                        format="yyyy-MM-dd"
                        type="date"
                        placeholder="选择日期"
                        class="inblock"
                        
                    ></DatePicker>
                    <div class="line inblock">一</div>
                    <DatePicker
                        format="yyyy-MM-dd"
                        type="date"
                        placeholder="选择日期"
                        class="inblock"
                        
                    ></DatePicker>
                    </div>
                </div>
                </div>
                <div class="item">
                <label class="lalbel" >养殖基地：</label>
                <div class="el-form-item__content">
                    <div class="el-input">
                    <Select class="con-itme-sele" placeholder="请选择">
                        <Option value>全部</Option>
                        <Option value="0">稻田养殖场</Option>
                        <Option value="1">池塘混养场</Option>
                        <Option value="12">鱼养殖场</Option>
                        <Option value="13">湖里养殖场</Option>
                    </Select>
                    </div>
                </div>
                </div>
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
                        查询
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
  </div>
</template>
<script>
export default {
    data(){
        return{
            show:true,
            columns1: [
                {
                title: "时间",
                key: "date",
                },
                {
                title: "预警条件",
                key: "age"
                },
                {
                title: "养殖基地",
                key: "names",
                },
                {
                title: "可能存在的病虫害",
                key: "types",
                width:200
                },
                {
                title: "症状",
                key: "hsong"
                },
                {
                title: "防治方法",
                width: 200,
                key: "fazhi",
               
                }
            ],
            data1: [
                {
                date: "2017-12-04 13:47:03",
                age: '盐度 >= 0.0',
                names: "湖里蟹养殖基地",
                types: "盐症",
                hsong: "1. 投喂新鲜无霉变的饲料，饲料应投放在浅水滩处，隔日清除残饵，保持池水清新。 2．定期轮流将净水王（每瓶用4亩）和活性蒜宝（每瓶用3亩）全池泼洒。 ",
                fazhi:'1. 投喂新鲜无霉变的饲料，饲料应投放在浅水滩处，隔日清除残饵，保持池水清新。 2．定期轮流将净水王（每瓶用4亩）和活性蒜宝（每瓶用3亩）全池泼洒。'
                },
                 {
                date: "2017-12-04 13:47:03",
                age: '盐度 >= 0.0',
                names: "湖里蟹养殖基地",
                types: "盐症",
                hsong: "1. 投喂新鲜无霉变的饲料，饲料应投放在浅水滩处，隔日清除残饵，保持池水清新。 2．定期轮流将净水王（每瓶用4亩）和活性蒜宝（每瓶用3亩）全池泼洒。 ",
                fazhi:'1. 投喂新鲜无霉变的饲料，饲料应投放在浅水滩处，隔日清除残饵，保持池水清新。 2．定期轮流将净水王（每瓶用4亩）和活性蒜宝（每瓶用3亩）全池泼洒。'
                },
                 {
                date: "2017-12-04 13:47:03",
                age: '盐度 >= 0.0',
                names: "湖里蟹养殖基地",
                types: "盐症",
                hsong: "1. 投喂新鲜无霉变的饲料，饲料应投放在浅水滩处，隔日清除残饵，保持池水清新。 2．定期轮流将净水王（每瓶用4亩）和活性蒜宝（每瓶用3亩）全池泼洒。 ",
                fazhi:'1. 投喂新鲜无霉变的饲料，饲料应投放在浅水滩处，隔日清除残饵，保持池水清新。 2．定期轮流将净水王（每瓶用4亩）和活性蒜宝（每瓶用3亩）全池泼洒。'
                },
                 {
                date: "2017-12-04 13:47:03",
                age: '盐度 >= 0.0',
                names: "湖里蟹养殖基地",
                types: "盐症",
                hsong: "1. 投喂新鲜无霉变的饲料，饲料应投放在浅水滩处，隔日清除残饵，保持池水清新。 2．定期轮流将净水王（每瓶用4亩）和活性蒜宝（每瓶用3亩）全池泼洒。 ",
                fazhi:'1. 投喂新鲜无霉变的饲料，饲料应投放在浅水滩处，隔日清除残饵，保持池水清新。 2．定期轮流将净水王（每瓶用4亩）和活性蒜宝（每瓶用3亩）全池泼洒。'
                },
                 {
                date: "2017-12-04 13:47:03",
                age: '盐度 >= 0.0',
                names: "湖里蟹养殖基地",
                types: "盐症",
                hsong: "1. 投喂新鲜无霉变的饲料，饲料应投放在浅水滩处，隔日清除残饵，保持池水清新。 2．定期轮流将净水王（每瓶用4亩）和活性蒜宝（每瓶用3亩）全池泼洒。 ",
                fazhi:'1. 投喂新鲜无霉变的饲料，饲料应投放在浅水滩处，隔日清除残饵，保持池水清新。 2．定期轮流将净水王（每瓶用4亩）和活性蒜宝（每瓶用3亩）全池泼洒。'
                },
                 {
                date: "2017-12-04 13:47:03",
                age: '盐度 >= 0.0',
                names: "湖里蟹养殖基地",
                types: "盐症",
                hsong: "1. 投喂新鲜无霉变的饲料，饲料应投放在浅水滩处，隔日清除残饵，保持池水清新。 2．定期轮流将净水王（每瓶用4亩）和活性蒜宝（每瓶用3亩）全池泼洒。 ",
                fazhi:'1. 投喂新鲜无霉变的饲料，饲料应投放在浅水滩处，隔日清除残饵，保持池水清新。 2．定期轮流将净水王（每瓶用4亩）和活性蒜宝（每瓶用3亩）全池泼洒。'
                },
                 {
                date: "2017-12-04 13:47:03",
                age: '盐度 >= 0.0',
                names: "湖里蟹养殖基地",
                types: "盐症",
                hsong: "1. 投喂新鲜无霉变的饲料，饲料应投放在浅水滩处，隔日清除残饵，保持池水清新。 2．定期轮流将净水王（每瓶用4亩）和活性蒜宝（每瓶用3亩）全池泼洒。 ",
                fazhi:'1. 投喂新鲜无霉变的饲料，饲料应投放在浅水滩处，隔日清除残饵，保持池水清新。 2．定期轮流将净水王（每瓶用4亩）和活性蒜宝（每瓶用3亩）全池泼洒。'
                },
                 {
                date: "2017-12-04 13:47:03",
                age: '盐度 >= 0.0',
                names: "湖里蟹养殖基地",
                types: "盐症",
                hsong: "1. 投喂新鲜无霉变的饲料，饲料应投放在浅水滩处，隔日清除残饵，保持池水清新。 2．定期轮流将净水王（每瓶用4亩）和活性蒜宝（每瓶用3亩）全池泼洒。 ",
                fazhi:'1. 投喂新鲜无霉变的饲料，饲料应投放在浅水滩处，隔日清除残饵，保持池水清新。 2．定期轮流将净水王（每瓶用4亩）和活性蒜宝（每瓶用3亩）全池泼洒。'
                },
                 {
                date: "2017-12-04 13:47:03",
                age: '盐度 >= 0.0',
                names: "湖里蟹养殖基地",
                types: "盐症",
                hsong: "1. 投喂新鲜无霉变的饲料，饲料应投放在浅水滩处，隔日清除残饵，保持池水清新。 2．定期轮流将净水王（每瓶用4亩）和活性蒜宝（每瓶用3亩）全池泼洒。 ",
                fazhi:'1. 投喂新鲜无霉变的饲料，饲料应投放在浅水滩处，隔日清除残饵，保持池水清新。 2．定期轮流将净水王（每瓶用4亩）和活性蒜宝（每瓶用3亩）全池泼洒。'
                },
                 {
                date: "2017-12-04 13:47:03",
                age: '盐度 >= 0.0',
                names: "湖里蟹养殖基地",
                types: "盐症",
                hsong: "1. 投喂新鲜无霉变的饲料，饲料应投放在浅水滩处，隔日清除残饵，保持池水清新。 2．定期轮流将净水王（每瓶用4亩）和活性蒜宝（每瓶用3亩）全池泼洒。 ",
                fazhi:'1. 投喂新鲜无霉变的饲料，饲料应投放在浅水滩处，隔日清除残饵，保持池水清新。 2．定期轮流将净水王（每瓶用4亩）和活性蒜宝（每瓶用3亩）全池泼洒。'
                },
            ],
            columns1s:[
                {
                title: "监控时间",
                key: "date",
                },
                {
                title: "监控地点",
                key: "age"
                },
                {
                title: "设备",
                key: "names",
                },
               
                {
                title: "操作",
                width: 200,
                key: "",
                render:(h,params)=>{
                     return h("div", [
                        h("i", {
                         class: "icons icons1",
                            attrs: {
                                title: "查看"
                            }
                        }),
                     ])
                }
               
                }
            ],
            data1s:[
                 {
                date: "2017-12-04 13:47:03",
                age: '湖里蟹养殖基地',
                names: "传感器",
                },
                 {
                date: "2017-12-04 13:47:03",
                age: '湖里蟹养殖基地',
                names: "传感器",
                },
                 {
                date: "2017-12-04 13:47:03",
                age: '湖里蟹养殖基地',
                names: "传感器",
                },
                 {
                date: "2017-12-04 13:47:03",
                age: '湖里蟹养殖基地',
                names: "传感器",
                },
                 {
                date: "2017-12-04 13:47:03",
                age: '湖里蟹养殖基地',
                names: "传感器",
                }, {
                date: "2017-12-04 13:47:03",
                age: '湖里蟹养殖基地',
                names: "传感器",
                },
                 {
                date: "2017-12-04 13:47:03",
                age: '湖里蟹养殖基地',
                names: "传感器",
                },
                 {
                date: "2017-12-04 13:47:03",
                age: '湖里蟹养殖基地',
                names: "传感器",
                },
                 {
                date: "2017-12-04 13:47:03",
                age: '湖里蟹养殖基地',
                names: "传感器",
                },
                 {
                date: "2017-12-04 13:47:03",
                age: '湖里蟹养殖基地',
                names: "传感器",
                }
            ]
        }
    },
    methods:{
        colorclick(){
            this.show=!this.show;
        }
    }
}
</script>

<style lang="less" >
    
</style>

