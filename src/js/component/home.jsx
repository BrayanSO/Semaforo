import React from "react";

import { Sticks } from "./stick.jsx";
import { Lights } from "./light.jsx";

//create your first component
export function Home() {
	return (
		<div>
			<Sticks />
			<Lights />
		</div>
	);
}

