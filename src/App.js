import React from 'react';
import './App.css';
import { BrowserRouter , Routes , Route , Router , Link } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Products } from './components/Products';
import ProductDetail from './components/ProductDetail';
import { NotFound } from './components/NotFound';

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}>Home</Route>
          <Route path='products' element={<Products />}>
            <Route index element={<Products />} />
            <Route path=':productId' element={<ProductDetail />}></Route>
          </Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
