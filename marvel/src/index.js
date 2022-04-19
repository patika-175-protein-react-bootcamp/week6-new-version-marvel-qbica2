import React from "react";
import ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router} from "react-router-dom";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);
root.render(
    <Router>
        <App name="kubilay"/>
    </Router>
);

