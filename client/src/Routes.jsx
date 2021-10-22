/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import {
    Route,
    Switch
} from 'react-router-dom';

import React from "react";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";

export default function Routes () {
    return (
        <>
            <Route path={"/"} exact component={Home} />
            <Route path={"/login"} exact component={Login} />
            <Route path={"/register"} exact component={Register} />
        </>
    )
}