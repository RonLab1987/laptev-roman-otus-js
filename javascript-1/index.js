export const accumulator = (function adder(addend) {
  if (addend === undefined) {
    return Number(this)
  }
  addend = Number(addend)
  return adder.bind(this + (isNaN(addend) ? 0 : addend))
}).bind(0)
