import MathQuillComponent from './Component'
import style from 'mathquill/build/mathquill.css'

function addStyle() {
  if (document.getElementById('react-mathquill-styles') == null) {
    const styleTag = document.createElement('style')
    styleTag.setAttribute('id', 'react-mathquill-styles')
    styleTag.innerHTML = style[0][1]

    const head = document.getElementsByTagName('head')[0]
    head.appendChild(styleTag)
  }
}

addStyle()

export default MathQuillComponent
