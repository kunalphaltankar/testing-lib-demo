import { render } from "@testing-library/react";
import FilterableProductTable from "../components/FilterableProductTable";
import PRODUCTS from "../models/stub/PRODUCTS";

describe("FilterableProductTable", () => {
  it('should render FilterableProductTable', () => {
    const { container } = render(<FilterableProductTable products={PRODUCTS} />);
    expect(container).toMatchSnapshot();
  })
})