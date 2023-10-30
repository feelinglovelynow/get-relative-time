# 🕉 @feelinglovelynow/get-relative-time


## 💎 Install
```bash
pnpm add @feelinglovelynow/get-relative-time
```


## 🙏 Description
Simple function that recieves a date and gives back the relative time using `Intl.RelativeTimeFormat('en', { numeric: 'auto' })`


## 💚 Example: Array of numbers
```ts
import getRelativeTime from '@feelinglovelynow/get-relative-time'

getRelativeTime(new Date()) // now
getRelativeTime(new Date('2023-05-05')) // tomorrow
getRelativeTime(new Date('1991-04-08')) // 32 years ago
```


## 💛 Supports
* Seconds
* Minutes
* Hours
* Days
* Weeks
* Months
* Years


## 🎁 All our NPM Packages
* [@feelinglovelynow/env-write](https://github.com/feelinglovelynow/env-write)
* [@feelinglovelynow/get-form-entries](https://github.com/feelinglovelynow/get-form-entries)
* [@feelinglovelynow/get-relative-time](https://github.com/feelinglovelynow/get-relative-time)
* [@feelinglovelynow/global-style](https://github.com/feelinglovelynow/global-style)
* [@feelinglovelynow/jwt](https://github.com/feelinglovelynow/jwt)
* [@feelinglovelynow/loop-backwards](https://github.com/feelinglovelynow/loop-backwards)
* [@feelinglovelynow/slug](https://github.com/feelinglovelynow/slug)
* [@feelinglovelynow/svelte-loading-anchor](https://github.com/feelinglovelynow/svelte-loading-anchor)
* [@feelinglovelynow/svelte-modal](https://github.com/feelinglovelynow/svelte-modal)
* [@feelinglovelynow/svelte-turnstile](https://github.com/feelinglovelynow/svelte-turnstile)
* [@feelinglovelynow/toast](https://github.com/feelinglovelynow/toast)
