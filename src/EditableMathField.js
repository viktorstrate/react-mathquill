import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react'
import PropTypes from 'prop-types'
import MathQuill from './mathquill-loader'

const EditableMathField = (
  { latex, onChange, config, mathquillDidMount, ...otherProps },
  ref
) => {
  // MathQuill fire 2 edit events on startup.
  const ignoreEditEvents = useRef(2)
  const mathField = useRef(null)
  const wrapperElement = useRef(null)

  useImperativeHandle(ref, () => {
    const mqField = mathField.current

    //Expose MathQuill functions
    return {
      getLatex: () => mqField.latex(),
      useCmd: (value) => mqField.cmd(value),
      useWrite: (value) => mqField.write(value),
      setFocus: () => mqField.focus(),
      onBlur: () => mqField.blur(),
      useSelect: () => mqField.select(),
      useClearSelection: () => mqField.clearSelection(),
      setConfig: (value) => mqField.config(value),
    }
  })
  // This is required to prevent state closure over the onChange function
  const onChangeRef = useRef(onChange)
  useEffect(() => {
    onChangeRef.current = onChange
  }, [onChange])

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
        if (onChangeRef.current) onChangeRef.current(mathField)
      }
    }

    mathField.current = MathQuill.MathField(
      wrapperElement.current,
      combinedConfig
    )
    mathField.current.latex(latex || ' ')
    mathField.current.focus()

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

export default forwardRef(EditableMathField)
