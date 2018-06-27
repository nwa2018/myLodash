function slice (array, start = 0, end) {
  let len = array.length
  end = end || len
  end = end > len ? len : end
  len = end - start

  let index = -1
  const result = new Array(len)
  while (++index < len) {
    result[index] = array[index + start]
  }
  return result
}

export default slice
