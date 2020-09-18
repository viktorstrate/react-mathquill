import React from 'react'
import PropTypes from 'prop-types'
import { MathQuill } from './mathquill-loader'

class EditableMathField extends React.Component {
  constructor(props) {
    super(props)

    this.element = null
    this.mathField = null

    // MathJax apparently fire 4 edit events on startup.
    this.ignoreEditEvents = 4
  }

  componentDidMount() {
    let config = {
      restrictMismatchedBrackets: true,
      handlers: {},
    }

    if (this.props.config) {
      config = {
        ...config,
        ...this.props.config,
      }
    }

    let configEditHandler = config.handlers.edit

    config.handlers.edit = mathField => {
      if (configEditHandler) {
        configEditHandler()
      }

      if (this.ignoreEditEvents > 0) {
        this.ignoreEditEvents -= 1
        return
      }
      if (this.props.onChange) {
        this.props.onChange(mathField)
      }
    }

    this.mathField = MathQuill.MathField(this.element, config)
    this.mathField.latex(this.props.latex || '')

    if (this.props.mathquillDidMount) {
      this.props.mathquillDidMount(this.mathField)
    }
  }

  /**
   * Update the mathfield's latex value if the value passed as `props.latex` doesn't match
   */
  componentDidUpdate(prevProps) {
    const { mathField } = this
    const { latex } = this.props
    if (mathField && prevProps.latex !== latex && mathField.latex() !== latex) {
      mathField.latex(latex)
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
      <span
        {...otherProps}
        ref={x => {
          this.element = x
        }}
      />
    )
  }
}

EditableMathField.propTypes = {
  latex: PropTypes.string,
  onChange: PropTypes.func,
  config: PropTypes.object,
  mathquillDidMount: PropTypes.func,
}

export default EditableMathField
