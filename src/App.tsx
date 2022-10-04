import FilterableProductTable from './components/FilterableProductTable';
import PRODUCTS from './models/stub/PRODUCTS';
import './App.css'

function App() {
  return (
    <div
      className='App'>
      <FilterableProductTable products={PRODUCTS} />
    </div>
  );
}

export default App;
