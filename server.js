/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

const express = require('express')
const {accountServer} = require('@incodelang/accounts');
const path = require("path");
const fs = require("fs");

const app = express();

accountServer({
    app: app,
    disable: {}
})

app.use(express.static(path.join(__dirname, './client/build')));

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(5000)