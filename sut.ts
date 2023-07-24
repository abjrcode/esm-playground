import { a } from './abc/index.js'

export function sut() {
  return a();
}

console.log(sut())