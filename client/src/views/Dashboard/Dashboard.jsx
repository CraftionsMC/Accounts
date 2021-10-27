/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import React from "react";
import {WebClient} from "@incodelang/accounts-client";
import {Redirect} from "react-router-dom";
import logout from './assets/logout.png';

const User = new WebClient("");

export default function Dashboard() {
    if (localStorage.getItem("access") !== null) {
        const username = JSON.parse(
            localStorage.getItem("access")
        ).username;
        const token = JSON.parse(
            localStorage.getItem("access")
        ).token;

        return (
            <div className={"mt-4"}>
                <h1 className="title has-text-centered">Dashboard</h1>
                <div className="cr-cards">
                    <div className="cr-card" onClick={() => {
                        localStorage.removeItem("access");
                        window.location.assign("/login")
                    }}>
                        <img
                            src={logout}
                            alt={"Logout"}
                            className={"cr-card-icon"}
                        />
                        <h1 className="subtitle">Logout</h1>
                    </div>
                </div>
                <h1 className="title has-text-centered mt-6">Explore</h1>
                <div className="cr-cards">
                    <div className="cr-card" onClick={() => {
                        window.location.href = "https://short.craftions.net"
                    }}>
                        <img
                            src={"/logo.png"}
                            alt={"URL Shorter"}
                            className={"cr-card-icon"}
                        />
                        <h1 className="subtitle">URL Shorter</h1>
                    </div>
                </div>
            </div>
        )
    } else {
        return <Redirect to={"/login"}/>
    }
}