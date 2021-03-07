import { FiMenu } from "react-icons/fi";
import "./header.css";

export const Header = () => {
	return (
		<header className="header">
			<FiMenu className="icon icon-menu"/>
			<div className="header-title">
				Keep
			</div>
		</header>
	)
}
