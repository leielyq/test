<template>
    <div class="content">
        <res-header></res-header>
        <div class="content-detail">
            <p>开始注册</p>
            <p>欢迎使用TChat</p>
        </div>
        <el-button class="btn-next" type="primary" @click="registerDetail">下一步</el-button>
    </div>
</template>

<script>
import resHeader from './resHeader.vue'
export default {
    name:'registerFirst',
    components:{
        resHeader
    },
    methods:{
        registerDetail(){
            this.$router.push({ name:'registerSecond', params:{id:'2'}})
        }
    }
}
</script>

<style lang="stylus" scoped>
.content
    text-align :center
    .content-detail
        margin-top :40%
    .btn-next
        margin-top:30%
        width :80%
</style>
