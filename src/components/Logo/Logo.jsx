import "./Logo.css";
import { NavLink } from "react-router-dom";
import logoo from "../../assets/logo.jpg";


export default function Logo(){
	return(
		<div className="Logo">
			<NavLink to="/">
			<img src={logoo} alt="" />

			{/*<img src="https://png.pngtree.com/png-vector/20211011/ourmid/pngtree-perfume-logo-png-image_3979273.png" alt="" />*/}
			</NavLink>
		</div>
	);
}