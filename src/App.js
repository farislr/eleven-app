import React from 'react'
import 'semantic-ui-css/semantic.min.css'

import Header from './components/Header'
import Content from './components/Content'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}
