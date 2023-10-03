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
  const [result, setResult] = useState('')

  const handleClick = (operation) => {
    setValue(value.concat(operation))
  }

  const handleClearClick = () => {
    setValue('')
    setResult('')
  }

  return (
    <section>
      <h1>Calculator</h1>
      <div>
        <input
          role='equation-input'
          type='text'
          value={value}
          readOnly
        />
      </div>
      <div>
        <input
          role='result-input'
          type='text'
          value={result}
        />
      </div>
      <div>
        <button
          role='clear-button'
          onClick={() => handleClearClick()}
        >
          C
        </button>
      </div>
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
        onClick={() => setResult(evaluate(value))}
      >
        {equalSign}
      </button>
    </section>
  )
}
