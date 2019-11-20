const express=require('express');
const bodyParse=require('body-parser');
const app=express();
app.listen(8080);
//中间件,这样bodyParse才能使用
app.use(bodyParse());
app.use(express.static('./'));

app.get('/',(req,res)=>{
    //root配置一下基础路径
    res.sendFile('06vue-resource.html',{root:'./'})
});
app.get('/get',(req,res)=>{
  console.log(req.query);
    res.send('我是通过get请求得到的数据')
});
app.post('/post',(req,res)=>{
    console.log(req.body);
    res.send(req.body)
});



