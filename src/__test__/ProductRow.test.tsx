import { render, screen } from '@testing-library/react';
import ProductRow from '../components/ProductRow';
import PRODUCTS from '../models/stub/PRODUCTS';

const product = PRODUCTS[1];
const notInStockProduct = PRODUCTS[2];

const tbody = document.createElement('tbody');

describe('Product Row', () => {
  it('should render stocked product', () => {
    const { container } = render(<ProductRow product={product} />, {
      container: document.body.appendChild(tbody),
    });
    expect(container).toMatchSnapshot();
  });

  it('should render with unstocked product', () => {
    const { container } = render(<ProductRow product={notInStockProduct} />, {
      container: document.body.appendChild(tbody),
    });

    expect(container).toMatchSnapshot();

    const span = screen.getByText(/Basketball/i);
    expect(span).toHaveStyle('color: red;');
  });
});
