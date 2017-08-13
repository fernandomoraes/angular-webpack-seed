const ExtractTextPlugin = require("extract-text-webpack-plugin");

const fileLoaderOptions = ({ isProd, srcFolder, assetsFolder }) => {
    return {
        name: assetsFolder.concat(isProd ? '/[path][name].[hash].[ext]' : '/[path][name].[ext]'),
        context: srcFolder
    };
};

const getFontOptions = ({ isProd, assetsFolder }) => {
    return {
        name: assetsFolder.concat(isProd ? '/fonts/[name].[hash].[ext]' : '/fonts/[name].[ext]')
    };
};

const js = {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader'
};

const htmlInline = {
    test: /\.inline\.html$/,
    loader: 'html-loader'
};

const html = config => {
    return {
        test: /\.html$/,
        exclude: [htmlInline.test, /(index|about)\.template\.html$/],
        use: [
            { loader: 'file-loader', options: fileLoaderOptions(config) },
            { loader: 'extract-loader' },
            { loader: 'html-loader' }
        ]
    };
};

const imageInline = {
    test: /\.inline\.(png|jpg|gif)$/,
    loader: ['url-loader', 'image-webpack-loader']
};

const image = config => {
    return {
        test: /\.(png|jpg|gif)$/,
        exclude: imageInline.test,
        use: [
            { loader: 'file-loader', options: fileLoaderOptions(config) },
            { loader: 'image-webpack-loader' }
        ]
    };
};

const fontInline = config => {
    return {
        test: /\.(woff2?|svg)$/,
        loader: 'url-loader',
        options: Object.assign({ limit: 10000 }, getFontOptions(config))
    }
};

const font = config => {
    return {
        test: /\.(ttf|eot)$/,
        loader: 'file-loader',
        options: getFontOptions(config)
    }
};

const jqueryBootstrap = {
    test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
    loader: 'imports-loader',
    options: { jQuery: 'jquery' }
};

const css = {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: "css-loader"
    })
};

module.exports = function(config) {
    return [
        js,
        htmlInline,
        html(config),
        imageInline,
        image(config),
        fontInline(config),
        font(config),
        jqueryBootstrap,
        css
    ];
};