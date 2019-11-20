<template>
    <div>
        <h1>about 页面</h1>
        <button @click="bok=!bok">点击显示和隐藏</button>
        <!--方法一：<transition name="lei">-->

        <!--方法二：用animate-->
        <transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
            <h2 v-show="bok">你能看见我？</h2>
        </transition>

    </div>

</template>

<script>
    export default {
       data(){
           return {bok:true}
       }
    }
</script>

<style scoped>
    /* 方法一：自己写
    .lei-enter{
         opacity: 0;
     }
     .lei-enter-active{
         transition:all 1s;
         opacity: 1;
     }
    .lei-leave-active{
        transition:all 1s;
        opacity: 0;
    }*/
</style>