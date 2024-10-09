var app = require("express").Router();
const DBPool = require('./connDB.js')


app.get("/api/user/login", (req, res) => {
	let param = req.query
	console.log(param);
	
	DBPool.query('SELECT * FROM `user_info` WHERE loginName = ?', [param.loginName], (results) => {
		let result = results.results[0]
		if (!result) {
			res.send({
				code: 500,
				msg: 'no user！'
			});
		} else if (result.password != param.password) {
			res.send({
				code: 500,
				msg: 'password error!'
			});
		} else {
			res.send({
				code: 200,
				msg: '',
				result: result
			});
		}
	})
});
app.post('/api/user/register', (req, res) => {
	let param = req.body
	var addSql = 'INSERT INTO `user_info`(`loginName`,`password`,`role`,`id`) VALUES(?,?,?,?)';
	var addSqlParams = [ param.loginName, param.password, '', new Date().getTime()];
	DBPool.query(addSql, addSqlParams, (results) => {
		res.send('success');
	})
});
app.get("/api/user/userList", (req, res) => {
	DBPool.query('SELECT * from `user_info`', [], (results) => {
		let result = results.results
		res.send(result);
	})
});
app.post('/api/user/userUpdate', (req, res) => {
	let param = req.body
	DBPool.query('UPDATE user_info SET password = ? WHERE loginName = ?', [param.password, param.loginName], (results) => {
		res.send("success")
	})
});
module.exports = app;