import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import MathQuill from './mathquill-loader'

const EditableMathField = ({
  latex,
  onChange,
  config,
  mathquillDidMount,
  ...otherProps
}) => {
  // MathQuill fire 2 edit events on startup.
  const ignoreEditEvents = useRef(2)
  const mathField = useRef(null)
  const wrapperElement = useRef(null)

  // Setup MathQuill on the wrapperElement
  useEffect(() => {
    if (!wrapperElement.current) return

    let combinedConfig = {
      restrictMismatchedBrackets: true,
      handlers: {},
    }

    if (config) {
      combinedConfig = {
        ...combinedConfig,
        ...config,
      }
    }

    const configEditHandler = combinedConfig.handlers.edit
    combinedConfig.handlers.edit = (mathField) => {
      if (configEditHandler) configEditHandler()

      if (ignoreEditEvents.current > 0) {
        ignoreEditEvents.current -= 1
      } else {
        if (onChange) onChange(mathField)
      }
    }

    mathField.current = MathQuill.MathField(
      wrapperElement.current,
      combinedConfig
    )
    mathField.current.latex(latex || '')

    if (mathquillDidMount) mathquillDidMount(mathField.current)
  }, [wrapperElement])

  useEffect(() => {
    if (mathField.current && mathField.current.latex() !== latex) {
      mathField.current.latex(latex)
    }
  }, [latex])

  return <span {...otherProps} ref={wrapperElement} />
}

EditableMathField.propTypes = {
  latex: PropTypes.string,
  onChange: PropTypes.func,
  config: PropTypes.object,
  mathquillDidMount: PropTypes.func,
}

export default EditableMathField
