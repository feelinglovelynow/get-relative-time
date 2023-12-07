import { getRelativeTime } from '../getRelativeTime.js'
import { describe, test, expect } from '@jest/globals'


describe('getRelativeTime()', () => {
  test('throws if date is not a Date', () => {
    const options = ['', 9, null, undefined, new Date('date')]

    for (const date of options) {
      let error

      try {
        // @ts-ignore
        getRelativeTime(date)
      } catch (e) { error = e }

      expect(error).toEqual({ id: 'fln__get-relative-time__invalid-date', message: 'Please pass getRelativeTime() a valid date object', _errorData: { date } })
    }
  })


  test('returns', () => {
    const d1 = new Date()
    d1.setDate(d1.getDate() - 450) // last year

    const d2 = new Date()
    d2.setDate(d2.getDate() - 180) // 6 months ago

    const d3 = new Date()
    d3.setDate(d3.getDate() - 30) // 4 weeks ago

    const d4 = new Date()
    d4.setDate(d4.getDate() - 7) // 7 days ago

    const d5 = new Date() // now
    const d6 = new Date((new Date()).getTime() + 60000) // in 1 minute
    const d7 = new Date((new Date()).getTime() + 360 * 60000) // in 6 hours
    const d8 = new Date((new Date()).getTime() + (1440 * 60000)) // tomorrow
    const d9 = new Date((new Date()).getTime() + (3 * 1440 * 60000)) // in 3 days
    const d10 = new Date((new Date()).getTime() + (28 * 1440 * 60000)) // in 4 weeks
    const d11 = new Date((new Date()).getTime() + (35 * 1440 * 60000)) // next month
    const d12 = new Date((new Date()).getTime() + (60 * 1440 * 60000)) // in 2 months
    const d13 = new Date((new Date()).getTime() + (365 * 1440 * 60000)) // in 12 months
    const d14 = new Date((new Date()).getTime() + (400 * 1440 * 60000)) // next year

    /** @type { [ Date, string][] } */
    const options = [
      [d1, 'last year'],
      [d2, '6 months ago'],
      [d3, '4 weeks ago'],
      [d4, '7 days ago'],
      [d5, 'now'],
      [d6, 'in 1 minute'],
      [d7, 'in 6 hours'],
      [d8, 'tomorrow'],
      [d9, 'in 3 days'],
      [d10, 'in 4 weeks'],
      [d11, 'next month'],
      [d12, 'in 2 months'],
      [d13, 'in 12 months'],
      [d14, 'next year'],
    ]

    for (const [d, str] of options) {
      expect(getRelativeTime(d)).toEqual(str)
    }
  })
})
