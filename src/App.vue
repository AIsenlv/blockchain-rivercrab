<template>
  <div id="app" >
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
<style>
 html,body, #app{
    width: 100%;height: 100%;
 }
</style>
<style lang="less">
@import './icomoon/style.css';
@import './style/theme.less';
@import './style/common.less';
@import './style/index.less';

</style>



