import React, { Component } from 'react'

import CardList from '../components/home/CardList'
import fetchProductList from '../lib/usecases/fetchProductList'
import deleteProduct from '../lib/usecases/deleteProduct'
import ProductRequest from '../lib/requests/ProductRequest'

const productRequest = new ProductRequest()

export default class Home extends Component {
  constructor() {
    super()
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

  productList = async () => {
    try {
      const res = await fetchProductList(this.state.options, { productRequest })

      return res
    } catch (e) {
      console.log(e)

      return e
    }
  }

  deleteProduct = async (id) => await deleteProduct(id, { productRequest })

  render() {
    return <CardList productList={this.state.productList} deleteHandle={this.deleteProduct} />
  }
}
