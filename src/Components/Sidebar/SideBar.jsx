import React from "react";
import {
	AiFillGithub,
	AiFillTwitterCircle,
	AiFillLinkedin,
	AiFillFacebook,
} from "react-icons/ai";
import styled from "./SideBar.module.css";
const SideBar = () => {
	return (
		<div className={styled.fix}>
			<a
				className={styled.color3}
				href="https://github.com/GreatA-Maker"
				target="_blank"
			>
				<AiFillGithub className={styled.color1} />
				<br />
			</a>
			<a
				className={styled.color3}
				href="https://twitter.com/theycalmeatul"
				target="_blank"
			>
				<AiFillTwitterCircle className={styled.color} />
				<br />
			</a>{" "}
			<a
				className={styled.color3}
				href="https://www.linkedin.com/in/atul-11-kumar/"
				target="_blank"
			>
				<AiFillLinkedin className={styled.color} />
				<br />
			</a>{" "}
			<a className={styled.color3} href="#" target="_blank">
				<AiFillFacebook className={styled.color} />
				<br />
			</a>
		</div>
	);
};

export default SideBar;
