export const add = (a: number, b: number): number => {
  console.log('invoke add')
  return a + b
}

export const substract = (a: number, b: number): number => {
  return a - b
}

export default {
  add,
  substract
}
