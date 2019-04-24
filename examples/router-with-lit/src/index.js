import { render, html } from 'https://unpkg.com/lit-html';

const app = () => {
  return html`
    <div class="container">Hello world !!</div>
  `;
};

const flush = () => render(app(), document.body);

flush();
