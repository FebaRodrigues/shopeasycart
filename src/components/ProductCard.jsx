import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <Card className="h-100">
      <div className="card-img-wrapper">
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.name}
          className="product-image"
          loading="lazy"
        />
      </div>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          <strong>{product.price.toFixed(2)}</strong>
          <br />
          <small className="text-muted">{product.category}</small>
        </Card.Text>
        <Button onClick={() => onAddToCart(product)}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
