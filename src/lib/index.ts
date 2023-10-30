export default function getRelativeTime (date: Date): string {
  let response: string

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
