import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types';
import { cssLoader } from './loaders/cssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const { isDev } = options;
  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
  const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });
  const fileLoader = {
    test: /\.(jpe?g|png|gif|webp|woff2?)$/,
    use: 'file-loader',
  };
  const svgLoader = buildSvgLoader();
  return [
    cssLoader(isDev),
    fileLoader,
    codeBabelLoader,
    tsxCodeBabelLoader,
    svgLoader,
  ];
};
