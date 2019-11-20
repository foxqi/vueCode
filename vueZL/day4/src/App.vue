<template>
  <div>
    <h1>{{msg1}}</h1>
    <Home></Home>
    <Navs></Navs>
  </div>

</template>

<style>
div{
  background: #eee;
}
</style>

<script>
  //导入home组件
  import Home from './components/Home.vue';
  import Navs from './components/Navs.vue';
  export default{
    data(){
        return {msg1:'hahah'}
      },
      components:{Home,Navs},
      created(){
       /* this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',{
            params:{
                wd:'chuqiaozhuan'
            },
            jsonp:'cb'
        }).then(res=>{
            console.log(res.body.s)
        })*/
       this.$http.get('https://api.github.com/users/yuanmengyuan')
           .then(res=>{
               // console.log(res.body) //resource用body
               console.log(res.data) //axios用data
           })
      }
  }
</script>


