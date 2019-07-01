import { hash } from '@vanillajs/hash';

const sheet = document.head.appendChild(document.createElement('style')).sheet;

const insert = rule => sheet.insertRule(rule, sheet.cssRules.length);

const process = (clas, css) => {
  const rule = `.${clas} {${css}}`;
  insert(rule);
};

const _cache = {};

const css = (strs, ...vals) => {
  let i = 0,
    len = strs.length - 1,
    raw = '';

  for (; i < len; i++) {
    raw += strs[i] + vals[i];
  }
  raw += strs[i];

  let _hash = hash(raw);

  if (!_cache[_hash]) _cache[_hash] = process(_hash, raw);

  return _cache[_hash];
};

export { css };
