import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types';

export const buildDevServer = (options: BuildOptions): DevServerConfiguration => {
  const { port } = options;
  return {
    https: true,
    port,
    open: false,
    hot: true,
    historyApiFallback: true,
    liveReload: true,
    allowedHosts: ['all'],
  };
};
