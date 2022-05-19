// create a function that capitalizes the first letter of each word in a string
const upperCaseWords = (str) => {
  const words = str.split(' ')
  const capitalizedWords = words.map((word) => {
    return word[0].toUpperCase() + word.slice(1)
  })
  return capitalizedWords.join(' ')
}

export default upperCaseWords
