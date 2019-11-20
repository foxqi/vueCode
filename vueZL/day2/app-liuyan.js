const express=require('express');
const bodyParser=require('body-parser');
const msg=require('./model/msg');
const ObjectId=require('mongodb').ObjectID;
const app=express();
app.listen(8080);
//中间件
app.use(bodyParser());
//静态资源
app.use(express.static(__dirname));
app.get('/',(req,res)=>{
    res.sendFile('09留言框.html',{root:__dirname})
});
//前端向后台 “提交” 数据
app.post('/post',(req,res)=>{
   req.body.time=new Date().getTime();
    //mongoose中增加数据
   msg.create(req.body,(err,result)=>{
      console.log(result);
      res.send(result);
   })
});
//前端向后台 “请求” 数据
app.get('/get',(req,res)=>{
    var {page,pageamount}=req.query;
    pageamount=Number(pageamount);
    //mongoose中查找
   msg.find({},(err,result)=>{
       res.send(result);
   }).sort({time:-1}).limit(pageamount).skip(page*pageamount);
});
//前端向后台请求数据总量
app.get('/count',(req,res)=>{
   msg.count({},(err,result)=>{
       res.send(result.toString())
   })
});
//数据删除
app.get('/del',(req,res)=>{
   var _id=ObjectId(req.query.id);
   msg.remove({_id},(err,result)=>{
       console.log(result);
       res.send(result)
   })
})




