import React from 'react'
import PropTypes from 'prop-types'
import { MathQuill, MQ } from './mathquill-loader'

class MathQuillComponent extends React.Component {
  constructor(props) {
    super(props)

    this.element = null
    this.mathField = null
  }

  componentDidMount() {
    let config = {
      restrictMismatchedBrackets: true,
      handlers: {},
    }

    if (this.props.config) {
      config = {
        config,
        ...this.props.config,
      }
    }

    config.handlers.edit = mathField => {
      if (this.props.onChange) {
        this.props.onChange(mathField.latex())
      }
    }

    this.mathField = MathQuill.MathField(this.element, config)
    this.mathField.latex(this.props.latex || '')
  }

  render() {
    return (
      <div
        ref={x => {
          this.element = x
        }}
      />
    )
  }
}

MathQuillComponent.propTypes = {
  latex: PropTypes.string,
  onChange: PropTypes.func,
  config: PropTypes.object,
}

export default MathQuillComponent
