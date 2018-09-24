import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-dom";
import {createStore} from "./reducer";
import App from "./app";

ReactDOM.render(
		<App/>,
		document.getElementById("root")
	)
