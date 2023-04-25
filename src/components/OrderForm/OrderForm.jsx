import { addDoc } from "firebase/firestore";
import "./OrderForm.css";
import { orderCollection } from "../../firebase";
import { useContext } from "react";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";

export default function OrderForm() {
  const { cart, setCart, user } = useContext(AppContext);
  const navigate = useNavigate();

  function onSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    // добавить данные в базу
    addDoc(orderCollection, {
      name: data.get("name"),
      address: data.get("address"),
      phone: data.get("phone"),
      cart: cart,
      user: user.uid,
    }).then(() => {
      // очистить корзину
      setCart({});
      // отправить пользователя на главную страницу
      navigate("/");
    });
  }

  if (Object.keys(cart).length === 0) {
    return "Your cart is empty.";
  }

  if (!user) {
    return "Please login";
  }

  return (
    <div className="OrderForm">
      <form onSubmit={onSubmit}>
        <h3>Create an order</h3>
        <label>
          Name: <input type="text" name="name" required />
        </label>
        <label>
          Phone: <input type="telephone" name="phone" required />
        </label>
        <label>
          Address: <input type="text" name="address" required />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}