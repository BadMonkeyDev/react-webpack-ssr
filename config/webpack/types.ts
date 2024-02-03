export type BuildMode = 'development' | 'production';

export interface BuildPaths {
  src: string;
  build: string;
  html: string;
  index: string;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
  apiUrl: string;
}

export interface BuildOptions extends BuildEnv{
  isDev: boolean;
  paths: BuildPaths;
}
