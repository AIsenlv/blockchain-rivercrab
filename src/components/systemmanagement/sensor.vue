<template>
  <div class="right-content">
    <div class="table-wrap sensor">
      <div class="edit-box">
        <table>
          <tr>
            <td>
              水温（℃）
              <span class="high-value">最高值</span>
            </td>
            <td>
              <div class="el-input">
                <input
                  autocomplete="off"
                  type="text"
                  rows="2"
                  validateevent="true"
                  class="el-input__inner"
                >
              </div>
            </td>
            <td>
              <span class="low-value">最低值</span>
            </td>
            <td>
              <div class="el-input">
                <input
                  autocomplete="off"
                  type="text"
                  rows="2"
                  validateevent="true"
                  class="el-input__inner"
                >
              </div>
            </td>
          </tr>
          <tr>
            <td>
              盐度（ppm）
              <span class="high-value">最高值</span>
            </td>
            <td>
              <div class="el-input">
                <input
                  autocomplete="off"
                  type="text"
                  rows="2"
                  validateevent="true"
                  class="el-input__inner"
                >
              </div>
            </td>
            <td>
              <span class="low-value">最低值</span>
            </td>
            <td>
              <div class="el-input">
                <input
                  autocomplete="off"
                  type="text"
                  rows="2"
                  validateevent="true"
                  class="el-input__inner"
                >
              </div>
            </td>
          </tr>
          <tr>
            <td>
              PH值（pH）
              <span class="high-value">最高值</span>
            </td>
            <td>
              <div class="el-input">
                <input
                  autocomplete="off"
                  type="text"
                  rows="2"
                  validateevent="true"
                  class="el-input__inner"
                >
              </div>
            </td>
            <td>
              <span class="low-value">最低值</span>
            </td>
            <td>
              <div class="el-input">
                <input
                  autocomplete="off"
                  type="text"
                  rows="2"
                  validateevent="true"
                  class="el-input__inner"
                >
              </div>
            </td>
          </tr>
          <tr>
            <td>
              溶解氧（mg/L）
              <span class="high-value">最高值</span>
            </td>
            <td>
              <div class="el-input">
                <input
                  autocomplete="off"
                  type="text"
                  rows="2"
                  validateevent="true"
                  class="el-input__inner"
                >
              </div>
            </td>
            <td>
              <span class="low-value">最低值</span>
            </td>
            <td>
              <div class="el-input">
                <input
                  autocomplete="off"
                  type="text"
                  rows="2"
                  validateevent="true"
                  class="el-input__inner"
                >
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="4">
              <button class="btn-submit">确定</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<style lang="less">
    .sensor{
        .edit-box{
            height: 880px;
            background-color: rgba(17, 22, 29, .4);
            border: 1px solid #263141;
            overflow-y: auto;
             table{
                width: 80%;
                height: 400px;
                margin: 10% auto 0;
                color: #789dd5;
                
                input{width: 90%;padding: 5px;height: 34px}
                    td{
                        padding-top: 10px;
                        padding-bottom: 10px;
                        &:first-child {
                        min-width: 80px;
                        width: 20%;
                        .high-value,.low-value{
                            display: inline-block;
                            float: right;
                            padding-right: 20px;
                        }
                        .el-input {
                            position: relative;
                            font-size: 14px;
                            
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
                            width: 120px;
                            text-align: center;
                            margin: 0 auto;
                            display: block;
                            line-height: 30px;
                        }
                    }
                }
                
            }
        }
    }
    
</style>
