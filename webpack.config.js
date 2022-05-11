const path = require('path'); 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    mode:"development",
    entry:{
        boundle: "./src/main.js"
    },
    output:{
        path: path.resolve(__dirname, "out"), 
        filename:'[name].js'
    },  
    target: ['web', 'es5'],
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets:["@babel/preset-react","@babel/preset-env"],
                        plugins: ["@babel/plugin-transform-runtime"]
                    }
                }
            }
        ]
    },
    plugins: [new CleanWebpackPlugin()],
    devtool: 'inline-source-map',
};