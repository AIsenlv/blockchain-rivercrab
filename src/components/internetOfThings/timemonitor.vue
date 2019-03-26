<template>
   <div class="right-content">
    <div class="content">
     <div class="con-form">
        <div class="dateback">
            <div class="txt">
                <img src="../../assets/lefts.png" alt=""><span> 今日预警 </span><img src="../../assets/rights.png" alt="">
            </div>
            <div class="centxt">
                <div>10:20:00 &nbsp;&nbsp; 水温35℃</div>
                <div>12:20:00 &nbsp;&nbsp; PH高于8</div>
                <div>14:40:00 &nbsp;&nbsp; 酸碱度大于23ML</div>
            </div>
        </div>
       <div  class="el-form-item last-item item" style="float:right">
          <div class="el-form-item__content" >
            <button  class="search btn-submit">增加摄像头</button>
            <button  class="search btn-submit">增加传感器</button>
            <button  class="search btn-submit">调整设备</button>
          </div>
        </div>
    </div>
       </div>
    </div>
</template>
<style lang="less" scoped>
    .con-form{
        position: relative;
        z-index: 15;
    }
    .dateback{
        width:405px;
        height: 185px;
        float: left;
        background: url('../../assets/dateback.png')no-repeat center;
        background-size: 100% 100%;
        padding: 25px 50px;
        .txt{
            text-align: center;
            span{ vertical-align: middle;}
            img{
                width: 90px;
                vertical-align: middle;
            }
        }
        .centxt{
            line-height: 35px;
            padding-left: 45px;
            margin-top: 5px;
        }
    }
</style>

