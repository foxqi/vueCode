<template>
<div>
  计数器：<button @click="minusJ">-</button>
  <br>
  当前：{{$store.state.count}}
  <br>
  计数器：<button @click="addD">+</button>

  {{$store.getters.val}}
</div>
</template>

<script>
  import * as Types from '../store/mutations-type.js';
    export default {
        data(){
          return {
            count:0
          }
        },
      methods:{
        addD(){
          //提交add的mutation, 方法名  载荷payload
          this.$store.commit(Types.INCREMENT,2);//找store中的add
        },
        minusJ(){
          //提交add的mutation, 方法名  载荷payload
          this.$store.commit(Types.DECREMENT,2);//找store中的add
        }
      }

    }
</script>

<style scoped>

</style>
