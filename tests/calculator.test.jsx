import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { Calculator, numbers, operations } from '../src/Calculator'

describe('Calculator', () => {
  afterEach(cleanup)

  it('should render', () => {
    render(<Calculator />)
  })

  it('should render title correctly', () => {
    render(<Calculator />)
    screen.getByText('Calculator')
  })

  it('should render numbers', () => {
    render(<Calculator />)
    numbers.forEach(number => {
      screen.getByText(number)
    })
  })

  it('should render 4 rows', () => {
    render(<Calculator />)
    const rows = screen.getAllByRole('row')
    expect(rows).toHaveLength(4)
  })

  it('should render operations', () => {
    render(<Calculator />)
    operations.forEach(operation => {
      screen.getByText(operation)
    })
  })

  it('should render equal sign', () => {
    render(<Calculator />)
    screen.getByText('=')
  })

  it('should render an input', () => {
    render(<Calculator />)
    screen.getByRole('equation-input')
  })

  it('should show user input after clicking several numbers', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    fireEvent.click(one)

    const two = screen.getByText('2')
    fireEvent.click(two)

    const three = screen.getByText('3')
    fireEvent.click(three)

    const input = screen.getByRole('equation-input')
    expect(input.value).toBe('123')
  })

  it('should show user input after clocking numbers and operations', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    fireEvent.click(one)

    const plus = screen.getByText('+')
    fireEvent.click(plus)
    fireEvent.click(one)

    const input = screen.getByRole('equation-input')
    expect(input.value).toBe('1+1')
  })

  it('should calculate based on user input and show the result', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    fireEvent.click(one)

    const plus = screen.getByText('+')
    fireEvent.click(plus)

    fireEvent.click(one)

    const equal = screen.getByText('=')
    fireEvent.click(equal)

    // const input = screen.getByRole('equation-input')
    // expect(input.value).toBe('2')
    const inputResult = screen.getByRole('result-input')
    expect(inputResult.value).toBe('2')
  })

  it('should clear the input when click C button', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    fireEvent.click(one)

    const clearButton = screen.getByRole('clear-button')
    fireEvent.click(clearButton)

    const input = screen.getByRole('equation-input')
    expect(input.value).toBe('')
  })

  it('should show input result', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    fireEvent.click(one)

    const plus = screen.getByText('+')
    fireEvent.click(plus)

    fireEvent.click(one)

    const equal = screen.getByText('=')
    fireEvent.click(equal)

    const inputResult = screen.getByRole('result-input')
    expect(inputResult.value).toBe('2')
  })

  it('shoueld clear result input when click C button', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    fireEvent.click(one)

    const plus = screen.getByText('+')
    fireEvent.click(plus)

    fireEvent.click(one)

    const equal = screen.getByText('=')
    fireEvent.click(equal)

    const input = screen.getByRole('equation-input')
    expect(input.value).toBe('1+1')

    const inputResult = screen.getByRole('result-input')
    expect(inputResult.value).toBe('2')

    const clearButton = screen.getByRole('clear-button')
    fireEvent.click(clearButton)

    expect(input.value).toBe('')
    expect(inputResult.value).toBe('')
  })
})
