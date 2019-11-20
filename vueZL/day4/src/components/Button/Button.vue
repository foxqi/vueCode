<template>
    <button><slot></slot></button>
</template>

<script>
    export default {
        name: "Button"
    }
</script>

<style scoped>
 button{
     width: 150px;
     height: 40px;
     line-height: 40px;
     background: pink;
     color: #fff;
     border-radius: 10px;
 }
</style>