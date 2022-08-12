import React, { useState, useRef } from 'react'

// import the library
import { EditableMathField } from '../../dist/react-mathquill'

const initialLatex =
  '\\cos\\left(A\\right)=\\frac{b^2+c^2-a^2}{2\\cdot b\\cdot c}'

const EditableMathExample = () => {
  const [latex, setLatex] = useState(initialLatex)
  const [text, setText] = useState('')

  const mathStyle = {
    width: '100%',
    minHeight: '60px',
    padding: '10px',
  }

  const mathFieldRef = useRef()

  return (
    <div>
      <h2>Editable Math Field</h2>
      <EditableMathField
        ref={mathFieldRef}
        className="mathquill-example-field"
        latex={latex}
        style={mathStyle}
        onChange={(mathField) => {
          setLatex(mathField.latex())
          setText(mathField.text())

          console.log('Editable mathfield changed:', mathField.latex())
        }}
        mathquillDidMount={(mathField) => {
          setText(mathField.text())
        }}
      />
      <button
        onClick={(e) => {
          e.preventDefault()
          mathFieldRef.current.useWrite('\\dot{}')
          mathFieldRef.current.setFocus()
        }}
      >
        Insert 1
      </button>
      <button
        onClick={(e) => {
          e.preventDefault()
          mathFieldRef.current.useWrite('\\sqrt[]{}')
          mathFieldRef.current.setFocus()
        }}
      >
        Insert 2
      </button>
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
