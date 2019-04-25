import React from 'react'
import ReactDOM from 'react-dom'

// import the library
import MathQuill, { addStyles as addMathquillStyles } from '../../index'

addMathquillStyles()

const initialLatex =
  '\\cos\\left(A\\right)=\\frac{b^2+c^2-a^2}{2\\cdot b\\cdot c}'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      latex: initialLatex,
    }

    this.mathQuillEl = null

    this.resetField = () => {
      this.mathQuillEl.latex(initialLatex)
    }
  }

  render() {
    return (
      <div>
        Math field:{' '}
        <MathQuill
          className="mathquill-example-field"
          latex={this.state.latex}
          onChange={latex => {
            console.log('Math field changed:', latex)
            this.setState({ latex })
          }}
          mathquillDidMount={el => {
            this.mathQuillEl = el
          }}
        />
        <div className="result-container">
          <span>Raw latex:</span>
          <span className="result-latex">{this.state.latex}</span>
        </div>
        <button onClick={this.resetField}>Reset field</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
