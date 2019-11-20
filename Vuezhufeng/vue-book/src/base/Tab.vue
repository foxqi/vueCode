<template>
    <div class="footer">
      <router-link to="/home">
        <i class="iconfont icon-shouyeshouye"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/list">
        <i class="iconfont icon-liebiaoyemian"></i>
        <span>列表</span>
      </router-link>
      <router-link to="/collect">
        <i class="iconfont icon-shoucang"></i>
        <span>收藏</span>
      </router-link>
      <router-link to="/add">
        <i class="iconfont icon-add"></i>
        <span>添加</span>
      </router-link>
    </div>
</template>

<script>

</script>

<style scoped lang="less">
/*  div{
    display: flex;
    flex-direction: row/column;
    justify-content: center 垂直居中;
    align-items:center横向居中；
    flex: 1 每份占1;
   }

   /home  /home               /home/a /home
   router-link-exact-active  router-link-active都可以默认样式

   */
  .footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    display: flex;
    border-top: 1px solid #ccc;
    a{
      color:yellowgreen;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex: 1;
    }
    a.router-link-active{
      color: red;
    }
  }
</style>
