/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */

const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

app = express();

app.use(serveStatic(`${__dirname}/dist`));

const port = process.env.PORT || 5000;

app.listen(port);

console.log(`server started ${port}`);
