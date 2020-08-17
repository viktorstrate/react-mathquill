import React from 'react'
import PropTypes from 'prop-types'
import { MathQuill } from './mathquill-loader'

class StaticMathField extends React.Component {
  constructor(props) {
    super(props)

    this.element = null
    this.mathField = null

    this.updateMathquill.bind(this)
  }

  updateMathquill() {
    this.mathField = MathQuill.StaticMath(this.element)

    if (this.props.mathquillDidMount) {
      this.props.mathquillDidMount(this.mathField)
    }
  }

  render() {
    const { mathquillDidMount, children, ...otherProps } = this.props

    return (
      <span
        {...otherProps}
        ref={x => {
          this.element = x
          this.updateMathquill()
        }}
      >
        {children}
      </span>
    )
  }
}

StaticMathField.propTypes = {
  children: PropTypes.string,
  mathquillDidMount: PropTypes.func,
}

export default StaticMathField
