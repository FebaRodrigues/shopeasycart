// src/pages/Home.jsx
import { Row, Col, Card, Button } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';

const Home = ({ searchQuery, setSearchQuery, categories, selectedCategory, setSelectedCategory, filteredProducts, handleAddToCart }) => {
  return (
    <div>
      <h1 className="my-4">Welcome to ShopEasy</h1>
      <p className="lead">Your one-stop shop for the latest trends in fashion, footwear, and accessories. Discover our exclusive collections and enjoy seamless shopping experience.</p>
      
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      {/* Featured Products Section */}
      <h3 className="mb-4">Featured Products</h3>
      <Row className="g-4">
        {filteredProducts.slice(0, 6).map(product => (
          <Col key={product.id} xs={12} md={4}>
            <ProductCard product={product} onAddToCart={handleAddToCart} />
          </Col>
        ))}
      </Row>

      {/* Promotional Banner */}
      <Card className="my-4 text-center">
        <Card.Body>
          <h4>Exclusive Offer!</h4>
          <p>Get 20% off on your first purchase. Use code: WELCOME20</p>
          <Button variant="primary">Shop Now</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;