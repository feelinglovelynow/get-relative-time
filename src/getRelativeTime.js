/**
 * Simple function that recieves a `Date` object that is in the future or is in the past and gives back the relative time using `Intl.RelativeTimeFormat('en', { numeric: 'auto' })`
 * Examples: `[ "last year", "6 months ago", "4 weeks ago", "7 days ago", "now", "in 1 minute", "in 6 hours", "tomorrow", "in 3 days", "in 4 weeks", "next month", "in 2 months", "in 12 months", "next year" ]`
 * @param { Date } date 
 * @throws { { id: 'fln__get-relative-time__invalid-date', message: 'Please pass getRelativeTime() a valid date object', _errorData: { date } } } - `IF (!(date instanceof Date) || date.toString() === 'Invalid Date')`
 * @returns { string }
*/
export function getRelativeTime (date) {
  if (!(date instanceof Date) || date.toString() === 'Invalid Date') throw { id: 'fln__get-relative-time__invalid-date', message: 'Please pass getRelativeTime() a valid date object', _errorData: { date } }
  else {
    /** @type { string } */
    let response

    const timestamp = date.getTime()
    const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })

    const diffMilliSeconds = timestamp - ((new Date()).getTime())
    const diffSeconds = Math.round(diffMilliSeconds / 1000)
    const diffMinutes = Math.round(diffSeconds / 60)
    const diffHours = Math.round(diffMinutes / 60)
    const diffDays = Math.round(diffHours / 24)

    if (!Boolean(diffDays) && !Boolean(diffHours) && !Boolean(diffMinutes)) response = rtf.format(diffSeconds, 'second')
    else if (!Boolean(diffDays) && !Boolean(diffHours)) response = rtf.format(diffMinutes, 'minute')
    else if (!Boolean(diffDays)) response = rtf.format(diffHours, 'hour')
    else if (diffDays < -365) response = rtf.format(Math.round(diffDays / 365), 'year')
    else if (diffDays < -33) response = rtf.format(Math.round(diffDays / 30), 'month')
    else if (diffDays < -7) response = rtf.format(Math.round(diffDays / 7), 'week')
    else if (diffDays > 365) response = rtf.format(Math.round(diffDays / 365), 'year')
    else if (diffDays > 33) response = rtf.format(Math.round(diffDays / 30), 'month')
    else if (diffDays > 7) response = rtf.format(Math.round(diffDays / 7), 'week')
    else response = rtf.format(diffDays, 'day')

    return response
  }
}
