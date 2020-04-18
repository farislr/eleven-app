import React, { Component } from 'react'
import { Form, Button, Image } from 'semantic-ui-react'
import styled from 'styled-components'

const StyledImage = styled.div`
  margin-bottom: 15px;
`

export default class DetailForm extends Component {
  render() {
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Name' placeholder='Name' />
          <Form.Input fluid label='SKU' placeholder='SKU' />
          <Form.Input fluid label='Price' placeholder='Price' />
        </Form.Group>
        <Form.TextArea label='Description' placeholder='Description' />
        <Form.Field>
          <StyledImage>
            <Image src='https://dummyimage.com/600x400/2dc29f/ffffff.png' size='medium' />
          </StyledImage>
          <Button>Upload Image</Button>
          <input hidden />
        </Form.Field>
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}
