import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/Global-styles';
import { BrowserRouter } from 'react-router-dom';
import { ProductsContextProvider } from './contexts/all-products-context';
import { ShoppingContextProvider } from './contexts/shopping-cart-context';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductsContextProvider>
      <ShoppingContextProvider>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </ShoppingContextProvider>
    </ProductsContextProvider>
    <GlobalStyles />
  </React.StrictMode>
);

reportWebVitals();
