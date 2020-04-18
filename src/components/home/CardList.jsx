import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import ProductCard from './ProductCard'

export default class CardList extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row columns={3}>
          {this.props.productList.map((product) => (
            <Grid.Column key={product.sku}>
              <ProductCard product={product} deleteHandle={this.props.deleteHandle} />
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    )
  }
}
