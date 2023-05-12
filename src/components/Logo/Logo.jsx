import "./Logo.css";
import { NavLink } from "react-router-dom";


export default function Logo(){
	return(
		<div className="Logo">
			<NavLink to="/">
			<img src="https://i.pinimg.com/564x/b2/47/d9/b247d91ecd0f85f8c246baece9625ddc.jpg" alt="" />
			</NavLink>
		</div>
	);
}