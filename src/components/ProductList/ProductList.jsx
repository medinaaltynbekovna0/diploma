import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import "./ProductList.css";

export default function ProductList() {
  const { products } = useContext(AppContext);

  const output = products.map((product) => (
    <div className="Product" key={product.id}>
      <img src={product.picture} alt={product.name} />
      <Link to={"/product/" + product.path}>{product.name}</Link>
      <span>{product.price} som</span>
    </div>
  ));
  return <div className="Productlist">{output}</div>;
}
