import { evaluate } from 'mathjs'
import { useState } from 'react'

export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

export const rows = [
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3],
  [0]
]

export const operations = ['+', '-', '*', '/']

export const equalSign = '='

export const Calculator = () => {
  const [value, setValue] = useState('')

  const handleClick = (operation) => {
    setValue(value.concat(operation))
  }

  return (
    <section>
      <h1>Calculator</h1>
      <input
        type='text'
        value={value}
        readOnly
      />
      <div role='grid'>
        {
          rows.map((row, rowIndex) => (
            <div key={`${row}-${rowIndex}`} role='row'>
              {
                row.map(number => (
                  <button
                    onClick={() => handleClick(number)}
                    key={number}
                  >
                    {number}
                  </button>
                ))
              }
            </div>
          ))
        }
        {
          operations.map(operation => (
            <button
              onClick={() => handleClick(operation)}
              key={operation}
            >
              {operation}
            </button>
          ))
        }
      </div>
      <button
        onClick={() => setValue(evaluate(value))}
      >
        {equalSign}
      </button>
    </section>
  )
}