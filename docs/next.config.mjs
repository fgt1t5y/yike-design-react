import mdx from '@next/mdx';
import { resolve } from 'path';
import remarkDemo from 'remark-demo-plugin';

const __dirname = new URL('.', import.meta.url).pathname;

const isProd = process.env.NODE_ENV === 'production';
const REPO_NAME = 'yike-design-react';

// const YIKE_STYLE_PATH = resolve(__dirname, 'node_modules', '@yike-design/react/lib/style.css');

const YIKE_DEMO_PATH = resolve(__dirname, 'node_modules', 'yike');

const withMDX = mdx({
  options: {
    remarkPlugins: [remarkDemo],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // YIKE_STYLE_PATH,
    YIKE_DEMO_PATH,
  },
  distDir: 'dist',
  output: 'export',
  cleanDistDir: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  basePath: isProd ? `/${REPO_NAME}` : '',
  assetPrefix: isProd ? `/${REPO_NAME}/` : '',
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  transpilePackages: ['@yike-design/react'],
};

export default withMDX(nextConfig);
