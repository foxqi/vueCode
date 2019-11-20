const mongoose=require('mongoose'),
    url="mongodb://localhost:27017/liuyan";
//链接数据库
const db=mongoose.createConnection(url);
db.once('open',function (err) {
    if(!err){
        console.log('数据库链接成功')
    }
});
//2.创建一个schema
var msgSchema=new mongoose.Schema({
    title:{type:String},
    content:{type:String},
    time:{type:Number},
});
//3.创建一个msg类，他就相当于我们mongodb中的集合
var Msg=db.model('Msg',msgSchema);

/*Msg.create({title:'hahah',content:'lala',time:new Date().getTime()},(err,result)=>{
    console.log(result)
});*/
module.exports=Msg;



