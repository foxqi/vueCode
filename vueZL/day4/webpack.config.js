const path=require('path');
const webpack=require('webpack');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
    entry:path.resolve(__dirname,'src/main.js'),
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"bundle.js"
    },
    module:{
        rules:[
            {//编译js文件
                test:/\.js$/,//以点js结尾的文件
                use:'babel-loader',
                exclude:/node_modules/
            },
            {//编译css文件
                test:/\.css$/,//以点js结尾的文件
                use:['style-loader','css-loader'],
            },
            {//编译vue文件
                test:/\.vue$/,//以点js结尾的文件
                use:'vue-loader',
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'src/index.html')
        })
    ]
};



