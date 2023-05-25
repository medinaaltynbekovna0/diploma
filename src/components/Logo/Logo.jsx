import "./Logo.css";
import { NavLink } from "react-router-dom";


export default function Logo(){
	return(
		<div className="Logo">
			<NavLink to="/">
			<img src="https://thumbs.dreamstime.com/t/doodle-sketch-perfume-bottle-illustration-aroma-bottle-icon-doodle-sketch-perfume-bottle-illustration-aroma-retro-bottle-163032466.jpg"alt="" />
			</NavLink>
		</div>
	);
}