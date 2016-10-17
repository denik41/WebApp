import babel from 'rollup-plugin-babel';

export default {
    entry: './public/js/app-react/index.js',
    dest: './public/js/build/main.js',
    format: 'iife',
    plugins: [
        babel({
            exclude: 'node_modules/**',
        }),
    ]
}