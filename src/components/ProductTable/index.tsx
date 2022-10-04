import { IProduct } from "../../models";
import ProductCategoryRow from "../ProductCategoryRow";
import ProductRow from "../ProductRow";

function ProductTable({
  filterText,
  inStockOnly,
  products,
}: {
  filterText: string;
  inStockOnly: boolean;
  products: IProduct[];
}) {
  const rows: React.ReactElement[] = [];
  let lastCategory = '';

  products.forEach((product) => {
    if (product.name.indexOf(filterText) === -1) {
      return;
    }

    if (inStockOnly && !product.stocked) {
      return;
    }

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />,
      );
    }

    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;