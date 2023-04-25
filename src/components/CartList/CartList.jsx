import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import "./CartList.css";

export default function CartList() {
  // получить продукты и содердижимое корзины
  const { products, cart, setCart } = useContext(AppContext);

  function onQtyChange(product, qty) {
    setCart({
      ...cart,
      [product.id]: qty,
    });
  }

  function onRemoveClick(product) {
    const newCart = { ...cart };
    delete newCart[product.id];
    setCart(newCart);
  }

  const productIds = Object.keys(cart);
  const output = products
    .filter((product) => productIds.includes(product.id))
    .map((product) => (
      <div className="CartItem">
        <img src={product.picture} alt={product.name} />
        <Link to={"/product/" + product.slug}>{product.name}</Link>
        <input
          type="number"
          min={1}
          onChange={(event) => onQtyChange(product, +event.target.value)}
          value={cart[product.id]}
        />
        <span>{product.price * cart[product.id]} som</span>
        <button onClick={() => onRemoveClick(product)}>Remove</button>
      </div>
    ));

  return <div className="CartList">{output}</div>;
} 