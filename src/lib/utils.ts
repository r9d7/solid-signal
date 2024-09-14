export function sample<T extends unknown>(array: T[]) {
  return array[Math.floor(Math.random() * array.length)]
}