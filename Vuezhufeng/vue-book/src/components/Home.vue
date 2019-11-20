<template>
  <div>
    <MHeader>首页</MHeader>
    <div class="content">
      <Loading v-if="loading"></Loading>
      <template v-else>
        <Swiper :swiperSlides="sliders"></Swiper>
        <div class="container">
          <h3>热门图书</h3>
          <ul>
            <li v-for="hot in hotBooks">
              <img :src="hot.bookCover">
              <b>{{hot.bookName}}</b>
            </li>
          </ul>
        </div>
      </template>

    </div>

  </div>
</template>

<script>
  //1.引入组件 2.注册组件 3.使用组件
  import MHeader from '../base/MHeader.vue';
  import Swiper from '../base/Swiper.vue';
  //这里也不需要了
  //import {getSliders,getHotBook} from "../api";//不用写index.js
  import {getAll} from "../api";
  import Loading from '../base/Loading.vue';
  export default {
      // created(){
      //    getSliders();
      // },
      //上面写成语法糖
      created(){
        //因为写了loading加载方法，所以下面不需要了
      /*  this.getSlider();//获取轮播图
        this.getHot();//获取最新图书*/
        this.getData();
      },
      data(){
        return {
          sliders:[],
          hotBooks:[],
          loading:true
        }
      },
      methods:{


      /*  因为上面不在调用，所以也不需要了
        //不在created写太多逻辑，否则很复杂，所以获取数据方法放在这里
        async getSlider(){
           // let res=await getSliders();
           // console.log(res)
           //let {data}=await getSliders();//这样直接可以拿到res.data,如果写成data:sliders，就是给data改属性名
           //给data起别名，对象中的属性名字必须和得到的结果名字一致
           //await只跟promise实例

           // let {data:sliders}=await getSliders();
           // // console.log(sliders)
           // //将获取的数据放到sliders中
           // this.sliders=sliders;

         //  当拥有拦截器之后
          this.sliders=await getSliders();
         },
        async getHot(){
          //  当拥有拦截器之后
          this.hotBooks=await getHotBook();

        }*/

        async getData(){
          let [sliders,hotBooks] = await getAll();//它里面放的是数组[sliders,books]
          this.sliders=sliders;
          this.hotBooks=hotBooks;
          //...轮播图和热门图书已经获取完成
          this.loading=false;
        }
      },
      components:{
        MHeader,
        Swiper,
        Loading
      }
    }
</script>

<style scoped lang="less">
  h3{
    color: #999;
    padding: 5px 0;
  }
 .container{
   width: 90%;
   margin:  0 auto;
   ul{
     display: flex;
     flex-wrap:wrap;/*默认不换行*/
     padding-bottom: 10px;
     li{
       width: 50%;
       text-align: center;
       margin: 5px 0;
       img{
         width: 100%;
       }
     }
   }
 }
</style>
