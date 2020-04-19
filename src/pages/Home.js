import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components'

import CardList from '../components/home/CardList'
import fetchProductList from '../lib/usecases/fetchProductList'
import getAllProduct from '../lib/usecases/getAllProduct'
import deleteProduct from '../lib/usecases/deleteProduct'
import ProductRequest from '../lib/requests/ProductRequest'

const productRequest = new ProductRequest()

const StyledPage = styled.div`
  .fetch-button {
    margin-bottom: 20px;
  }
`

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      options: {
        page: 1,
      },
      productList: [],
    }
  }

  async componentDidMount() {
    this.setState({
      productList: await this.productList(),
    })
  }

  componentDidUpdate() {}

  productList = async () => {
    try {
      const { data } = await getAllProduct({ productRequest })

      return data
    } catch (e) {
      console.log(e)

      return e
    }
  }

  fetchProductList = async () => {
    const list = await fetchProductList(this.state.options, { productRequest })

    this.setState({
      productList: list,
    })
  }

  deleteProduct = async (id) => {
    await deleteProduct(id, { productRequest })

    this.setState({
      productList: [...this.state.productList.filter((product) => product.id !== id)],
    })
  }

  render() {
    return (
      <StyledPage>
        <Button className='fetch-button' onClick={() => this.fetchProductList()}>
          Fetch Product
        </Button>
        <CardList productList={this.state.productList} deleteHandle={this.deleteProduct} />
      </StyledPage>
    )
  }
}
