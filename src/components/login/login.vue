<template>
     <div class="login">
         <div class="txtlogo">水产养殖标准化生产溯源平台</div>
         <div class="img"><img src="../../assets/login.4fcb9bc.png" alt=""></div>
         <div class="form">
             <div data-v-7915acaa="" class="lb-header">
                用户登录
            </div>
            <Form ref="formdata" class="cen" :model="formdata" :rules="ruleInline" inline>
                        <FormItem prop="user">
                            <Input type="text" class="lb-cont-p" v-model="formdata.user"  @on-focus="" @on-change="" placeholder="请输入邮箱/手机号">
                                <Icon type="ios-person-outline" slot="prepend"></Icon>
                            </Input>
                        </FormItem>
                        <FormItem prop="password" >
                            <Input type="password" class="lb-cont-p" v-model="formdata.password"  @on-focus="" @on-change="" placeholder="请输入密码">
                                <Icon type="ios-lock-outline" slot="prepend"></Icon>
                            </Input>
                        </FormItem>
                        <!-- <FormItem prop="verify" :class="!verifyback1?'verify':'verify verifyactive'" v-show="!btntypes">
                        <Input    v-model="formdata.verify" placeholder="请输入验证码">
                            <Icon type="ios-lock-outline" class="icon-15" slot="prepend"></Icon>
                            <span class="but-verify"  slot="append" @click="btnverify(1)" >{{verifytxt}}</span>
                        </Input> -->
                        <!--  <span class="but-verify" >获取验证码</span>-->
                    </FormItem>
                        <FormItem>
                            <Button type="primary" class="login-btn"  @click="handleSubmit('formdata')">登&nbsp;录</Button>                            
                        </FormItem>
            </Form>
         </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            formdata:{
                user:'',
                password:''
            },
            ruleInline:{
                user:[],
                password:[]
            }
        }
    },
    methods:{
        handleSubmit(data) {
            this.$refs[data].validate((valid) => {
                this.$router.push({path:'/home'});
            })
        }
    }
}
</script>


<style lang="less">
    .login{
        min-width: 100%;
        height: 100%;
        padding-top: 8%;
        position: relative;
        overflow: hidden;
        background: url(../../assets/login-bg.01dba20.jpg)no-repeat;
        background-size: 100% 100%;
        .ivu-icon:before{
            font-weight: bold;
            font-size: 20px;
            }
        .txtlogo{
            position: absolute;
            top: 150px;
            left: 150px;
            color: @fff;
            background: url(../../assets/123.png)no-repeat  0 0;
            background-size: 95px;
            line-height: 75px;
            text-indent: 80px;
            font-size: 30px;
        }
        .img{
            position: absolute;
            left: 20%;
            top: 30%;
            width: 35%;
            z-index: 99;
            img{width: 100%}
        }
        .form{
                width: 360px;
                height: 386px;
                position: absolute;
                right: 10%;
                top: 30%;
                background: url(../../assets/login-block.155203f.png) no-repeat;
                background-size: 100% 100%;
                text-align: center;
                .cen{
                    padding: 30px 0;
                }
                .lb-header{
                    height: 70px;
                    border-bottom: 1px solid rgba(80, 100, 123, .5);
                    font-size: 22px;
                    text-align: center;
                    line-height: 70px;
                    color: #bed8ff;
                }
                .lb-cont-p{
                        width: 290px;
                        height: 38px;
                        outline: none;
                        margin-top: 10px;
                }
                .login-btn{
                        width: 290px;
                        height: 44px;
                        margin: 0 auto;
                        margin-top: 50px;
                        cursor: pointer;
                        border: none;
                        border-radius: 5px;
                        background: linear-gradient(180deg, #5d7cab, #304565);
                        color: #fff;
                        font-size: 18px;
                        letter-spacing: 10px;
                        outline: none;
                        box-shadow:none;
                }
            }
     }
</style>

