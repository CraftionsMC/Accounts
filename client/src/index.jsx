/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import React from "react";
import ReactDOM from 'react-dom';
import "./style/index.scss";
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from "./Routes";

ReactDOM.render(
    <>
        <Router>
            <Routes/>
        </Router>
    </>,
    document.getElementById('app')
)