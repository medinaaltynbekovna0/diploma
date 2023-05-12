import "./Logo.css";
import { NavLink } from "react-router-dom";


export default function Logo(){
	return(
		<div className="Logo">
			<NavLink to="Logo">
			<img src="https://i.pinimg.com/564x/88/49/af/8849af8414cf241c9e0539ab7e0ce2bd.jp" alt="website logo" />
			</NavLink>
		</div>
	);
}