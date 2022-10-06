import { render, screen } from '@testing-library/react';
import ProductCategoryRow from '../components/ProductCategoryRow';
import PRODUCTS from '../models/stub/PRODUCTS';

const tbody = document.createElement('tbody');

describe('ProductCategoryRow', () => {
  it('should render as table row header', () => {
    const { container } = render(
      <ProductCategoryRow category={PRODUCTS[0].category} />,
      { container: document.body.appendChild(tbody) },
    );
    expect(container).toMatchSnapshot();
  });

  it('should take two colums', () => {
    render(<ProductCategoryRow category={PRODUCTS[0].category} />, {
      container: document.body.appendChild(tbody),
    });

    const th = screen.getByText(PRODUCTS[0].category);
    expect(th).toHaveAttribute('colSpan', '2');
  });
});
