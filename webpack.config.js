const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const extractSass = new ExtractTextPlugin("common.css");
module.exports = {
  entry: './css/common.scss',  //scss入口文件
  output: {
    path: path.join(__dirname, 'css'), //css文件输出路径
    filename: 'common.css' //css文件输出名称
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: extractSass.extract({
            use: [{
                loader: "css-loader",
                options:{
                  minimize: true
                }
            }, {
                loader: "sass-loader"
            }],
            // 在开发环境使用 style-loader
            fallback: "style-loader"
        })
      },
      {
          test: /\.(png|jpg|svg|gif|jpeg|bmp)$/,  
          use: [  
              {  
                  loader: 'url-loader',  
                  options: {  
                      limit: '4048',
                      outputPath:'./cssImages/',
                      name:'[name].[ext]'
                  }  
              },  
          ]  
      }
    ]
  },
  plugins: [
    extractSass
  ]
}