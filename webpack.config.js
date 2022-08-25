const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    mode: 'development',
    devtool:'inline-source-map',
    devServer:{
        static: './dist',
        hot: true,
    },
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: '[name].bundle.js',
        clean: true,
    },
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:['style-loader','css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[hash][ext][query]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[hash][ext][query]'
                }
            },
        ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'Restaurant Page',
        }),
    ],
};