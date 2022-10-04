import { render, screen } from "@testing-library/react"
import ProductCategoryRow from "../components/ProductCategoryRow";
import PRODUCTS from "../models/stub/PRODUCTS";

describe("ProductCategoryRow", () => {
  it('should render as table row header', ()=> {
    const { container } = render(
      <table>
        <tbody>
          <ProductCategoryRow category={PRODUCTS[0].category} />
        </tbody>
      </table>,
    );
    expect(container).toMatchSnapshot();
  })

  it('should take two colums', ()=> {
     render(
      <table>
        <tbody>
          <ProductCategoryRow category={PRODUCTS[0].category} />
        </tbody>
      </table>,
    );

    const th = screen.getByText(PRODUCTS[0].category);
    expect(th).toHaveAttribute('colSpan', '2')
  })
})