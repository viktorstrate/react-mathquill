import React, { useState } from 'react'

// import the library
import { StaticMathField } from '../../dist/react-mathquill'

const firstLatex = 'e=mc^2'
const secondLatex = '\\frac {\\sqrt{2}} {2\\cdot 2}'

const StaticMathExample = () => {
  const [latex, setLatex] = useState(firstLatex)

  const onChange = () => {
    setLatex(latex == firstLatex ? secondLatex : firstLatex)
  }

  return (
    <div>
      <h2>Static Math Field</h2>
      <StaticMathField>{latex}</StaticMathField>
      <br />
      <button onClick={onChange}>Change</button>
    </div>
  )
}

export default StaticMathExample
