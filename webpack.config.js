const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, "build"),
        },
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src/') // Resolve absolute paths in pair with tsconfig,json "paths"
        },
        extensions: ['.tsx', '.ts', '.js'], // ts-loader is used only (intentionally), no .jsx files are available (.js works by default and may be needed for libs interaction)
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
    ],
};