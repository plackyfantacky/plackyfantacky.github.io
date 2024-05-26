import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        {enforce: 'pre', ...mdx()},
        react({include: /\.(jsx|js|md|mdx)$/})
    ],
    base: 'https://plackyfantacky.github.io/',
    resolve: {
        alias: [
            {find: '@routes', replacement: path.resolve(__dirname, 'src/Routes')},
            {find: '@components', replacement: path.resolve(__dirname, 'src/Components')},
            {find: '@pages', replacement: path.resolve(__dirname, 'content/pages')},
            {find: '@post', replacement: path.resolve(__dirname, 'content/posts')}
        ],
    },
})
