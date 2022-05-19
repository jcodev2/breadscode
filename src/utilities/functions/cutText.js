// create a function that cuts a string to a certain length
const cutText = (str, length) => {
  if (str.length > length) {
    return str.slice(0, length) + '...'
  } else {
    return str
  }
}

export default cutText
