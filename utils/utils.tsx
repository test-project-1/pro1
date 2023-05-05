/**
 * It takes a price and returns a formatted price
 * @param price - The price to be formatted.
 * @param [displayZero=true] - If you want to display 0 as 0.00, then set this to true.
 * @returns A string
 */
export const priceFormat = (price: any, displayZero = true) => {
    const validatedPrice = isNaN(parseInt(price)) ? 0 : price
    let formatedPrice = Number(parseFloat(validatedPrice).toFixed(2)).toLocaleString('hi-IN', {
      minimumFractionDigits: 2
    })
  
    if (displayZero) {
      formatedPrice = formatedPrice.replace(/\.00$/, '')
    } else {
      formatedPrice = formatedPrice.replace(/-/g, '')
    }
  
    return formatedPrice
  }

  /**
 * It returns true if the value is undefined, null, an empty object, or an empty string
 * @param value - The value to check if it's empty.
 */
export function isEmpty(value: any) {
    return (
      value === undefined ||
      value === null ||
      (typeof value === 'object' && Object.keys(value).length === 0) ||
      (typeof value === 'string' && value.trim().length === 0)
    )
  }