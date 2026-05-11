import { ImSearch } from "react-icons/im";
import { createQueryObject } from "../helper/helper";

function SearchBox({search, setQuery, setSearch}) {
      const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search Products..."
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
      />
      <button onClick={searchHandler}>
        <ImSearch />
      </button>
    </div>
  );
}

export default SearchBox;
