function formatDate(dateString){
  return dateString
  .split('-')
  .map((section) => {
    if (section.length === 1) {
      section = '0' + section 
    }
    return section 
  })
  .reverse()
  .join('')
}

export default function compareDates(a, b) {
  if (formatDate(a.date) > formatDate(b.date)) {
    return -1
  }

  if (formatDate(a.date) < formatDate(b.date)) {
    return 1
  }

  if (formatDate(a.date) === formatDate(b.date)) {
    return 0
  }
}