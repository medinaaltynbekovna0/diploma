import "./Logo.css";
import logo from "../../assets/Logo.svg";


export default function Logo(){
	return(
		<div className="Logo">
			<img src={logo} alt="Website Logo" />
		</div>
	);
}