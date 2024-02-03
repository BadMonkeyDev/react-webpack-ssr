import webpack from 'webpack';
import { BuildOptions } from './types';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildDevServer } from './buildDevServer';
import { buildResolve } from './buildResolve';

export const buildConfig = (options: BuildOptions):webpack.Configuration => {
  const { mode, paths } = options;

  return {
    mode,
    entry: paths.src,
    output: {
      filename: '[name].[hash].js',
      path: paths.build,
      publicPath: '/',
      clean: true,
    },
    resolve: buildResolve(options),
    devServer: buildDevServer(options),
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
  };
};
