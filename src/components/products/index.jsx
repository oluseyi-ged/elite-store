import { Grid } from "@material-ui/core"
import React from "react"
import Product from "../product"

const Products = ({ products }) => {
  console.log(products)

  return (
    <div>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Product product={product} />
        </Grid>
      ))}
    </div>
  )
}

export default Products
