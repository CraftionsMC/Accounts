/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import React from "react";
import {Redirect} from "react-router-dom";

export default function Home() {
    if (localStorage.getItem("access") !== null) {
        return <Redirect to={"/dashboard"} />
    } else {
        return <Redirect to={"/login"} />
    }
}