<template>
    <div>
        <router-link to="/home">home</router-link>
        <router-link to="/about">about</router-link>
        <router-link to="/contact">contact</router-link>
        <transition enter-active-class="animated fadeInUp" leave-active-class="hide">
            <router-view></router-view>
        </transition>

    </div>
</template>

<script>
    // export default {
    //     name: "Navs"
    // }
</script>

<style scoped>
  .router-link-active{
      background: red;
      padding: 10px;
  }
    .hide{
        display: none;
    }
</style>