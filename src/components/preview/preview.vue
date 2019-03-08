<template>
    <div class="centions">
        <!-- 头部 -->
        <top/>
        <!-- 主体 -->
        <section class="section">
            <!-- 左菜单 -->
            <left/>
            <div class="right-content">
                 <router-view></router-view>
            </div>
        </section>   
        <Bottoms/> 
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
}
</script>

