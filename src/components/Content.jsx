import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import styled from 'styled-components'

import Home from '../pages/Home'
import Detail from '../pages/Detail'

const StyledContent = styled.div`
  margin-top: 50px;
`

export default class Content extends Component {
  render() {
    return (
      <StyledContent>
        <Container className='content'>
          <Switch>
            <Route path='/detail'>
              <Detail />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Container>
      </StyledContent>
    )
  }
}
