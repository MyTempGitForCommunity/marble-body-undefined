import {httpListener} from '@marblejs/core';
import {logger$} from '@marblejs/middleware-logger';
import {bodyParser$} from '@marblejs/middleware-body';
import {api_index_page$, api_long_answer$} from './api.effects';

const middlewares = [
  logger$(),
  bodyParser$(),
];

const effects = [
  api_index_page$,
  api_long_answer$,
];

export const listener = httpListener({
  middlewares,
  effects,
});
