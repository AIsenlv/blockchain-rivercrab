<template>
    <div class="left-menu"  :class="!shows?'showsleft':''">
            
    <div class="asideBox">
      <aside>
        <h3 class="cursor" @click="cursor"><i class="icon--3" :class="!shows?'icon--9':''"></i></h3>
        <ul class="asideMenu" >
          <li v-for="(item,index) in menuList">
            <div class="oneMenu" :class="item.isSubShow?'activred':''" v-if="item.subItems.length==0?false:true" @click="showToggle(item,index)">
              <!-- <img v-bind:src="item.imgUrl" /> -->
              <i :class="item.imgUrl"  class="imgst"/>
              <span>{{item.name}}</span>
              <Icon type="md-arrow-dropleft" class="icons" :class="item.isSubShow?'iconsit':'iconsitt'"  />
            </div>
            <div   class="oneMenu" :class="item.isSubShow?'activred':''" v-if="item.subItems.length==0?true:false"  @click="Toggle(item,index)">
                  <!-- <img v-bind:src="item.imgUrl" /> -->
                   <i :class="item.imgUrl" class="imgst"/>
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
    computed:{
        shows(){
            return this.$store.getters.showvalid;
        }
    },
    methods:{
        cursor(){
            this.$store.commit('showvalid',!this.shows);
        },
        //有二级菜单的点击
        showToggle(item,ind){
            if(!this.shows){this.$store.commit('showvalid',true); return};
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
           if(!this.shows){this.$store.commit('showvalid',true); return};
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
  .showsleft{
    width: 45px;
    transition: width 0.3s;
    span,.intul,.icons {
      display: none;
      transition:display 0.3s;
    }
    .asideBox aside  .asideMenu li,.cursor{
        border-bottom:0!important; 
    }
  }

  .asideBox{
    aside{   
      height: 100%;
      .cursor{
        text-align: center;
         padding: 2px;
          border-bottom: 1px solid;
           border-color: #407678;
        i{
          font-size: 19px;
         
        }  
      }
      .asideMenu{
        li{
          border-bottom: 1px solid;
           border-color: #407678;
        }
        .oneMenu{
          height: 41px;
          line-height: 41px;
          font-size: 14px;
          font-weight: normal;
          position: relative;
          color: #a6b3c9;
          cursor: pointer;
          &:hover{
            color: #a4c2ee;
            background:#407678;
            .imgst:before{
              color: #8ffcff;
            }
          }
          
          .icons{
                position: absolute;
                right: 8%;
                top: 10px;
                font-size: 22px;
          }
          .imgst{
            font-size: 16px;
            margin: 12px 5px 16px 14px;
            vertical-align: middle;
          }
          i.iconsit{
                animation: asd 0.3s forwards;
          }
          i.iconsitt{
                animation: qwe 0.3s forwards;
          }
        }
        .intul{
            background: rgba(89,162,164,0.2);
            border-bottom: none;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.2s;
            li{
              border: 0
            }
        }
        .manhie.intul{
            max-height: 2000px;
            transition:max-height 1s;
             transition-delay:0.1s;
        }

        .oneMenuChild{
          padding: 0 20px 0 50px;
          height: 34px;
          line-height: 34px;
          color: #a4c2ee;
          font-size: 12px;
          position: relative;
           cursor: pointer;
          
          &:hover{color: #8ffcff;}
        }
        .aciv{
            color: #8ffcff;
        }
        .activred{
            background:#407678;
            .icons{
                transform: rotate(-90deg);
                transform-origin:center center;
            }
            .imgst:before{
              color: #8ffcff;
            }
        }
      }
    }
  }
 
</style>

