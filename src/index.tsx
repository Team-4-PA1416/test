import React from 'react';
import './css/index.scss';
import App from './view/App.tsx';
import { render } from "react-dom";

const rootElement = document.getElementById("root");

render(<App />, rootElement);
