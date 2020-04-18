import React, { Component } from 'react'
import { Image, Card, Button } from 'semantic-ui-react'
import styled from 'styled-components'

const StyledCard = styled.div`
  margin-bottom: 28px;

  .text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

export default class ProductCard extends Component {
  render() {
    const { product } = this.props

    return (
      <StyledCard>
        <Card raised>
          <Image src={product.image} wrapped ui={false} />
          <Card.Content>
            <Card.Header className='text'>{product.name}</Card.Header>
            <Card.Description className='text'>{product.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>
                Edit
              </Button>
              <Button
                basic
                color='red'
                onClick={() => {
                  console.log(product)
                  return this.props.deleteHandle(product.id)
                }}>
                Delete
              </Button>
            </div>
          </Card.Content>
        </Card>
      </StyledCard>
    )
  }
}
