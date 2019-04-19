<template>
  <div class="home">
    
    <register-first></register-first>
  </div>
</template>

<script>
// @ is an alias to /src
import registerFirst from '@/components/registerFirst.vue'
//import registerSecond from '@/views/registerSecond.vue'
export default {
  name: 'home',
  components: {
    registerFirst,
  }
}
</script>
