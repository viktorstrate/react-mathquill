import React from 'react'
import { MathQuill, MQ } from './mathquill-loader'

export default class MathQuillComponent extends React.Component {
  constructor(props) {
    super(props)

    this.element = null
    this.mathField = null
  }

  componentDidMount() {
    const self = this

    const config = {
      handlers: {
        edit: function() {},
      },
      restrictMismatchedBrackets: true,
    }

    this.mathField = MathQuill.MathField(this.element, config)
    this.mathField.latex(this.props.latex)
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
