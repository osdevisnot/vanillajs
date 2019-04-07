#!/usr/bin/env node

const path = require('path');
const del = require('del');
const rollup = require('rollup');

const command = process.argv[2] || 'build';

const manifest = require(path.join(__dirname, 'package.json'));
const log = m => console.log(`=> ${manifest.name}@${manifest.version} => ${m}`);

log(`Firing Command : ${manifest.name.split('/')[1]} ${command}`);

const pkg = require(path.join(process.cwd(), 'package.json'));
const name = pkg.name.replace('@', '').replace('/', '.');

const globals = {
  // '@vanillajs/emitter': 'vanillajs.emitter'
};

if (pkg.source) {
  const resolve = require('rollup-plugin-node-resolve');
  const commons = require('rollup-plugin-commonjs');
  const inputOptions = {
    input: pkg.source,
    // external: id => /^@vanillajs/.test(id),
    plugins: [resolve(), commons()]
  };
  const outputOptions = {
    umd: {
      format: 'umd',
      name,
      globals,
      file:
        'dist/' +
        pkg.source
          .split('/')
          .pop()
          .replace(/.js$/, '.umd.js')
    },
    esm: {
      format: 'esm',
      globals,
      file:
        'dist/' +
        pkg.source
          .split('/')
          .pop()
          .replace(/.js$/, '.mjs')
    }
  };

  if (command === 'build') {
    async function build() {
      await del('dist');
      const bundle = await rollup.rollup(inputOptions);
      await bundle.write(outputOptions.esm);
      await bundle.write(outputOptions.umd);
    }
    build();
  }
  if (command === 'start') {
    const serve = require('rollup-plugin-serve');
    const reload = require('rollup-plugin-livereload');
    const static = require('rollup-plugin-static-site');
    async function watch() {
      await del('dist');
      const watchOptions = {
        ...inputOptions,
        plugins: [
          ...inputOptions.plugins,
          static({ dir: 'dist' }),
          serve({
            contentBase: ['dist'],
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
