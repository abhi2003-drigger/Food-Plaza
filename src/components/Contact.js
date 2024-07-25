import { useState } from "react";
import Section from "./Section";
import { CONTACT_MSG } from "../constant";

const Contact = () => {
	// Lifting the state up ----------------------------------------------------------------
	const [isVisibal, setIsVisible] = useState("github");
	return (
		<div className="body-box">
			<h1 className="contact-info">Contact</h1>
			<Section
				isVisibal={isVisibal == "github"}
				setIsVisible={() =>
					setIsVisible("github" == isVisibal ? "jack" : "github")
				}
				title={"Github"}
				description={CONTACT_MSG.github}
			/>
			<Section
				isVisibal={isVisibal == "linkedin"}
				setIsVisible={() =>
					setIsVisible("linkedin" == isVisibal ? "jack" : "linkedin")
				}
				title={"LinkedIn"}
				description={CONTACT_MSG.linkedIn}
			/>
			<Section
				isVisibal={isVisibal == "email"}
				setIsVisible={() =>
					setIsVisible("email" == isVisibal ? "jack" : "email")
				}
				title={"Email Support"}
				description={CONTACT_MSG.email}
			/>
		</div>
	);
};
export default Contact;
