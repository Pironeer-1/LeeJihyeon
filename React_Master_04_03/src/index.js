// import Gallery from './Gallery.js';
// import { createRoot } from 'react-dom/client';
//
// const root = createRoot(document.getElementById('root'))
// root.render(<Gallery />);

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);