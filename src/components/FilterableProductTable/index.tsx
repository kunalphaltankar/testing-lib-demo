import { useState } from "react";
import { IProduct } from "../../models";
import ProductTable from "../ProductTable";
import SearchBar from "../SearchBar";

function FilterableProductTable({ products }: { products: IProduct[] }) {
  const [state, setState] = useState({
    filterText: '',
    inStockOnly: false,
  });

  function handleFilterTextChange(filterText: string) {
    setState({
      ...state,
      filterText: filterText,
    });
  }

  function handleInStockChange(inStockOnly: boolean) {
    setState({
      ...state,
      inStockOnly: inStockOnly,
    });
  }

  return (
    <div>
      <SearchBar
        filterText={state.filterText}
        inStockOnly={state.inStockOnly}
        onFilterTextChange={handleFilterTextChange}
        onInStockChange={handleInStockChange}
      />
      <ProductTable
        products={products}
        filterText={state.filterText}
        inStockOnly={state.inStockOnly}
      />
    </div>
  );
}

export default FilterableProductTable;