import { AiOutlineBulb } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./sidenav.css";

export const Sidenav = () => {
	return (
		<div className="sidenav">
			<AiOutlineBulb className="icon icon-bulb"/>
			<RiDeleteBin6Line className="icon icon-bin"/>
		</div>
	)
}