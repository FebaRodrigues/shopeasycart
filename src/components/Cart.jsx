// src/components/Cart.jsx
import { Button, ListGroup, Card } from 'react-bootstrap';


const Cart = ({ cartItems, onRemoveFromCart, onIncreaseQuantity, onDecreaseQuantity }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Card className="my-3 cart-container">
      <Card.Body>
        <h3>Your Shopping Cart</h3>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ListGroup>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.id} className="cart-item">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img src={item.image} alt={item.name} className="product-image" />
                    <span className="ms-3">{item.name} - {item.quantity} x {item.price.toFixed(2)}</span>
                  </div>
                  <div>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => onDecreaseQuantity(item.id)}
                    >
                      -
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => onIncreaseQuantity(item.id)}
                    >
                      +
                    </Button>
                    <Button variant="danger" onClick={() => onRemoveFromCart(item.id)}>
                      Remove
                    </Button>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
        <h5 className="total-price">Total: {totalPrice.toFixed(2)}</h5>
      </Card.Body>
    </Card>
  );
};

export default Cart;