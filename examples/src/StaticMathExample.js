import React from 'react'

// import the library
import { StaticMathField } from '../../index'

const firstLatex = 'e=mc^2'

const secondLatex = '\\frac {\\sqrt{2}} {2\\cdot 2}'

class StaticMathExample extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      latex: firstLatex,
    }

    this.mathQuillEl = null

    this.onChange = () => {
      this.setState({
        latex: this.state.latex == firstLatex ? secondLatex : firstLatex,
      })
    }
  }

  render() {
    return (
      <div>
        <h1>Static Math Example</h1>
        <StaticMathField>{this.state.latex}</StaticMathField>
        <br />
        <button onClick={this.onChange}>Change</button>
      </div>
    )
  }
}

export default StaticMathExample
