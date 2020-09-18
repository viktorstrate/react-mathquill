# React component wrapper for [Mathquill](http://mathquill.com/)

[![npm version](https://badge.fury.io/js/react-mathquill.svg)](https://badge.fury.io/js/react-mathquill)

## Examples

- [Build of examples](https://viktorstrate.github.io/react-mathquill/) located at `src/examples/`
- Play with the examples below at this [Code Sandbox](https://codesandbox.io/s/sweet-liskov-8mlzu)

### Editable Math Field

```javascript
import React, { useState } from 'react'
import { addStyles, EditableMathField } from 'react-mathquill'

// inserts the required css to the <head> block.
// you can skip this, if you want to do that by yourself.
addStyles()

const EditableMathExample = () => {
  const [latex, setLatex] = useState('\\frac{1}{\\sqrt{2}}\\cdot 2')

  return (
    <div>
      <EditableMathField
        latex={latex}
        onChange={(mathField) => {
          setLatex(mathField.latex())
        }}
      />
      <p>{latex}</p>
    </div>
  )
}
```

### Static Math Field

```javascript
import React from 'react'
import { addStyles, StaticMathField } from 'react-mathquill'

// inserts the required css to the <head> block.
// you can skip this, if you want to do that by yourself.
addStyles()

const StaticMathExample = () => (
  <StaticMathField>{'\\frac{1}{\\sqrt{2}}\\cdot 2'}</StaticMathField>
)
```

# Documentation

## addStyles (function)

This function, when called, will append a `<style id="react-mathquill-styles">` tag to the `<head>` of the document.
The style tag includes all the required styles for Mathquill to work.

This function is not necessary, provided you include the styles in another way. See [Mathquill Docs - Download and Load](http://docs.mathquill.com/en/latest/Getting_Started/)

## EditableMathField (React Element)

> Wrapper for [Mathquill MathField](http://docs.mathquill.com/en/latest/Api_Methods/#mqmathfieldhtml_element-config)

### Props

- latex: String - _Initial latex value for the input field_
- config: Object - _A mathquill [config](http://docs.mathquill.com/en/latest/Config/) object_
- onChange([mathField](http://docs.mathquill.com/en/latest/Api_Methods/#mqmathfieldhtml_element-config)) - _A function that is called on change events._
- mathquillDidMount([mathField](http://docs.mathquill.com/en/latest/Api_Methods/#mqmathfieldhtml_element-config)) - _A function that is called when the Mathquill element is initalized._

Other props will be passed to the wrapping span element, this can be useful for custom _classNames_ or _styles_

## StaticMathField (React Element)

> Wrapper for [Mathquill StaticField](http://docs.mathquill.com/en/latest/Api_Methods/#mqstaticmathhtml_element)

### Props

- children: String - _A string of latex to render statically on the page_

Other props will be passed to the wrapping span element, this can be useful for custom _classNames_ or _styles_
