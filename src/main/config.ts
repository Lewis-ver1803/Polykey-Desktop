import process from 'process';
import path from 'path';

type Config = {
  BASE_PATH: string;
  NODE_ENV: string;
  TMPDIR: string;
};

const config = {};

config['BASE_PATH'] = path.join(__dirname, 'index.html');
config['NODE_ENV'] = process.env.NODE_ENV ?? 'development';
config['TMPDIR'] = process.env.TMPDIR ?? '/tmp';

export default config as Config;

export type { Config };
