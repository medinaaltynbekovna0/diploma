import "./Logo.css";
import { NavLink } from "react-router-dom";


export default function Logo(){
	return(
		<div className="Logo">
			<NavLink to="/">
			<img src="https://img.freepik.com/free-vector/perfume-shop-logo-template-beauty-business-branding-design-black-and-white-vector_53876-156447.jpg?w=2000" alt="" />
			</NavLink>
		</div>
	);
}