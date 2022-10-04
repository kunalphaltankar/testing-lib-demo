function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockChange,
}: {
  onInStockChange: (value: boolean) => void;
  inStockOnly: boolean;
  filterText: string;
  onFilterTextChange: (value: string) => void;
}) {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <p>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockChange(e.target.checked)}
        />{' '}
        Only show products in stock
      </p>
    </form>
  );
}

export default SearchBar;