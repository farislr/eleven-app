import ProductRepository from '../repositories/ProductRepository'
import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3030/',
})

export default class extends ProductRepository {
  constructor() {
    super()
    this.instance = instance
  }

  async fetchProductList(options) {
    const { page = 1 } = options

    try {
      const { data } = await this.instance.get(`product/fetch?page=${page}`)

      return data
    } catch (e) {
      console.log(e)

      return e
    }
  }

  async deleteProduct(id) {
    try {
      const { data } = await this.instance.delete(`product/${id}/delete`)

      return data
    } catch (e) {
      console.log(e)

      return e
    }
  }

  async getAllProduct() {
    try {
      const { data } = await this.instance.get('product')

      return data
    } catch (e) {
      console.log(e)

      return e
    }
  }
}
