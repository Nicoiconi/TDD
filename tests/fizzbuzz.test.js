import { describe, expect, it } from 'vitest'

export const fizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error('Parameter provided should be a number')

  if (Number.isNaN(number)) throw new Error('Parameter provided must be a number')

  if (number % 15 === 0) return 'fizzbuzz'
  if (number % 3 === 0) return 'fizz'
  if (number % 5 === 0) return 'buzz'

  return number
}

describe('fizzbuzz', () => {
  it('should be a function', () => {
    expect(typeof fizzbuzz).toBe('function')
  })

  it('should throw if not number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow()
  })

  it('should throw a specific error message if not number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow('Parameter provided should be a number')
  })

  it('should throw a specific error message if not number is provided', () => {
    expect(() => fizzbuzz(NaN)).toThrow('Parameter provided must be a number')
  })

  it('should return if number provided is 1', () => {
    expect(fizzbuzz(1)).toBe(1)
  })

  it('should return if number provided is 2', () => {
    expect(fizzbuzz(2)).toBe(2)
  })

  it('should return "fizz if number provided is 3', () => {
    expect(fizzbuzz(3)).toBe('fizz')
  })

  it('should return "fizz" if number provided is multiple of 3', () => {
    expect(fizzbuzz(6)).toBe('fizz')
    expect(fizzbuzz(9)).toBe('fizz')
    expect(fizzbuzz(12)).toBe('fizz')
  })

  it('should return "fizz if number provided is 5', () => {
    expect(fizzbuzz(5)).toBe('buzz')
  })

  it('should return "buzz" if number provided is multiple of 5', () => {
    expect(fizzbuzz(10)).toBe('buzz')
    expect(fizzbuzz(20)).toBe('buzz')
  })

  it('should return "fizzbuzz" if number provided is multiple of 5', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
  })
})
