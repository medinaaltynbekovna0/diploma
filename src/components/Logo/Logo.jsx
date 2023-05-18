import "./Logo.css";
import { NavLink } from "react-router-dom";


export default function Logo(){
	return(
		<div className="Logo">
			<NavLink to="/">
			<img src="https://i.pinimg.com/564x/5d/80/7a/5d807a5711158636f69a639026f25408.jpg" alt="" />
			</NavLink>
		</div>
	);
}