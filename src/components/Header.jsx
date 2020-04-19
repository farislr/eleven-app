import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default class Header extends Component {
  render() {
    return (
      <nav>
        <Menu>
          <Menu.Item>
            <Link to='/'>Home</Link>
          </Menu.Item>
        </Menu>
      </nav>
    )
  }
}
