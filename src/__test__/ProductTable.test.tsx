import { render, screen } from '@testing-library/react';
import ProductTable from '../components/ProductTable';
import PRODUCTS from '../models/stub/PRODUCTS';

describe('ProductTable', () => {
  it('should render with products', () => {
    const { container } = render(<ProductTable products={PRODUCTS} />);
    expect(container).toMatchSnapshot();
  });

  it('should show only stocked products', () => {
    render(<ProductTable products={PRODUCTS} inStockOnly />);
    const nonStockedProduct = screen.queryByText(/Basketball/i);
    expect(nonStockedProduct).toBeNull();
    expect(nonStockedProduct).not.toBeInTheDocument();
  });

  it('should filter all products named Basketball', () => {
    render(<ProductTable products={PRODUCTS} filterText="Basketball" />);
    const basketballProducts = screen.getAllByText(/Basketball/);
    expect(basketballProducts).toHaveLength(1);
  });

  it('should filter only stocked products named Basketball', ()=> {
    render(<ProductTable products={PRODUCTS} inStockOnly filterText="Basketball" />);
    const basketballProducts = screen.queryAllByText(/Basketball/);
    expect(basketballProducts).toHaveLength(0);
  });
});
