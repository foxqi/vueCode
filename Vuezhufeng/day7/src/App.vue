<template>
    <div>
      {{msg}}
      <!--<router-view></router-view>-->
        <button @click="show">notify</button>
    </div>
</template>

<script>
    // import Vue from 'vue';
    export default {
        methods:{
          show(){
              this.$notify('我很丑',{delay:1000});
              // Vue.say()
          }
        },
        data(){
            return {msg:'hello'}
        }
    }
</script>

<style scoped>

</style>