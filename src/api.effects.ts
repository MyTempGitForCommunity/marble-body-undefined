import {r} from '@marblejs/core';
import {delay, map, mapTo, tap} from 'rxjs/operators';

const fs = require('fs')

export const api_long_answer$ = r.pipe(
  r.matchPath('/long-answer'),
  r.matchType('POST'),
  r.useEffect(req$ => req$.pipe(
    tap(({method, url, body}) => console.log(`post req`, {method, url, body})),
    delay(3_000),
    map(({body}) => ({
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body
    })),
  ))
);

export const api_index_page$ = r.pipe(
  r.matchPath('/'),
  r.matchType('GET'),
  r.useEffect(req$ => req$.pipe(
    mapTo({
      headers: {
        'Content-Type': 'text/html'
      },
      body: fs.readFileSync('./src/index.html', 'utf8')
    }),
  ))
);


