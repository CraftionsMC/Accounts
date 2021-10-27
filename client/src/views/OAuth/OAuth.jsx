/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import React from "react";
import {Redirect} from "react-router-dom";
import {Button, Table} from "react-bulma-components";
import {WebClient} from "@incodelang/accounts-client";

const User = new WebClient("");

export default function OAuth() {
    const params = new URLSearchParams(location.search)
    let redirect = "";
    if (params.has("redirect")) {
        redirect = params.get("redirect");
        if (localStorage.getItem("access") !== null) {
            const url = new URL(decodeURIComponent(redirect));

            const app = url.protocol + "//" + url.hostname + url.pathname

            return (
                <>
                    <h1 className="title mt-6 has-text-danger has-text-centered">Grant Access</h1>
                    <h2 className="subtitle mt-4 has-text-centered">
                        An App wants access to your account. Do you
                        want the app to have full control over your account?
                    </h2>
                    <center>
                        <Table>
                            <thead>
                            <tr>
                                <th>App Name</th>
                                <th>URL</th>
                            </tr>
                            </thead>
                            <tbody>
                            <td>
                                {
                                    url.hostname
                                }
                            </td>
                            <td>
                                {
                                    app
                                }
                            </td>
                            </tbody>
                        </Table>
                    </center>
                    <div className="has-text-centered">
                        <Button color={"primary m-3"} onClick={() => {
                            window.location.assign("/")
                        }}>No</Button>
                        <Button color={"danger m-3"} onClick={() => {
                            const a = JSON.parse(localStorage.getItem("access"));
                            User.createToken(
                                a.username,
                                a.token
                            ).then(x => {
                                window.location.assign(decodeURIComponent(redirect) + "?token=" + x + "&username=" + a.username);
                            });
                        }}>Yes</Button>
                    </div>
                </>
            )
        } else {
            return <Redirect to={"/login?redirect=" +
            encodeURIComponent(
                "/oauth?redirect=" +
                decodeURIComponent(redirect)
            )}/>
        }

    } else {
        return (
            <>
                <h1 className="title mt-6 has-text-danger has-text-centered">Error</h1>
                <h2 className="subtitle mt-4 has-text-centered">The OAuth App does not provide a redirect.</h2>
                <p className="has-text-centered mt-3">
                    If you are the administrator of the page please set the search
                    parameter to a valid encoded URI component. <br/><br/>
                    Example: https://account.craftions.net/oauth?redirect=https%3A%2F%2Fexample.com%2Fredirect
                </p>
            </>
        )
    }
}