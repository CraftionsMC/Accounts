/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import React from "react";
import {Link, Redirect} from "react-router-dom";
import {WebClient} from "@incodelang/accounts-client";

export default function Register() {
    if (localStorage.getItem("access") !== null) {
        return <Redirect to={"/dashboard"}/>
    } else {
        return (
            <div style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "30%",
                height: "60%"
            }}>
                <h1 className="title has-text-centered">Register</h1>
                <h2 className="has-text-centered has-text-danger mb-4" id={"register_status"}/>
                <div className="field">
                    <label className="label">Username</label>
                    <div className="control">
                        <input type="text" className="input" placeholder="Username" id={"username"}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input type="password" className="input" placeholder="Password" id={"password"}/>
                    </div>
                </div>
                <div className="has-text-centered">
                    <button className="button is-primary mt-5" type={"button"} onClick={() => {
                        const username = document.getElementById('username').value;
                        const password = document.getElementById('password').value;

                        const User = new WebClient("");

                        User.create(username, password).then(x => {
                            if (x) {
                                User.createToken(username, password).then(t => {
                                    localStorage.setItem("access", JSON.stringify({
                                        username: username,
                                        token: t
                                    }))
                                    const params = new URLSearchParams(location.search)
                                    if (params.has("redirect")) {
                                        window.location.assign(
                                            decodeURIComponent(params.get("redirect"))
                                        )
                                    } else {
                                        window.location.assign("/")
                                    }
                                })
                            } else {
                                document.getElementById('register_status').innerText = "The Username is already used!"
                            }
                        })
                    }}>Register
                    </button>
                </div>
                <div className="has-text-centered mt-5">
                    <Link className=" has-text-link" to={"/login"}>Login</Link>
                </div>
            </div>
        )
    }
}