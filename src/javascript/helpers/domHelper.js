export const $ = (selector, element = document) =>
  element.querySelector(selector);

export const $$ = (selector, element = document) =>
  element.querySelectorAll(selector);
