export const accumulator = (function accumulator(addend) {
  if (addend === undefined) {
    return Number(this)
  } else {
    const result = this + addend
    return accumulator.bind(!isNaN(result) ? result : this)
  }
}).bind(0)
