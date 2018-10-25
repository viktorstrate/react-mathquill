import React from 'react'
import ReactDOM from 'react-dom'

// import the library
import MathQuill, { addStyles as addMathquillStyles } from '../../index'

addMathquillStyles()

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      latex: '\\cos\\left(A\\right)=\\frac{b^2+c^2-a^2}{2\\cdot b\\cdot c}',
    }
  }

  render() {
    return (
      <div>
        Math field:{' '}
        <MathQuill
          latex={this.state.latex}
          onChange={latex => {
            this.setState({ latex })
          }}
        />
        <div className="result-container">
          <span>Raw latex:</span>
          <span className="result-latex">{this.state.latex}</span>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
