<template>
    <div>
        <h1>{{msg}} 页面</h1>
        <p>我是用less设置的样式</p>
        <lei-button>这是home的按钮</lei-button>
    </div>
</template>

<script>
    export default {
        data(){
            return {msg:'home'}
        }
    }
</script>

<!--scoped 私有域   lang="less"代表的是语言  rel="stylesheet"关联的是什么类型-->
<style scoped lang="less" rel="stylesheet">
div{
    background:lightblue;
    p{
        background: green;
        height: 40px;
        line-height: 40px;
        color:#fff;
        position: relative;
        &::after{
            position: absolute;
            content: '';
            width: 20px;
            height: 20px;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            border-radius: 50%;
            background: pink;
        }
    }
}
</style>