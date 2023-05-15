import "./Logo.css";
import { NavLink } from "react-router-dom";


export default function Logo(){
	return(
		<div className="Logo">
			<NavLink to="/">
			<img src="https://i.pinimg.com/564x/bd/fd/36/bdfd364c3c72887320daf69d67afd3c6.jpg" alt="" />
			</NavLink>
		</div>
	);
}