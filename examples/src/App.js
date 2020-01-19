import React from 'react'
import ReactDOM from 'react-dom'

// import the styles
import { addStyles as addMathquillStyles } from '../../index'

import EditableMathExample from './EditableMathExample'
import StaticMathExample from './StaticMathExample'

addMathquillStyles()

const App = () => (
  <div>
    <EditableMathExample />
    <StaticMathExample />
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))
