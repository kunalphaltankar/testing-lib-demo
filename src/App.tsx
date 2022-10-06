import './App.css';

import { useState } from 'react';

import FilterableProductTable from './components/FilterableProductTable';
import { IProduct } from './models';

const baseUrl = 'https://633e571183f50e9ba3af454d.mockapi.io';

function App() {
  const [products, setProducts] = useState<IProduct[]>();
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(baseUrl + '/products');
      const data = await response.json();
      console.log({ data });
      if (data) {
        setProducts(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <button onClick={getProducts}>Get Products</button>
      {loading && <h2>Loading products...</h2>}
      {products && <FilterableProductTable products={products} />}
    </div>
  );
}

export default App;
