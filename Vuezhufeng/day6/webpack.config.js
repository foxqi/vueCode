//webpack必须采用commonjs写法
let path=require('path');//专门处理路径用的,以当前路径解析出一个相对路径
console.log(path.resolve('./dist'));
let HtmlWebpackPlugin=require('html-webpack-plugin');//帮我们把整个html文件输出到dist下，而且自动引入



module.exports={
    entry:'./src/main.js',//打包的入口文件，webpack会自动查找相关的依赖进行打包
    output:{
        filename:'bundle.js',//打包后的名字
        path:path.resolve('./dist')//必须是一个绝对路径
    },
//    模块的解析规则
//    - js 匹配所有的js，用babel-loader转译，排除掉node_modules
    module:{
        rules:[
            //匹配所有js，用babel-loader转译，不需要node_modules
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            //use时从右往左写
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            //转化base64只在8192字节（8k）以下转化，其他情况下输出图片
            {test:/\.(jpg|png|gif)$/,use:'url-loader?limit=8192'},
            {test:/\.(eot|svg|woff|woff2|wtf)$/,use:'url-loader'},
            {test:/\.vue$/,use:'vue-loader'},


        ]
    },
    plugins:[
         new HtmlWebpackPlugin({//自动插入到dist目录中
             template:'./src/index.html',//使用的模板
             filename:'login.html'//产出的文件名字
         })
    ]
};



