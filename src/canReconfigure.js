export const canReconfigure = (from, to) => {
  if (from === undefined) throw new Error('from is required')
  if (typeof from !== 'string') throw new Error('from should be a string')
  if (to === undefined) throw new Error('to is missing')
  if (typeof to !== 'string') throw new Error('to should be a string')

  const haveSameLength = from.length === to.length
  if (!haveSameLength) return false

  const haveSameUniqueLetters = new Set(from).size === new Set(to).size
  if (!haveSameUniqueLetters) return false

  const transformations = {}

  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i]
    const toLetter = to[i]

    const storedLetter = transformations[fromLetter]
    if (storedLetter && storedLetter !== toLetter) return false

    transformations[fromLetter] = toLetter
  }

  return true
}
