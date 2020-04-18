export default (id, data, { productRequest }) => {
  return productRequest.deleteProduct(id, data)
}
