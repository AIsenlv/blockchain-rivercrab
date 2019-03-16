<template>
  <div class="right-content">
    <div class="content">
      <div class="div_info">
        <div class="div_title">
          <div class="div_titlemsg">企业基本信息</div>
        </div>
        <div class="div_edit">
          <div class="row_edit">
            <div class="row_title">企业名称：</div>
            <input placeholder class="txt_input txt_simple" v-model="formline.name">
            <div class="err_info" style="display: none;">*</div>
          </div>
          <div class="row_edit">
            <div class="row_title">企业地址：</div>
            <input class="txt_input txt_simple" v-model="formline.dizhi">
            <div class="err_info" style="display: none;">*</div>
          </div>
          <div class="row_edit">
            <div style="float: left; width: 45%; height: 32px;">
              <div class="row_title" style="width: 22%;">企业法人：</div>
              <input class="txt_input txt_simple" style="width: 65%;">
            </div>
            <div style="float: left; width: 45%; height: 32px;">
              <div class="row_title" style="width: 20%;">联系电话：</div>
              <input class="txt_input txt_simple" style="width: 69%;" v-model="formline.phone">
            </div>
          </div>
          <div class="row_edit">
            <div style="float: left; width: 45%; height: 32px;">
              <div class="row_title" style="width: 22%;">联系人：</div>
              <input class="txt_input txt_simple" style="width: 65%;" >
            </div>
            <div style="float: left; width: 45%; height: 32px;">
              <div class="row_title" style="width: 20%;">网址：</div>
              <input class="txt_input txt_simple" style="width: 69%;">
            </div>
          </div>
          <div class="row_edit">
            <div class="row_title">企业介绍：</div>
            <textarea class="txt_input txt_area" style="width: 75%;" v-model="formline.text"></textarea>
          </div>
        </div>
        <div class="div_logo">
          <div class="div_logoleft">
            <div class="logo_ltitle">企业logo</div>
            <div class="div_logoimg">
              <img
                src="https://result.eolinker.com/H3zvIFmfb84d1f49ce545abab63ab3fdd24e337cbe7eacc?uri=/files/2017/12/14/91e37eca-a43f-45e1-b135-6588db104698.jpg"
                class="img_logo"
              >
              <div class="logo_sheder logo_hover">
                <i class="deleteimg"></i>
              </div>
            </div>
            <div class="div_ctrlupload">
              <div class="avatar-uploader">
                <div class="el-upload el-upload--text">
                     <Upload action="//jsonplaceholder.typicode.com/posts/" :show-upload-list="false">
                        <button
                            type="button"
                            class="el-button btn_logoupload el-button--primary el-button--small"
                        >
                            <!---->
                            <!---->
                            <span>+ 上传</span>
                        </button>
                     </Upload>
                </div>
              </div>
            </div>
          </div>
          <div class="div_logoright">
            <div class="logo_rtitle">上传logo可用于溯源码，示例：</div>
            <img
              src="data:image/png;base64,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"
              class="img_QRcode"
            >
            <img
              src="https://result.eolinker.com/H3zvIFmfb84d1f49ce545abab63ab3fdd24e337cbe7eacc?uri=/files/2017/12/14/91e37eca-a43f-45e1-b135-6588db104698.jpg"
              class="logo_QRcode"
            >
          </div>
        </div>
      </div>
      <div class="div_entquality" style="width: 100%; height: 100%;">
        <div class="div_title">
          <div class="div_titlemsg">企业资质信息</div>
        </div>
        <div class="div_rowdetail" v-for="(item,inx) in dataline" :key="item.id">
          <div class="div_detail">
            <div class="row_detailedit">
              <div class="detail_title">资质证书名称：</div>
              <input placeholder class="txt_input txt_detail">
            </div>
            <div class="row_detailedit">
              <div class="detail_title">附件：</div>
              <div class="detail_upload" style="overflow: hidden;">
                <div class="div_detailimg" v-for="itemimg in item.arr" :key="itemimg.id">
                  <img
                    :src="itemimg"
                    class="detail_img"
                  >
                  <div class="img_sheder img_hover">
                    <i class="deleteimg"></i>
                  </div>
                </div>
                
              </div>
              <div class="btn_imgupload">
                <div class="avatar-uploader">
                  <div class="el-upload el-upload--text">
                      <Upload action="//jsonplaceholder.typicode.com/posts/" :show-upload-list="false">
                    <button
                      type="button"
                      class="el-button btn_logoupload el-button--primary el-button--small"
                    >
                      <span>+ 上传</span>
                    </button>
                      </Upload>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="div_op">
            <div class="div_btnop">
                <Icon type="md-add" class="iconfont icon-add btn_op" @click="adddeis(1,inx)"/>
            </div>
            <div class="div_btnop">
                <Icon type="ios-trash" class="iconfont icon-shanchu btn_op" @click="adddeis(2,inx)"/>
            </div>
          </div>
        </div>
        
      </div>
      <div class="div_clickbtn">
        <div class="clickbtn confirm">提交</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            dataline:[
                {name:'',arr:['','']}
            ],
            formline:{
                name:'中琛源科技股份有限公司',
                dizhi:'深圳湾生态园',
                phone:'18175786546',
                
            }
        }
    },
    methods:{
        adddeis(i,inx){
            if(i==1){//加
                this.dataline.push({name:'',arr:[]});
            }else{//减
                this.dataline.splice(inx,1);
            }
        }
    }
}
</script>

<style lang="less" scoped>
button:focus{outline:none;}
.right-content .content {
    .div_title {
      font-size: 16px;
      width: 100%;
      height: 46px;
      background: rgba(51, 64, 85, 0.4);
      line-height: 46px;
      padding-left: 32px;
      .div_titlemsg {
        color: #8eb5ef;
        float: left;
      }
    }
  .div_info {
    width: 100%;
    height: 100%;
    border: 1px solid #232d3c;
    overflow: hidden;
    margin-bottom: 20px;
    
    .div_edit {
      width: 80%;
      height: 100%;
      margin: 0 auto;
      margin-top: 52px;
      min-width: 600px;
      overflow: hidden;
      .row_edit {
        min-width: 500px;
        margin-top: 25px;
        height: 32px;
        .row_title {
          color: #789ed5;
          font-size: 14px;
          float: left;
          line-height: 32px;
          width: 10%;
          text-align: right;
        }
        .txt_input {
          margin-left: 20px;
          border: 1px solid #384a68;
          border-radius: 6px;
          background: #192333;
          box-sizing: border-box;
          padding: 0 10px;
          outline: none;
          color: #fff;
          float: left;
          font-size: 14px;
        }
        .txt_simple {
          height: 32px;
          width: 75%;
        }
        .txt_area {
          height: 137px;
          padding: 10px;
          line-height: 18px;
          resize: none;
        }
      }
    }
    .div_logo {
      width: 60%;
      height: 300px;
      border: 1px solid #1f2836;
      background: #10151c;
      box-sizing: border-box;
      margin-top: 35px;
      margin-left: 19%;
      margin-bottom: 32px;
      .div_logoleft,
      .div_logoright {
        float: left;
        width: 50%;
        height: 100%;
        .logo_ltitle,
        .logo_rtitle {
          margin-left: 140px;
          margin-top: 50px;
          font-size: 14px;
          color: #8eb5ef;
        }
        .logo_ltitle {
          float: left;
          width: 80px;
        }
        .div_logoimg{
            width: px;
            height: 126px;
            margin-left: 21%;
            background: #182232;
            border: 1px solid #394d6e;
            margin-top: 28px;
            float: left;
            position: relative;
            &:hover{
                .logo_sheder{
                    display: block;
                }
            }
            .img_logo {
                width: 164px;
                height: 126px;
                background: #182232;
                border: 1px solid #394d6e;
                float: left;
                margin: -1px;
            }
        }
        .div_ctrlupload {
            float: left;
            margin-left: 18px;
            margin-top: 75px;
            .el-upload__input {
                display: none;
            }
           
            
        }
        .div_ctrlupload {
            float: left;
            margin-left: 18px;
            margin-top: 75px;
            .el-upload {
                display: inline-block;
                text-align: center;
                cursor: pointer;
                
               
               
            }
        }
        
      }
      .div_logoright {
            position: relative;
             .logo_ltitle, .logo_rtitle {
                    margin-left: 140px;
                    margin-top: 50px;
                    font-size: 14px;
                    color: #8eb5ef;
                    
            }
            .img_QRcode {
                width: px;
                height: 126px;
                margin-left: 160px;
                margin-top: 28px;
            }
            .logo_QRcode {
                position: absolute;
                z-index: 10;
                left: 221px;
                top: 136px;
                width: 48px;
                height: 43px;
            }
            
        }
    }
  }
   .el-button {
        height: 32px;
        width: 136px;
        padding: 0;
        border:0;
        cursor: pointer;
        text-align: center;
        margin: 0;
        background: linear-gradient(90deg, #0683e4, #055cac);
    }
    .logo_sheder {
        display: none;
        background: rgba(0, 0, 0, .5);
        position: absolute;
        width: 165px;
        height: 127px;
        .deleteimg {
            cursor: pointer;
            float: right;
            width: 27px;
            height: 27px;
            background: url('../../assets/sidn.png');
        }
    }
    .btn_logoupload {
        font-size: 14px;
        width: 96px;
        height: 32px;
    }
    .el-button--small {
        padding: 7px 9px;
        font-size: 12px;
        border-radius: 4px;
    }
  .div_entquality {
        width: 100%;
        height: 100%;
        border: 1px solid #232d3c;
        overflow: hidden;
        margin-bottom: 20px;
        .div_op {
            width: 60px;
            float: left;
            margin-top: 90px;
            color: #6b9cd4;
            .div_btnop {
                width: 100%;
                height: 50%;
                text-align: center;
                line-height: 70px;
                cursor: pointer;
                .btn_op {
                    font-size: 16px;
                }
                
            }
        }
        .div_detail {
            background: #10161c;
            width: 60%;
            min-width: 675px;
            border: 1px solid #2f3c4f;
            margin-left: 19%;
            margin-top: 30px;
            margin-bottom: 18px;
            float: left;
            .row_detailedit {
                margin: 0 auto;
                margin-top: 25px;
                width: 600px;
                overflow: hidden;
                .detail_title {
                    color: #789ed5;
                    font-size: 14px;
                    float: left;
                    line-height: 32px;
                    width: 98px;
                    text-align: right;
                }
                .txt_input {
                    margin-left: 20px;
                    border: 1px solid #384a68;
                    border-radius: 6px;
                    background: #192333;
                    box-sizing: border-box;
                    padding: 0 10px;
                    outline: none;
                    color: #fff;
                    float: left;
                    font-size: 14px;
                }
                .el-upload {
                    display: inline-block;
                    text-align: center;
                    cursor: pointer;
                }
                .txt_detail {
                    float: left;
                    height: 32px;
                    width: 409px;
                }
                .row_detailedit {
                    margin: 0 auto;
                    margin-top: 25px;
                    width: 600px;
                    overflow: hidden;
                }
                .detail_upload {
                    float: left;
                    width: 465px;
                    margin-left: 5px;
                    min-height: 105px;
                    margin-bottom: 20px;
                    .div_detailimg {
                        position: relative;
                        float: left;
                        overflow: hidden;
                        margin-left: 15px;
                        margin-bottom: 15px;
                        .detail_img {
                            float: left;
                            width: 128px;
                            height: 90px;
                        }
                        &:hover{
                            .img_sheder{
                                display: block;
                            }
                        }
                    }
                    .img_sheder{
                        display: none;
                        background: rgba(0, 0, 0, .5);
                        position: absolute;
                        width: 128px;
                        height: 90px;
                        top: 0;
                        .deleteimg {
                            cursor: pointer;
                            float: right;
                            width: 27px;
                            height: 27px;
                            background: url('../../assets/sidn.png');
                        }
                    }
                }
                .btn_imgupload {
                    height: 100%;
                    width: 100px;
                    margin-left: 210px;
                    margin-bottom: 15px;
                }
            }
        }
    }
    .div_clickbtn {
        font-size: 16px;
        height: 36px;
        margin: 0 auto;
        margin-top: 40px;
        width: 300px;
        line-height: 34px;
        .confirm {
            height: 36px;
            float: left;
            border: 1px solid #ff8300;
            background: linear-gradient(90deg, #ee9008, #b25e04);
        }
        .clickbtn {
            text-align: center;
            border-radius: 5px;
            width: 130px;
            box-sizing: border-box;
            cursor: pointer;
        }
    }
}
</style>
