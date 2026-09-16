import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <h3>This is product page </h3>
      <nav>
        <Link to="phone">Phone</Link>||
        <Link to="laptop">Laptop</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Product;
