import { fireEvent, render, screen } from '@testing-library/react';
import FilterableProductTable from '../components/FilterableProductTable';
import PRODUCTS from '../models/stub/PRODUCTS';

describe('FilterableProductTable', () => {
  it('should render FilterableProductTable', () => {
    const { container } = render(
      <FilterableProductTable products={PRODUCTS} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('should contain input on which products are filtered', async () => {
    render(<FilterableProductTable products={PRODUCTS} />);
    const filterInput = screen.getByPlaceholderText(/search.../i);
    fireEvent.change(filterInput, { target: { value: 'Basketball' } });
    const basketballProducts = screen.getAllByText(/Basketball/);
    expect(basketballProducts).toHaveLength(1);
  });

  it('should contain checkbox which used to show only stocked products', () => {
    render(<FilterableProductTable products={PRODUCTS} />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    const queryBasketball = screen.queryByText(/Basketball/i);
    expect(queryBasketball).not.toBeInTheDocument();
    
    fireEvent.click(checkbox);
    const getBasketball = screen.getByText(/Basketball/i);
    expect(getBasketball).toBeInTheDocument();
  })
});
