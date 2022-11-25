import React, { useState } from "react";

export function Lights() {
	const [ClassRed, SetClassRed] = useState("0");
	const [ClassYellow, SetClassYellow] = useState("0");
	const [ClassGreen, SetClassGreen] = useState("0");

	let boxStyles = {
		background: "black",
		height: "180px",
		width: "80px",
		margin: "auto",
		borderRadius: "10px"
	};

	let lightStylesred = {
		height: "60px",
		width: "60px",
		background: "red",
		margin: "auto",
		borderRadius: "100%"
	};

	let lightStylesyellow = {
		height: "60px",
		width: "60px",
		background: "yellow",
		margin: "auto",
		borderRadius: "100%"
	};
	let lightStylesgreen = {
		height: "60px",
		width: "60px",
		background: "green",
		margin: "auto",
		borderRadius: "100%"
	};

	function ChangeColorRed() {
		if (ClassRed == "0") {
			SetClassRed("selected");
			SetClassYellow("0");
			SetClassGreen("0");
		} else {
			SetClassRed("0");
		}
	}

	function ChangeColorYellow() {
		if (ClassYellow == "0") {
			SetClassYellow("selected");
			SetClassGreen("0");
			SetClassRed("0");
		} else {
			SetClassYellow("0");
		}
	}

	function ChangeColorGreen() {
		if (ClassGreen == "0") {
			SetClassGreen("selected");
			SetClassRed("0");
			SetClassYellow("0");
		} else {
			SetClassGreen("0");
		}
	}

	return (
		<div style={boxStyles}>
			<div
				className={ClassRed}
				style={lightStylesred}
				onClick={ChangeColorRed}></div>
			<div
				className={ClassYellow}
				style={lightStylesyellow}
				onClick={ChangeColorYellow}></div>
			<div
				className={ClassGreen}
				style={lightStylesgreen}
				onClick={ChangeColorGreen}></div>
		</div>
	);
}
