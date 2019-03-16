<template>
    <div class="left-menu">
            
    <div class="asideBox">
      <aside>
        <ul class="asideMenu">
          <li v-for="(item,index) in menuList">
            <div class="oneMenu" :class="item.isSubShow?'activred':''" v-if="item.subItems.length==0?false:true" @click="showToggle(item,index)">
              <!-- <img v-bind:src="item.imgUrl" /> -->
              <Icon :type="item.imgUrl"  class="imgst"/>
              <span>{{item.name}}</span>
              <Icon type="md-arrow-dropleft" class="icons" :class="item.isSubShow?'iconsit':'iconsitt'"  />
            </div>
            <div   class="oneMenu" :class="item.isSubShow?'activred':''" v-if="item.subItems.length==0?true:false"  @click="Toggle(item,index)">
                  <!-- <img v-bind:src="item.imgUrl" /> -->
                   <Icon :type="item.imgUrl" class="imgst"/>
                  <span>{{item.name}}</span>
            </div>
            <ul  :class="item.isSubShow?'manhie':''"   class="intul">
              <li v-for="subItem in item.subItems"  @click="zitoogle(item,index)">
                <router-link :to="subItem.path" tag="div"  class="oneMenuChild" :class="subItem.isshw?'aciv':''">{{subItem.name}}</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    </div>
    </div>
</template>
<script>
import {date} from './data.js'
export default {
    data(){
        return{
            theme2: 'light',
            menuList: date
        }
    },
    created(){
       this.zitoogle();
    },
    methods:{
        //有二级菜单的点击
        showToggle:function(item,ind){
            this.menuList.forEach(i => {
                //判断如果数据中的menuList[i]的show属性不等于当前数据的isSubShow属性那么menuList[i]等于false
                if (i.isSubShow !== this.menuList[ind].isSubShow) {
                    i.isSubShow = false;
                }
            });
            item.isSubShow = !item.isSubShow;
        },
        //根据路由判断菜单高亮
        zitoogle(item,ind){
             let pat=this.$route.path;
               // console.log(pat);
                this.menuList.forEach(i => {
                    // 判断如果数据中的menuList[i]的show属性不等于当前数据的isSubShow属性那么menuList[i]等于false
                    if (pat.indexOf(i.path)>-1){
                        i.isSubShow = true;
                        if(i.subItems.length>0){
                            i.subItems.forEach(j=>{
                                if(pat==j.path){
                                    j.isshw=true;
                                }else{
                                    j.isshw=false;
                                }
                            })
                        }
                    }else{
                        i.isSubShow =false;
                        i.subItems.forEach(j=>{
                            j.isshw=false;
                        })
                    }
                    
                });
        },
        //只有一级菜单的点击
        Toggle(item,ind){
           
           this.$router.push({path:item.path});
            this.zitoogle();
        }
    }

}
</script>
<style lang="less" scoped>
@keyframes asd {
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(-90deg);
    }
}
@keyframes qwe {
    from{
        transform: rotate(-90deg);
    }
    to{
        transform: rotate(0deg);
    }
}

  .asideBox{
    aside{   
      height: 100%;
      .asideMenu{
        .oneMenu{
          height: 50px;
          line-height: 50px;
          font-size: 18px;
          font-weight: normal;
          position: relative;
          color: #a4c2ee;
          border-bottom: 1px solid;
          cursor: pointer;
          border-image: linear-gradient(270deg, rgba(255, 88, 88, 0), rgba(243, 243, 243, 0.5), rgba(255, 88, 88, 0)) 10 1;
          &:hover{
            color: #a4c2ee;
          }
          
          .icons{
                position: absolute;
                right: 20%;
                top: 16px;
                font-size: 22px;
          }
          .imgst{
            font-size: 20px;
            margin: 16px 10px 16px 20px;
            vertical-align: top;
          }
          i.iconsit{
                animation: asd 0.3s forwards;
          }
          i.iconsitt{
                animation: qwe 0.3s forwards;
          }
        }
        .intul{
            background: linear-gradient(90deg, #000, #06080a);
            border-bottom: none;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.2s;
        }
        .manhie.intul{
            max-height: 2000px;
            transition:max-height 1s;
             transition-delay:0.1s;
        }

        .oneMenuChild{
          padding: 0 20px 0 70px;
          height: 34px;
          line-height: 34px;
          color: #a4c2ee;
          font-size: 12px;
          position: relative;
           cursor: pointer;
           &:after{
                content:'。';
                position: absolute;
                left: 55px;
                top: -4px;
                z-index: 9;
            }
          &:hover{color: #dab354;}
        }
        .aciv{
            color: #dab354;
        }
        .activred{
            background: linear-gradient(90deg, #1b1e22, #354f7b, #1b1e22);
            border-image: linear-gradient(90deg, rgba(255, 88, 88, 0), rgba(250, 250, 250, 0.5), rgba(255, 88, 88, 0)) 10 1;
            .icons{
                transform: rotate(-90deg);
                transform-origin:center center;
            }
        }
      }
    }
  }
 
</style>

