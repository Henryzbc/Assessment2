const express = require('express')
const app = express()
const cors = require('cors')
const CryptoJS = require('crypto-js');
const fs = require('fs')
let path = require("path");

app.all('*', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1')
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

app.use(express.json())
app.use(cors())

let order = require('./page/order.js');
app.use(order);
let user = require('./page/user.js');
app.use(user);

module.exports = app
const port = 9001
app.listen(port, () => {
	console.log(`app is running at http://localhost:${port}`)
})