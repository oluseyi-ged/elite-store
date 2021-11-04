import React from "react"
import { AddShoppingCart } from "@material-ui/icons"
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@material-ui/core"
import useStyles from "./style"

const Product = ({ product, addProduct = () => {} }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image="" title={product.name}>
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h5" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5">{product.price}</Typography>
          </div>
          <Typography variant="h2" color="textSecondary">
            {product.description}
          </Typography>
        </CardContent>
      </CardMedia>
    </Card>
  )
}

export default Product
