/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import React from "react";
import {Link, Redirect} from "react-router-dom";
import {WebClient} from "@incodelang/accounts-client";

export default function Login() {
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
                <form action={"javascript:void(0)"}>
                    <h1 className="title has-text-centered">Login</h1>
                    <h2 className="has-text-centered has-text-danger mb-4" id={"login_status"}/>
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
                        <button className="button is-primary mt-5" type={"submit"} onClick={() => {
                            const username = document.getElementById('username').value;
                            const password = document.getElementById('password').value;

                            const User = new WebClient("");

                            User.login(username, password).then(x => {
                                if (x) {
                                    User.createToken(username, password).then(t => {
                                        localStorage.setItem("access", JSON.stringify({
                                            username: username,
                                            token: t
                                        }))
                                        const params = new URLSearchParams(location.search)
                                        if (params.has("redirect")) {
                                            window.location.assign(
                                                params.get("redirect")
                                            )
                                        } else {
                                            window.location.assign("/")
                                        }
                                    })
                                } else {
                                    document.getElementById('login_status').innerText = "The Username or the password does not match."
                                }
                            })

                        }}>Login
                        </button>
                    </div>
                    <div className="has-text-centered mt-5">
                        <Link className=" has-text-link" to={"/register"}>Register</Link>
                    </div>
                </form>
            </div>
        )
    }
}