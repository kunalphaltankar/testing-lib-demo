import { render } from '@testing-library/react';
import ProductTable from '../components/ProductTable';
import PRODUCTS from '../models/stub/PRODUCTS';

describe('ProductTable', () => {
  it('should render with products', () => {
    const { container } = render(
      <ProductTable products={PRODUCTS} />,
    );
    expect(container).toMatchSnapshot();
  });
  
  it.todo('should show only stocked products');
  it.todo('should filter all products');
  it.todo('should filter only stocked products');
});
