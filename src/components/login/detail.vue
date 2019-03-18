<template>
  <div class="detail">
    <top></top>
    <div class="cont-wrap">
      <div class="header">查看个人信息</div>
      <div class="content">
        <div class="center-cont">
          <div class="cont-p">
            <div class="span_wrap">
              <span class="list-name">用户名 :</span>
              <span>huijia</span>
            </div>
            <div class="span_wrap">
              <span class="list-name">姓名 :</span>
              <span>中琛源</span>
            </div>
          </div>
          <div class="cont-p">
            <div class="span_wrap">
              <span class="list-name">当前状态 :</span>
              <span>xxx</span>
            </div>
            <div class="span_wrap">
              <span class="list-name">角色 :</span>
              <span>xxx</span>
            </div>
          </div>
          <div class="cont-p">
            <div class="span_wrap">
              <span class="list-name">手机 :</span>
              <span>xxx</span>
            </div>
            <div class="span_wrap">
              <span class="list-name">性别 :</span>
              <span>xxx</span>
            </div>
          </div>
          <div class="cont-p">
            <div class="span_wrap">
              <span class="list-name">邮箱 :</span>
              <span>xxx@qq.com</span>
            </div>
            <div class="span_wrap">
              <span class="list-name">所属机构 :</span>
              <span>xxx</span>
            </div>
          </div>
          <div class="cont-p">
            <div class="span_wrap span_wrap_big">
              <span class="list-name">地址 :</span>
              <span>xxx</span>
            </div>
          </div>
          <div class="cont-p">
            <div class="span_wrap span_wrap_big">
              <span class="list-name">备注 :</span>
              <span>xxx</span>
            </div>
          </div>
          <div class="cont-p btns">
            <button class="btn-cancel" @click="back">返回</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Top from "../common/top.vue";
export default {
  components: {
    Top
  },
  methods:{
      back(){
          this.$router.back(-1)
      }
  }
};
</script>
<style lang="less" scoped>
.cont-wrap {
  box-sizing: border-box;
  border: 1px solid #2b3648;
  margin-bottom: 30px;
  .header {
    background: rgba(51, 64, 85, 0.5);
    height: 46px;
    line-height: 46px;
    box-sizing: border-box;
    border-bottom: 1px solid #2b3648;
    color: #bcd7ff;
    text-indent: 30px;
  }
  .center-cont {
    width: 815px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 150px 0;
    .cont-p {
      line-height: 60px;
      overflow: hidden;
    }
    .span_wrap {
      float: left;
      width: 50%;
      box-sizing: border-box;
      padding-left: 90px;
      color: #d3e9ff;
      .list-name {
        color: #83ace8;
        margin-right: 18px;
        display: inline-block;
        width: 80px;
        text-align: right;
      }
    }
  }

  .cont-p {
    line-height: 60px;
    overflow: hidden;
  }
  .btns {
    text-align: center;
    margin: 40px 0;
  }

  .btn-cancel {
    box-sizing: border-box;
    height: 36px;
    border: 1px solid #424e64;
    border-radius: 6px;
    background: linear-gradient(90deg, #282e3a, #20262f);
    cursor: pointer;
    color: #fff;
    text-align: center;
    outline: none;
    line-height: 30px;
  }
  .btns > button {
    width: 130px;
  }
}
</style>
