import React from 'react'
import PropTypes from 'prop-types'
import { MathQuill } from './mathquill-loader'

class StaticMathField extends React.Component {
  constructor(props) {
    super(props)

    this.element = null
    this.mathField = null
  }

  componentDidUpdate() {
    this.mathField = MathQuill.StaticMath(this.element)

    if (this.props.mathquillDidMount) {
      this.props.mathquillDidMount(this.mathField)
    }
  }

  render() {
    const {
      latex,
      onChange,
      config,
      mathquillDidMount,
      ...otherProps
    } = this.props

    return (
      <div
        {...otherProps}
        ref={x => {
          this.element = x
        }}
      >
        {this.props.children}
      </div>
    )
  }
}

StaticMathField.propTypes = {
  children: PropTypes.string,
}

export default StaticMathField
