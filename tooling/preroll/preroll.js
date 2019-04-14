#!/usr/bin/env node

const path = require('path');
const del = require('del');
const rollup = require('rollup');

const command = process.argv[2] || 'start';

const manifest = require(path.join(__dirname, 'package.json'));
const log = m => console.log(`=> ${manifest.name}@${manifest.version} => ${m}`);

log(`Firing Command : ${manifest.name.split('/')[1]} ${command}`);

const pkg = require(path.join(process.cwd(), 'package.json'));
const name = pkg.name.replace('@', '').replace('/', '.');
const out = extension =>
  'dist/' +
  pkg.source
    .split('/')
    .pop()
    .replace(/\.js$/, extension);

const globals = {
  '@vanillajs/emitter': 'vanillajs.emitter',
  '@vanillajs/store': 'vanillajs.store'
};

if (pkg.source) {
  const resolve = require('rollup-plugin-node-resolve');
  const commons = require('rollup-plugin-commonjs');
  const external = require('rollup-plugin-auto-external');
  const inputOptions = {
    input: pkg.source,
    plugins: [
      /*resolve(), commons(), external()*/
    ]
  };
  const outputOptions = {
    umd: {
      format: 'umd',
      name,
      globals,
      file: out('.umd.js')
    },
    esm: {
      format: 'esm',
      globals,
      file: out('.mjs')
    }
  };

  if (command === 'build') {
    async function build() {
      const external = require('rollup-plugin-auto-external');
      const terser = require('rollup-plugin-terser').terser;
      await del('dist');
      const buildOptions = {
        ...inputOptions,
        plugins: [...inputOptions.plugins, external(), terser()]
      };
      const bundle = await rollup.rollup(buildOptions);
      outputOptions.umd.globals = globals;
      outputOptions.esm.globals = globals;
      await bundle.write(outputOptions.esm);
      await bundle.write(outputOptions.umd);
    }
    build();
  }
  if (command === 'start') {
    const serve = require('rollup-plugin-serve');
    const reload = require('rollup-plugin-livereload');
    const static = require('rollup-plugin-static-site');
    const unpkg = require('rollup-plugin-unpkg');
    async function watch() {
      await del('dist');
      const watchOptions = {
        ...inputOptions,
        plugins: [
          ...inputOptions.plugins,
          unpkg(),
          static({ dir: 'dist' }),
          serve({
            contentBase: ['dist', path.join(__dirname, '..', '..')],
            port: 7000,
            historyApiFallback: true,
            headers: { 'Access-Control-Allow-Origin': '*' }
          }),
          reload('dist')
        ],
        output: [outputOptions.esm],
        watch: {
          exclude: 'node_modules'
        }
      };
      console.log(watchOptions);
      const watcher = rollup.watch(watchOptions);
      watcher.on('event', event => {
        if (event.code === 'ERROR' || event.code === 'FATAL') {
          console.log(event.error); // prevent crashing
        }
      });
    }
    watch();
  }
} else {
  log('pkg.source not defined');
}
