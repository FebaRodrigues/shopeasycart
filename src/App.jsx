// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import ProductList from './components/ProductList';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import About from './pages/About';
import Home from './pages/Home';
import { products } from './data/products'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.css';
import ProductPage from './pages/ProductPage';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const categories = [...new Set(products.map(product => product.category))];

  const filteredProducts = products.filter(product => {
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.id === product.id);
      if (itemIndex === -1) {
        return [...prevItems, { ...product, quantity: 1 }];
      } else {
        const updatedItems = [...prevItems];
        updatedItems[itemIndex].quantity += 1;
        return updatedItems;
      }
    });
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  const handleIncreaseQuantity = (id) => {
    setCartItems((prevItems) => {
      return prevItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };

  const handleDecreaseQuantity = (id) => {
    setCartItems((prevItems) => {
      return prevItems.map(item =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header cartCount={cartItems.length} />
        <main className="flex-shrink-0">
          <Container>
            <Routes>
              <Route 
                path="/" 
                element={<Home 
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  categories={categories}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  filteredProducts={filteredProducts}
                  handleAddToCart={handleAddToCart} 
                />} 
              />
              <Route 
                path="/products" 
                element={<ProductList
                  products={filteredProducts}
                  onAddToCart={handleAddToCart} 
                />} 
              />
              <Route 
                path="/about" 
                element={<About />} 
              />
              <Route 
                path="/cart" 
                element={<Cart
                  cartItems={cartItems}
                  onRemoveFromCart={handleRemoveFromCart}
                  onIncreaseQuantity={handleIncreaseQuantity}
                  onDecreaseQuantity={handleDecreaseQuantity} 
                />} 
              />
              <Route 
                path="/product" 
                element={<ProductPage />} 
              />
            </Routes>
          </Container>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
