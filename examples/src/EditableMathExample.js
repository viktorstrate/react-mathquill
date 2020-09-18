import React, { useState } from 'react'

// import the library
import { EditableMathField } from '../../dist/react-mathquill'

const initialLatex =
  '\\cos\\left(A\\right)=\\frac{b^2+c^2-a^2}{2\\cdot b\\cdot c}'

const EditableMathExample = () => {
  const [latex, setLatex] = useState(initialLatex)
  const [text, setText] = useState('')

  return (
    <div>
      <h2>Editable Math Field</h2>
      <EditableMathField
        className="mathquill-example-field"
        latex={latex}
        onChange={(mathField) => {
          setLatex(mathField.latex())
          setText(mathField.text())

          console.log('Editable mathfield changed:', mathField.latex())
        }}
        mathquillDidMount={(mathField) => {
          setText(mathField.text())
        }}
      />
      <div className="result-container">
        <span>Raw latex:</span>
        <span className="result-latex">{latex}</span>
      </div>
      <div className="result-container">
        <span>Raw text:</span>
        <span className="result-latex">{text}</span>
      </div>
      <button
        onClick={() => {
          setLatex(initialLatex)
        }}
      >
        Reset field
      </button>
    </div>
  )
}

export default EditableMathExample
