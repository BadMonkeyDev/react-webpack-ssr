import { BuildOptions } from './types';

export const buildResolve = (options: BuildOptions) => {
  const { paths } = options;
  return {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {
      '@': options.paths.src,
    },
  };
};
