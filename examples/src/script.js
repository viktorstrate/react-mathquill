import React from 'react'
import ReactDOM from 'react-dom'

// import the library
import MathQuill from '../../dist/main'

class App extends React.Component {
  render() {
    return (
      <div>
        Math field: <MathQuill />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
