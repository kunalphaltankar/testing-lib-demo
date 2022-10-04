import { IProduct } from "../../models";

function ProductRow({
  product: { name, price, stocked },
}: {
  product: IProduct;
}) {
  return (
    <tr>
      <td>{stocked ? name : <span style={{ color: 'red' }}>{name}</span>}</td>
      <td>{price}</td>
    </tr>
  );
}

export default ProductRow;