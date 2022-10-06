import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import nock from 'nock';
import App from '../App';

describe('App', () => {
  it('should render properly', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it('should show get products button', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /Get Products/i });
    expect(button).toBeEnabled();
  });

  it('should show loading text when API is fetching products', async () => {
    nock('https://633e571183f50e9ba3af454d.mockapi.io')
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
        'access-control-allow-credentials': 'true',
      })
      .get('/products')
      .reply(200, [
        {
          category: 'Sporting Goods',
          price: '$49.99',
          stocked: true,
          name: 'Football',
        },
        {
          category: 'Electronics',
          price: '$399.99',
          stocked: false,
          name: 'iPhone 5',
        },
      ]);

    render(<App />);
    const button = screen.getByRole('button', { name: /Get Products/i });
    fireEvent.click(button);

    const loaderHeading = screen.getByRole('heading', {
      name: /Loading products.../i,
    });
    expect(loaderHeading).toBeInTheDocument();

    await waitFor(() => screen.findByText(/football/i));

    const footballSpan = screen.getByText('Football');
    expect(footballSpan).not.toHaveStyle('color: red');

    const iphoneSpan = screen.getByText('iPhone 5');
    expect(iphoneSpan).toHaveStyle('color: red');
  });
});
