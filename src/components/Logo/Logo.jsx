import "./Logo.css";
import { NavLink } from "react-router-dom";


export default function Logo(){
	return(
		<div className="Logo">
			<NavLink to="/">
			<img src="https://i.pinimg.com/564x/52/40/6e/52406eee46263f58060dfed5f9c9a9db.jpg" alt="" />
			</NavLink>
		</div>
	);
}