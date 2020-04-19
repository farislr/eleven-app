export default (id, payload, { productRequest }) => {
  return productRequest.editProduct(id, payload)
}
