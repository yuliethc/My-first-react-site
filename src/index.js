import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

import BadgeNew from "./pages/BadgeNew";
import Badges from "./pages/Badges";

/* const name = 'Yulieth';
const jsx = <h1> Hola, soy {name}</h1>; */
const container = document.getElementById("app");

ReactDOM.render(<Badges />, container);
