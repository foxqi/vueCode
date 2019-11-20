<template>
  <div>
    <MHeader>添加</MHeader>
    <div class="content">
      <ul>
        <li>
          <label for="bookName">书的名字</label>
          <input type="text" v-model="book.bookName" id="bookName">
        </li>
        <li>
          <label for="bookInfo">书的信息</label>
          <input type="text" v-model="book.bookInfo" id="bookInfo">
        </li>
        <li>
          <label for="bookPrice">书的价格</label>
          <input type="text" v-model.number="book.bookPrice" id="bookPrice">
        </li>
        <li>
          <label for="bookCover">书的封面</label>
          <input type="text" v-model.number="book.bookCover" id="bookCover">
        </li>
        <li>
          <button @click="add">添加</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader.vue';
  import {addBook} from '../api';
    export default {
        components:{
          MHeader
        },
        data(){
          return {
            book:{},
          }
        },
        methods:{
           async add(){
             await addBook(this.book);
             this.$router.push('/list');
           }
        }
    }
</script>

<style scoped lang="less">
  ul{
    margin:50px 20px 0 20px;
    li{
      label{
        display: block;
        font-size: 25px;
      }
      input{
        margin: 10px 0;
        height: 25px;
        width: 100%;
      }
      button{
        display: block;
        width: 80px;
        height: 35px;
        background: #2aabd2;
        color: #fff;
        border: none;
        outline: none;
      }
    }
  }
  .detail{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #fff;
    z-index: 100;
  }
</style>
