/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

const express = require('express')
const {accountServer} = require('@incodelang/accounts');

const app = express();

accountServer({
    app: app,
    disable: {}
})

app.listen(5000)