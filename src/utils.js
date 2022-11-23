import products from './products.json'

export function simplifyDate(dateIsoString){
  const date = new Date(dateIsoString)
  return date.toLocaleDateString("en-GB")
}

export function compareDates(a, b) {
  if ((a.date) > (b.date)) {
    return -1
  }

  if ((a.date) < (b.date)) {
    return 1
  }

  if ((a.date) === (b.date)) {
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