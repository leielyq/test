<template>
    <div class="content">
      <res-header></res-header>
      <div>
        <div class="intro">
          <p>请填写你的邮箱</p>
          <p>作为您账号的主要身份验证</p>
        </div>
        <div class="register-input">
          <div class="email-input">
            <span class="pre-input">国家</span>
            <div class="address">
            <!--城市选择器-->
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="country in countries"
                :key="country.id"
                :label="country.name"
                :value="country.id">
              </el-option>
            </el-select>
            </div>
          </div>
          <br>
          <div class="email-input">
            <span class="pre-input">邮箱</span><el-input class="input-content" v-model="email" placeholder="请填写你的邮箱"></el-input>
          </div>
          <br/>
          <el-button class="aquire" size="mini">获取验证码</el-button>
           <div class="email-input">
            <span class="pre-input">验证码</span><el-input class="input-content" v-model="code" placeholder="请输入你收到的验证码"></el-input>
          </div>
        </div>
        <el-button class="btn-next" type="primary">下一步</el-button>
      </div>
    </div>
</template>

<script>
import resHeader from '@/components/resHeader.vue'
import VDistpicker from 'v-distpicker'
export default {
    name:'registerSecond',
    props: ['cites'],
    data(){
      return {
        email:'',
        code:'',
        countries: [
          {
            id: 1,
            name: 'China'
          },
          {
            id: 2,
            name: 'America'
          }
        ],
        value: '',
        
      }
    },
    components:{
        resHeader,
        VDistpicker
    },
    
    methods:{
    }

}
</script>

<style lang="stylus" scoped>
.content
  .intro
    height :165px
    text-align :center
    padding-top :60px
  .register-input
    position :relative
    .address
      text-align :center
    .email-input
      display :flex
      .pre-input
        width :70px
        text-align :center
        line-height :40px
      .input-content
        flex:1
    .aquire
      position :absolute
      right :10px
      top :63px
  .btn-next
    position :absolute
    left:10%
    bottom :30%
    width :80%
    
</style>
