import products from './products.json'

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

export function compareDates(a, b) {
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

export function countBales(containerContent) {
  return containerContent.reduce((bales, stack) => {
    stack.stackContent.forEach(() => (
      bales++
    ))
    return bales
  },0)
}

export function weighBales(containerContent) {
  return containerContent.reduce((kg, stack ) => {
    stack.stackContent.forEach((bale) => (
      kg += products[bale].size
    ))
    return kg
  }, 0)
}