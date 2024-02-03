import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

export const cssLoader = (isDev:boolean):webpack.RuleSetRule => ({
  test: /\.(s[ac]ss|css)$/,
  use: [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          auto: (path: string) => Boolean(path.includes('.module.')),
          localIdentName: isDev ? '[name]__[local]--[hash:base64:5]' : '[hash:base64:5]',
        },
      },
    },
    'sass-loader',
    'postcss-loader',
  ],
});
