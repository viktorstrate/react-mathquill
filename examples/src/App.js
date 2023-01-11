import React from 'react'
import { createRoot } from 'react-dom/client'

// import the styles
import { addStyles as addMathquillStyles } from '../../dist/react-mathquill'

import EditableMathExample from './EditableMathExample'
import StaticMathExample from './StaticMathExample'

addMathquillStyles()

const App = () => (
  <div>
    <EditableMathExample />
    <StaticMathExample />
  </div>
)

createRoot(document.getElementById('app')).render(<App />)
