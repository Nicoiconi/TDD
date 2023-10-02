import { describe, expect, it } from 'vitest'
import { canReconfigure } from '../src/canReconfigure'

// configuración de strings
// dados 2 strings intercambiar las letas entre si
// limitaciones
// al reemplazar el caracter se debe mantener el orden
// no se puede asignar el mismo caracter a 2 letras distintas
// deben tener la misma cantidad de letras unicas
// la longitud de los strings tiene que ser la misma

describe('canReconfigure', () => {
  // it('should be a function', () => {
  //   expect(canReconfigure).toBeTypeOf('function')
  // })

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
