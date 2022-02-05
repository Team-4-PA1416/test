import React from 'react';
import './css/index.scss';
import App from './view/App.tsx';
import { render } from "react-dom";
import Styling from './javascript/models.js';

const rootElement = document.getElementById("root");

render(<App />, rootElement, Styling.setDefault());
