import { render, html } from 'https://unpkg.com/lit-html';
import { match } from '../node_modules/@vanillajs/router/dist/router.mjs';

const home = () =>
  html`
    <div>This is HOME component</div>
  `;
const about = () =>
  html`
    <div>This is ABOUT component</div>
  `;
const profile = params =>
  html`
    <div>This is PROFILE component ${params.id}</div>
  `;

const routes = [
  { path: '/', render: home },
  { path: '/about', render: about },
  { path: '/profile/:id', render: profile }
];

const flush = () => {
  let { route, params, query } = match(routes, window.location);
  console.log('route, params, query : ', route, params, query);
  render(route.render(params, query), document.body);
};

flush();
