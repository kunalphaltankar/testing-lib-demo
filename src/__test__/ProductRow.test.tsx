import { render, screen } from '@testing-library/react';
import ProductRow from '../components/ProductRow';
import PRODUCTS from '../models/stub/PRODUCTS';

const product = PRODUCTS[1];
const notInStockProduct = PRODUCTS[2];

describe('Product Row', () => {
  it('should render stocked product', () => {
    const { container } = render(
      <table>
        <tbody>
          <ProductRow product={product} />
        </tbody>
      </table>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render with unstocked product', () => {
    const { container } = render(
      <table>
        <tbody>
          <ProductRow product={notInStockProduct} />
        </tbody>
      </table>,
    );

    expect(container).toMatchSnapshot();

    const span = screen.getByText(/Basketball/i);
    expect(span).toHaveStyle('color: red;');
  });
});
