# 🕉 @feelinglovelynow/get-relative-time


## 💎 Install
```bash
pnpm add @feelinglovelynow/get-relative-time
```


## 🤓 Unit Tests
![Statements](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg?style=flat)


## 🙏 Description
* Simple function that recieves a `Date` object that is in the future or is in the past and gives back the relative time using `Intl.RelativeTimeFormat('en', { numeric: 'auto' })`
* Examples: `[ "last year", "6 months ago", "4 weeks ago", "7 days ago", "now", "in 1 minute", "in 6 hours", "tomorrow", "in 3 days", "in 4 weeks", "next month", "in 2 months", "in 12 months", "next year" ]`


## 💚 Examples
```ts
import { getRelativeTime } from '@feelinglovelynow/get-relative-time'

const d1 = new Date()
d1.setDate(d1.getDate() - 450)
getRelativeTime(d1) // last year

const d2 = new Date()
d2.setDate(d2.getDate() - 180)
getRelativeTime(d2) // 6 months ago

const d3 = new Date()
d3.setDate(d3.getDate() - 30)
getRelativeTime(d3) // 4 weeks ago

const d4 = new Date()
d4.setDate(d4.getDate() - 7)
getRelativeTime(d4) // 7 days ago

getRelativeTime(new Date()) // now
getRelativeTime(new Date((new Date()).getTime() + 60000)) // in 1 minute
getRelativeTime(new Date((new Date()).getTime() + 360 * 60000)) // in 6 hours
getRelativeTime(new Date((new Date()).getTime() + (1440 * 60000))) // tomorrow
getRelativeTime(new Date((new Date()).getTime() + (3 * 1440 * 60000))) // in 3 days
getRelativeTime(new Date((new Date()).getTime() + (28 * 1440 * 60000))) // in 4 weeks
getRelativeTime(new Date((new Date()).getTime() + (35 * 1440 * 60000))) // next month
getRelativeTime(new Date((new Date()).getTime() + (60 * 1440 * 60000))) // in 2 months
getRelativeTime(new Date((new Date()).getTime() + (365 * 1440 * 60000))) // in 12 months
getRelativeTime(new Date((new Date()).getTime() + (400 * 1440 * 60000))) // next year
```

## 🔥 Errors we may throw
* `getRelativeTime()`
```ts
if (!(date instanceof Date) || date.toString() === 'Invalid Date') throw { id: 'fln__get-relative-time__invalid-date', message: 'Please pass getRelativeTime() a valid date object', _errorData: { date } }
```


## 🎁 All Our Packages
1. @feelinglovelynow/datetime-local: [NPM](https://www.npmjs.com/package/@feelinglovelynow/datetime-local) ⋅ [Github](https://github.com/feelinglovelynow/datetime-local)
1. @feelinglovelynow/dgraph: [NPM](https://www.npmjs.com/package/@feelinglovelynow/dgraph) ⋅ [Github](https://github.com/feelinglovelynow/dgraph)
1. @feelinglovelynow/env-write: [NPM](https://www.npmjs.com/package/@feelinglovelynow/env-write) ⋅ [Github](https://github.com/feelinglovelynow/env-write)
1. @feelinglovelynow/get-form-entries: [NPM](https://www.npmjs.com/package/@feelinglovelynow/get-form-entries) ⋅ [Github](https://github.com/feelinglovelynow/get-form-entries)
1. @feelinglovelynow/get-relative-time: [NPM](https://www.npmjs.com/package/@feelinglovelynow/get-relative-time) ⋅ [Github](https://github.com/feelinglovelynow/get-relative-time)
1. @feelinglovelynow/global-style: [NPM](https://www.npmjs.com/package/@feelinglovelynow/global-style) ⋅ [Github](https://github.com/feelinglovelynow/global-style)
1. @feelinglovelynow/jwt: [NPM](https://www.npmjs.com/package/@feelinglovelynow/jwt) ⋅ [Github](https://github.com/feelinglovelynow/jwt)
1. @feelinglovelynow/loop-backwards: [NPM](https://www.npmjs.com/package/@feelinglovelynow/loop-backwards) ⋅ [Github](https://github.com/feelinglovelynow/loop-backwards)
1. @feelinglovelynow/slug: [NPM](https://www.npmjs.com/package/@feelinglovelynow/slug) ⋅ [Github](https://github.com/feelinglovelynow/slug)
1. @feelinglovelynow/svelte-catch: [NPM](https://www.npmjs.com/package/@feelinglovelynow/svelte-catch) ⋅ [Github](https://github.com/feelinglovelynow/svelte-catch)
1. @feelinglovelynow/svelte-kv: [NPM](https://www.npmjs.com/package/@feelinglovelynow/svelte-kv) ⋅ [Github](https://github.com/feelinglovelynow/svelte-kv)
1. @feelinglovelynow/svelte-loading-anchor: [NPM](https://www.npmjs.com/package/@feelinglovelynow/svelte-loading-anchor) ⋅ [Github](https://github.com/feelinglovelynow/svelte-loading-anchor)
1. @feelinglovelynow/svelte-modal: [NPM](https://www.npmjs.com/package/@feelinglovelynow/svelte-modal) ⋅ [Github](https://github.com/feelinglovelynow/svelte-modal)
1. @feelinglovelynow/svelte-turnstile: [NPM](https://www.npmjs.com/package/@feelinglovelynow/svelte-turnstile) ⋅ [Github](https://github.com/feelinglovelynow/svelte-turnstile)
1. @feelinglovelynow/toast: [NPM](https://www.npmjs.com/package/@feelinglovelynow/toast) ⋅ [Github](https://github.com/feelinglovelynow/toast)
