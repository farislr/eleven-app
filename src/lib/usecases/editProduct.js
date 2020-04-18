export default (id, data, { productRequest }) => {
  return productRequest.editProduct(id, data)
}
