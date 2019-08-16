# React component wrapper for [Mathquill](http://mathquill.com/)

[![npm version](https://badge.fury.io/js/react-mathquill.svg)](https://badge.fury.io/js/react-mathquill)

## Example

> Link to an [example](https://viktorstrate.github.io/react-mathquill/)

```javascript
import React from 'react'
import MathQuill, { addStyles as addMathquillStyles } from 'react-mathquill'

// inserts the required css to the <head> block.
// You can skip this, if you want to do that by your self.
addMathquillStyles()

export default class App extends React.Component {
  constructor() {
    this.state = {
      latex: '\\frac{1}{\\sqrt{2}}\\cdot 2',
    }
  }

  render() {
    return (
      <MathQuill
        latex={this.state.latex} // Initial latex value for the input field
        onChange={mathField => {
          // Called everytime the input changes
          this.setState({ mathField.latex() })
        }}
      />
    )
  }
}
```

# Documentation

## MathQuillComponent (React Element)

### Props

- latex: String - _Initial latex value for the input field_
- config: Object - _A mathquill [config](http://docs.mathquill.com/en/latest/Config/) object_
- onChange([mathField](http://docs.mathquill.com/en/latest/Api_Methods/#mqmathfieldhtml_element-config)) - _A function that is called on change events._
- mathquillDidMount([mathField](http://docs.mathquill.com/en/latest/Api_Methods/#mqmathfieldhtml_element-config)) - _A function that is called when the Mathquill element is initalized._

Other props will be passed to the wrapping element, this can be useful for custom _classNames_ or _styles_

## addStyles (function)

This function, when called, will append a `<style id="react-mathquill-styles">` tag to the `<head>` of the document.
The style tag includes all the required styles for Mathquill to work.

This function is not necessary, provided you include the styles in another way. See [Mathquill Docs - Download and Load](http://docs.mathquill.com/en/latest/Getting_Started/)
