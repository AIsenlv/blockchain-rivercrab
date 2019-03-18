<template>
  <div class="detail">
    <top></top>
    <div class="cont-wrap">
      <div class="header">修改密码</div>
      <div class="content">
        <div class="center-cont">
          <div class="cont-p">
            <span class="list-name">您的用户名 :</span>
            <div class="big-ipt">
              <span class="ad-name">hujie</span>
            </div>
          </div>
          <div class="cont-p">
            <span class="list-name">请输入旧密码 :</span>
            <div class="big-ipt">
              <div class="el-input">
                <!---->
                <!---->
                <input
                  autocomplete="off"
                  type="password"
                  rows="2"
                  validateevent="true"
                  class="el-input__inner"
                >
                <!---->
                <!---->
              </div>
            </div>
            <div class="notNull">*</div>
          </div>
          <div class="cont-p">
            <span class="list-name">请输入新密码 :</span>
            <div class="big-ipt">
              <div class="el-input">
                <!---->
                <!---->
                <input
                  autocomplete="off"
                  type="password"
                  rows="2"
                  validateevent="true"
                  class="el-input__inner"
                >
                <!---->
                <!---->
              </div>
            </div>
            <div class="notNull">*</div>
          </div>
          <div class="cont-p">
            <span class="list-name">再次输入密码 :</span>
            <div class="big-ipt">
              <div class="el-input">
                <!---->
                <!---->
                <input
                  autocomplete="off"
                  type="password"
                  rows="2"
                  validateevent="true"
                  class="el-input__inner"
                >
                <!---->
                <!---->
              </div>
            </div>
            <div class="notNull">*</div>
          </div>
          <div class="btns">
            <button class="btn-submit">提交</button>
            <button class="btn-cancel" @click="back">取消</button>
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
  methods: {
    back() {
      this.$router.back(-1);
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
    width: 925px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 150px 0;
    .cont-p {
      height: 60px;
      line-height: 60px;
      padding-left: 180px;
      .list-name {
        color: #83ace8;
        margin-right: 18px;
        display: inline-block;
        width: 100px;
        text-align: right;
      }
      .big-ipt {
        display: inline-block;
        width: 418px;
        position: relative;
        .el-input,
        .el-input__inner {
          width: 100%;
          display: inline-block;
        }
        
        .cont-p {
          height: 60px;
          line-height: 60px;
          padding-left: 180px;
        }
      }
      .notNull {
          display: inline-block;
          color: #db4041;
          vertical-align: middle;
          font-weight: 700;
          font-size: 18px;
          margin-left: 12px;
        }
      .el-input__inner {
          padding: 3px 10px;
        height: 32px;
        background: #1d293c;
        border: 1px solid #6184bf;
        color: #fff;
        opacity: 1;
      }
    }
  }
  .btns {
    overflow: hidden;
    padding-left: 280px;
    margin: 50px 0;
  }
  .btn-submit {
    box-sizing: border-box;
    height: 36px;
    border: 1px solid #ff9600;
    border-radius: 6px;
    background: linear-gradient(90deg, #ee9008, #b25e04);
    cursor: pointer;
    color: #fff;
    outline: none;
    line-height: 30px;
  }

  .btn-cancel {
    box-sizing: border-box;
    height: 36px;
    border: 1px solid #424e64;
    border-radius: 6px;
    background: linear-gradient(90deg, #282e3a, #20262f);
    cursor: pointer;
    color: #fff;
    outline: none;
    line-height: 30px;
  }
  .btns > button {
    float: left;
    text-align: center;
    width: 130px;
    margin: 0 20px;
  }
}
</style>
