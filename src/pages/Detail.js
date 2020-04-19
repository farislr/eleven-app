import React, { Component } from 'react'

import getProductById from '../lib/usecases/getProductById'
import editProduct from '../lib/usecases/editProduct'
import ProductRequest from '../lib/requests/ProductRequest'
import { Form, Button, Image } from 'semantic-ui-react'
import styled from 'styled-components'
import { observer } from 'mobx-react'

const StyledImage = styled.div`
  margin-bottom: 15px;
`

const productRequest = new ProductRequest()

export default observer(
  class Detail extends Component {
    state = {
      product: {},
      file: '',
    }

    product = {}

    async componentDidMount() {
      const {
        match: { params },
      } = this.props

      const { data } = await getProductById(params.id, { productRequest })

      this.setState({
        product: data,
      })
    }

    handleInputChange = (e) => {
      this.setState({
        product: {
          ...this.state.product,
          [e.target.name]: e.target.value,
        },
      })
    }

    handleSubmit = async (e) => {
      const { data, error } = await editProduct(this.state.product.id, this.state.product, { productRequest })

      if (error) {
        return alert('Data not submited')
      } else {
        return data
      }
    }

    render() {
      return (
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input
              fluid
              label='Name'
              placeholder='Name'
              name='name'
              defaultValue={this.state.product.name}
              onChange={this.handleInputChange}
            />
            <Form.Input
              fluid
              label='SKU'
              placeholder='SKU'
              name='sku'
              defaultValue={this.state.product.sku}
              onChange={this.handleInputChange}
            />
            <Form.Input
              fluid
              label='Price'
              name='price'
              placeholder='Price'
              defaultValue={this.state.product.price}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.TextArea
            label='Description'
            placeholder='Description'
            name='description'
            defaultValue={this.state.product.description}
            onChange={this.handleInputChange}
          />
          <Form.Field>
            <StyledImage>
              <Image src={this.state.product.image} size='medium' />
            </StyledImage>
            <Button>Upload Image</Button>
            <input hidden />
          </Form.Field>
          <Form.Button>Submit</Form.Button>
        </Form>
      )
    }
  }
)
