<template>
    <div class="centions">
        <!-- 头部 -->
        <top/>
        <!-- 主体 -->
        <section class="section" >
            <!-- 左菜单 -->
            <left/>
            <div class="right-contents" :class="!shows?(pahts?'right-showvalid homesimg':'right-showvalid'):(pahts?'homesimg':'')">
                 <router-view></router-view>
                 <div class="conitem" v-if="pahts" @click="viewmodel($event)" >
                     <!-- 湖蟹 -->
                    <img class="list" src="../../assets/fws1.png" style="top:50%;left:30%" v-on:mouseover="hoverenter($event,1)" v-on:mouseout="hovercome()"  alt="">
                    <img class="list" src="../../assets/fws1.png" style="top:45%;left:38%" v-on:mouseover="hoverenter($event,1)" v-on:mouseout="hovercome()"  alt="">
                    <img class="list" src="../../assets/fws3.png" style="top:40%;left:42%" v-on:mouseover="hoverenter($event,1)" v-on:mouseout="hovercome()"  alt="">
                    <img class="list" src="../../assets/wlw1.png" style="top:38%;left:49%" v-on:mouseover="hoverenter($event,1)" v-on:mouseout="hovercome()"  alt="">
                    <img class="list" src="../../assets/wlw2.png" style="top:30%;left:52%" v-on:mouseover="hoverenter($event,1)" v-on:mouseout="hovercome()"  alt="">
                    <img class="list" src="../../assets/fws3.png" style="top:22%;left:57%" v-on:mouseover="hoverenter($event,1)" v-on:mouseout="hovercome()"  alt="">
                    <img class="list" src="../../assets/wlw1.png" style="top:14%;left:57%" v-on:mouseover="hoverenter($event,1)" v-on:mouseout="hovercome()"  alt="">
                    <img class="list" src="../../assets/wlw2.png" style="top:32%;left:71%" v-on:mouseover="hoverenter($event,1)" v-on:mouseout="hovercome()"  alt="">
                    <img class="list" src="../../assets/wlw2.png" style="top:38%;left:71%" v-on:mouseover="hoverenter($event,1)" v-on:mouseout="hovercome()"  alt="">
                    <img class="list" src="../../assets/wlw2.png" style="top:32%;left:66%" v-on:mouseover="hoverenter($event,1)" v-on:mouseout="hovercome()"  alt="">
                    <img class="list" src="../../assets/wlw1.png" style="top:45%;left:66%" v-on:mouseover="hoverenter($event,1)" v-on:mouseout="hovercome()"  alt="">
                    <img class="list" src="../../assets/wlw1.png" style="top:48%;left:72%" v-on:mouseover="hoverenter($event,1)" v-on:mouseout="hovercome()"  alt="">
                    <img class="list" src="../../assets/wlw2.png" style="top:55%;left:73%" v-on:mouseover="hoverenter($event,1)" v-on:mouseout="hovercome()"  alt="">
                    <img class="list" src="../../assets/wlw2.png" style="top:18%;left:65%" v-on:mouseover="hoverenter($event,1)" v-on:mouseout="hovercome()"  alt="">
                    <img class="list" src="../../assets/fws1.png" style="top:25%;left:70%" v-on:mouseover="hoverenter($event,1)" v-on:mouseout="hovercome()"  alt="">
                    <img class="list" src="../../assets/fws1.png" style="top:35%;left:60%" v-on:mouseover="hoverenter($event,1)" v-on:mouseout="hovercome()"  alt="">
                    <img class="list" src="../../assets/fws1.png" style="top:25%;left:70%" v-on:mouseover="hoverenter($event,1)" v-on:mouseout="hovercome()"  alt="">
                    <img class="list" src="../../assets/fws1.png" style="top:35%;left:65%" v-on:mouseover="hoverenter($event,1)" v-on:mouseout="hovercome()"  alt="">
                    <img class="list" src="../../assets/fws1.png" style="top:60%;left:61%" v-on:mouseover="hoverenter($event,1)" v-on:mouseout="hovercome()"  alt="">
                    <img class="list" src="../../assets/fws1.png" style="top:55%;left:68%" v-on:mouseover="hoverenter($event,1)" v-on:mouseout="hovercome()"  alt="">
                    <img class="list" src="../../assets/fws1.png" style="top:50%;left:63%" v-on:mouseover="hoverenter($event,1)" v-on:mouseout="hovercome()"  alt="">
                    <img class="list" src="../../assets/fws1.png" style="top:22%;left:63%" v-on:mouseover="hoverenter($event,1)" v-on:mouseout="hovercome()"  alt="">
                    <!-- 竹鼠 -->
                    <img class="list" src="../../assets/fws3.png" style="top:58%;left:45%" v-on:mouseover="hoverenter($event,2)" v-on:mouseout="hovercome()"  alt="">
                    <img class="list" src="../../assets/fws1.png" style="top:61%;left:42%" v-on:mouseover="hoverenter($event,2)" v-on:mouseout="hovercome()"  alt="">
                    <img class="list" src="../../assets/fws2.png" style="top:68%;left:41%" v-on:mouseover="hoverenter($event,2)" v-on:mouseout="hovercome()"  alt="">
                    <img class="list" src="../../assets/fws2.png" style="top:76%;left:43%" v-on:mouseover="hoverenter($event,2)" v-on:mouseout="hovercome()"  alt="">
                    <img class="list" src="../../assets/wlw2.png" style="top:68%;left:50%" v-on:mouseover="hoverenter($event,2)" v-on:mouseout="hovercome()"  alt="">

                    <!-- 健康鸡 -->
                    <img class="list" src="../../assets/fws1.png" style="top:25%;left:40%" v-on:mouseover="hoverenter($event,3)" v-on:mouseout="hovercome()"  alt="">
                    <img class="list" src="../../assets/fws2.png" style="top:28%;left:32%" v-on:mouseover="hoverenter($event,3)" v-on:mouseout="hovercome()"  alt="">
                    <img class="list" src="../../assets/fws3.png" style="top:20%;left:39%" v-on:mouseover="hoverenter($event,3)" v-on:mouseout="hovercome()"  alt="">
                    <img class="list" src="../../assets/fws2.png" style="top:40%;left:28%" v-on:mouseover="hoverenter($event,3)" v-on:mouseout="hovercome()"  alt="">
                    <img class="list" src="../../assets/fws2.png" style="top:36%;left:33%" v-on:mouseover="hoverenter($event,3)" v-on:mouseout="hovercome()"  alt="">
                    <img class="list" src="../../assets/fws2.png" style="top:45%;left:20%" v-on:mouseover="hoverenter($event,3)" v-on:mouseout="hovercome()"  alt="">
                    <img class="list" src="../../assets/wlw1.png" style="top:25%;left:36%" v-on:mouseover="hoverenter($event,3)" v-on:mouseout="hovercome()"  alt="">
                    <img class="list" src="../../assets/wlw1.png" style="top:34%;left:26%" v-on:mouseover="hoverenter($event,3)" v-on:mouseout="hovercome()"  alt="">

                    <!-- 小龙虾 -->
                    <img class="list" src="../../assets/fws2.png" style="top:55%;left:88%" v-on:mouseover="hoverenter($event,4)" v-on:mouseout="hovercome()"  alt="">
                    <img class="list" src="../../assets/fws2.png" style="top:50%;left:84%" v-on:mouseover="hoverenter($event,4)" v-on:mouseout="hovercome()"  alt="">
                    <img class="list" src="../../assets/fws1.png" style="top:42%;left:86%" v-on:mouseover="hoverenter($event,4)" v-on:mouseout="hovercome()"  alt="">
                    <img class="list" src="../../assets/wlw2.png" style="top:46%;left:86%" v-on:mouseover="hoverenter($event,4)" v-on:mouseout="hovercome()"  alt="">
                    <img class="list" src="../../assets/wlw2.png" style="top:49%;left:90%" v-on:mouseover="hoverenter($event,4)" v-on:mouseout="hovercome()"  alt="">
                    <!-- 牛蛙 -->
                    <img class="list" src="../../assets/fws2.png" style="top:32%;left:79%" v-on:mouseover="hoverenter($event,5)" v-on:mouseout="hovercome()"  alt="">
                    <img class="list" src="../../assets/fws2.png" style="top:28%;left:78%" v-on:mouseover="hoverenter($event,5)" v-on:mouseout="hovercome()"  alt="">
                    <img class="list" src="../../assets/wlw2.png" style="top:25%;left:80%" v-on:mouseover="hoverenter($event,5)" v-on:mouseout="hovercome()"  alt="">
                    <div class="song" ref="hoves" >
                        <h3>{{date.name}}</h3>
                        <div class="lists"><span class="label">已捕捞：</span><span class="txt" style="font-size:18px;color:#d43f39;">{{date.puloa}}%</span></div>
                        <div class="lists"><span class="label">预警数量：</span><span class="txt" style="font-size:18px;color:#d43f39;">{{date.onts}}个</span></div>
                        <div class="lists"><span class="label">预警预测点：</span><span class="txt"  style="color:#d9c225;">{{date.yugs}}#传感器</span></div>
                        <div class="lists"><span class="label">水温：</span><span class="txt">34.34℃</span></div>
                        <div class="lists"><span class="label">盐度：</span><span class="txt">12.34ppm</span></div>
                        <div class="lists"><span class="label">氧气含量：</span><span class="txt">12.35mg/L</span></div>
                        <div class="lists"><span class="label">PH值：</span><span class="txt">10.56pH</span></div>
                    </div>
                 </div>
                 <Bottoms v-if="!pahts"/>  
                 <Modal
                    title="摄像头"
                    v-model="modal"
                    :width="1000"
                    class="modalcontent"
                    :mask-closable="false">
                    <!-- muted -->
                    <div class="videos" v-if="modal">
                        <video autoplayloopposter="polina.jpg" class="homePage" @click="videoclick"  ref="homePage"  loop controls autoplay  >
                            <source src="http://218.17.115.158:8888/zcmf-website-business-view/img/website_home.mp4"  type="video/mp4">
                        </video>
                        <!-- <div class="payle"  ref='paylest'>
                            <Icon type="md-play"  class="icon"/>
                        </div> -->
                    </div>
                    <div slot="footer">
                            <button  class="btn-submitst" @click="modal=false">确定</button>
                    </div>
                </Modal>
            </div>
        </section>   
        <!-- -->
    </div>
</template>
<script>
import Top from '../common/top.vue'
import Left from '../common/left.vue'
import Bottoms from '../common/bottom.vue'
export default {
    components: {
        Top,Left,Bottoms
    },
    data(){
        return{
            show:false,
            date:{
                name:'湖蟹基地',
                puloa:'20',
                onts:'12',
                yugs:'10'
            },
            modal:false,
            puis:false,
        }
    },

    computed:{
        shows(){
            return this.$store.getters.showvalid;
        },
        pahts(){
            let uurl=this.$route.path;
            return uurl=='/home' || uurl=='/internetOfThings/timemonitor';
        }
    },
    created(){
       
    },
    methods:{
        hoverenter($event,inx){
            // console.log($event.target.style.top);
            switch(inx)
            {
            case 1:
                this.date={
                    name:'湖蟹基地',
                    puloa:'20',
                    onts:'12',
                    yugs:'10'
                }
            break;
            case 2:
                this.date={
                    name:'竹鼠基地',
                    puloa:'30',
                    onts:'4',
                    yugs:'1'
                }
            break;
            case 3:
                this.date={
                    name:'健康鸡基地',
                    puloa:'40',
                    onts:'6',
                    yugs:'2'
                }
            break;
            case 4:
                this.date={
                    name:'小龙虾基地',
                    puloa:'20',
                    onts:'3',
                    yugs:'2'
                }
            break;
            case 5:
                this.date={
                    name:'牛蛙基地',
                    puloa:'20',
                    onts:'2',
                    yugs:'1'
                }
            break;
            default:
                this.date={
                    name:'湖蟹基地',
                    puloa:'20',
                    onts:'12',
                    yugs:'10'
                }
            }
            this.show=true;
            this.$refs.hoves.style.top=$event.y+10+'px';
            this.$refs.hoves.style.left=$event.x-200+'px';
            this.$refs.hoves.style.display='block';
        },
        hovercome(){
            this.show=false;
            this.$refs.hoves.style.display='none';
        },
        viewmodel(e){
            let clas=e.target.className;
            let pat=this.$route.path;
            if(clas=="list" && pat=='/internetOfThings/timemonitor'){
                 console.log(e.target.className);
                 this.modal=true;
            }
        },
        videoclick(){
            var video1=this.$refs.homePage;
            video1.onclick=function(){
                if(video1.paused){
                    video1.play();
                }else{
                    video1.pause();
                }
            }
        }
        
    }
}
</script>
<style lang="less" >
.modalcontent{
    
    .videos{
        position:relative;
        video{
            width: 996px;
            vertical-align: middle;
            
        }
        .payle{
            position:absolute;
            top:50%;
            left:50%;
            width: 60px;
            height: 60px;
            line-height: 60px;
            margin: -30px  0 0 -30px;
            border: 1px solid #0cd8df;
            text-align: center;
            border-radius: 50%;
            display: none;
            z-index: 9;
            .icon{
                color: #10aebd;
                font-size: 40px;
                vertical-align: middle;
                margin-left: 10px;
            }

        }
        
    }
    .ivu-modal-body{
        padding:2px;
    }
    .ivu-modal-content{
        
        background: #00575f;
        .ivu-modal-header{
            background: #407678;
            border-radius: 6px 6px 0 0;
            
            border-bottom: 1px solid #59a2a4;
            .ivu-modal-header-inner{
                color: #fff;
            }
            
        }
        .ivu-modal-close .ivu-icon-ios-close{
                color: #fff;
            }
        .ivu-modal-footer{
            border-top: 1px solid #59a2a4;
            text-align: center;
        }
    }
        .btn-submitst{
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            width: 96px;
            height: 36px;
            border-radius: 6px;
            border: 1px solid #59a2a4 !important;
            background: rgba(89, 162, 164, 0.2);
            cursor: pointer;
            color: #fff;
            outline: none;
            line-height: 30px;
            text-align: center;
            display: inline-block;
            &:hover{
                background: rgba(89, 162, 164, 0.8);
            }
    }

}
    
</style>


