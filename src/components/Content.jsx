import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import styled from 'styled-components'
import { decorate, observable, action } from 'mobx'

import Home from '../pages/Home'
import Detail from '../pages/Detail'

const StyledContent = styled.div`
  margin-top: 50px;
`

export default class Content extends Component {
  render() {
    return (
      <StyledContent>
        <Container>
          <Switch>
            <Route path='/detail/:id' component={Detail} />>
            <Route path='/' component={Home} />>
          </Switch>
        </Container>
      </StyledContent>
    )
  }
}

decorate(Detail, {
  product: observable,
  handleInputChange: action,
})
