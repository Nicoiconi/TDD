import { describe, expect, it } from 'vitest'

const canReconfigure = (from, to) => {
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

describe('canReconfigure', () => {
  it('should be a function', () => {
    expect(canReconfigure).toBeTypeOf('function')
  })

  // first parameter
  it('should throw if the first parameter is missing', () => {
    expect(() => canReconfigure()).toThrow()
  })

  it('should throw if first parameter is not a string', () => {
    expect(() => canReconfigure(2)).toThrow()
  })

  // second parameter
  it('should throw if the second parameter is missing', () => {
    expect(() => canReconfigure('a')).toThrow()
  })

  it('should throw if second parameter is not a astring', () => {
    expect(() => canReconfigure('a', 2)).toThrow()
  })

  it('should return a boolean', () => {
    expect(canReconfigure('a', 'b')).toBeTypeOf('boolean')
  })

  it('should return false if strings provided have different length', () => {
    expect(canReconfigure('abc', 'de')).toBe(false)
  })

  it('should return false if strings provided have different length even with same unique letters', () => {
    expect(canReconfigure('aab', 'ab')).toBe(false)
  })

  it('should return false if strings provided have different number of unique letters', () => {
    expect(canReconfigure('abc', 'ddd')).toBe(false)
  })

  it('should return false if strings have different order of transformation', () => {
    expect(canReconfigure('XBOX', 'XXBO')).toBe(false)
  })
})
