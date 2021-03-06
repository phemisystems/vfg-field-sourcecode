/* eslint-disable */

global.Range = function Range() {};

const createContextualFragment = (html) => {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.children[0]; // so hokey it's not even funny
};

Range.prototype.createContextualFragment = (html) => createContextualFragment(html);

// HACK: Polyfil that allows codemirror to render in a JSDOM env.
global.window.document.createRange = function createRange() {
  return {
    setEnd: () => {},
    setStart: () => {},
    getBoundingClientRect: () => {
      return { right: 0 };
    },
    getClientRects: () => [],
    createContextualFragment,
  };
};
global.window.document.body.createTextRange = function createRange() {
  return {
    setEnd: () => {},
    setStart: () => {},
    getBoundingClientRect: () => {
      return { right: 0 };
    },
    getClientRects: () => [],
    createContextualFragment,
  };
};
