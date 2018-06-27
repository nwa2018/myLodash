import slice from './slice'

function chunk (array, size = 1) {
  let len = array.length
  size = size > len ? len : size
  let index = 0
  const newSize = Math.ceil(len / size)
  const result = new Array(newSize)

  while (index < newSize) {
    result[index] = slice(array, index * size, (index + 1) * size)
    index++
  }
  return result
}

export default chunk
