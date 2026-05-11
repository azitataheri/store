import { FaListUl } from "react-icons/fa";
import { createQueryObject } from "../helper/helper";

function Sidebar({ setQuery }) {
  const categoryHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
  };

  return (
    <div>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={categoryHandler}>
        <li>All</li>
        <li>Electronics</li>
        <li>Jewelery</li>
        <li>Men's clothing</li>
        <li>Women's clothing</li>
      </ul>
    </div>
  );
}

export default Sidebar;
