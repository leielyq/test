<template>
  <div class="res-header">
    <div class="el-icon-arrow-left" @click="backFirst"></div>
    <div class="title">注册</div>
  </div>
</template>

<script>
export default {
  name: 'resHeader',
  props: {
    msg: String
  },
  components:{
    
  },
  methods:{
    backFirst(){
      this.$router.push({ name:'home', params:{id:'2'}})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.res-header
  background :#F58020
  display :flex
  justify-content: flex-start
  height :80px
  .title,.el-icon-arrow-left
    line-height :80px
    color :white
    font-size :24px
    text-align :center
  .title
    margin-left :35%
  .el-icon-arrow-left
    margin-left :10px
</style>
