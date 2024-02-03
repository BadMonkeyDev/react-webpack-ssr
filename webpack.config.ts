import path from 'path';
import webpack from 'webpack';
import 'webpack-dev-server';
import { BuildEnv, BuildPaths } from './config/webpack/types';
import { buildConfig } from './config/webpack/buildConfig';

const paths:BuildPaths = {
  build: path.resolve(__dirname, 'public'),
  html: path.resolve(__dirname, 'index.html'),
  src: path.resolve(__dirname, 'src'),
  index: path.resolve(__dirname, 'src', 'index.tsx'),
};

export default (env:BuildEnv): webpack.Configuration => {
  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const port = env.port || 3033;
  const apiUrl = env.apiUrl || 'https://jsonplaceholder.typicode.com';

  return buildConfig({
    port, paths, isDev, mode, apiUrl,
  });
};
