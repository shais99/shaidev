const withSass = require('@zeit/next-sass');
const withFonts = require('next-fonts');

module.exports = withFonts(withSass({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]___[hash:base64:5]'
    },
    distDir: 'build',
    webpack(config, options) {
        config.module.rules.push(
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                    },
                },
            },
            {
                enforce: 'pre',
                test: /.scss$/,
                loader: 'sass-resources-loader',
                options: {
                    resources: ['./styles/setup/_variables.scss', './styles/setup/_functions.scss', './styles/setup/_typography.scss'],
                },
            },
        );

        return config;
    },
}));