class DBPool {
	constructor() {
		this.mysql = require("mysql");
		this.config = {
			host: '101.200.179.180',
			port: 3306,
			user: 'ceshi001', 
			password: '', 
			database: 'nodezbc', 
			connectionLimit: 10,
			multipleStatements: false,
			waitForConnections: true,
		};
		this.pool = this.mysql.createPool(this.config);
	}
	query(sql, params, callBack) {
		this.pool.getConnection((err, connection) => {
			if (err) {
				console.log("数据库连接失败");
				throw err;
			}
			connection.query(sql, params, (err, results, fields) => {
				connection.release();
				if (err) {
					console.log("数据库操作失败");
					throw err;
				}
				callBack && callBack({ results, fields });
			});
		});
	}

	queryAsync(sql, params) {
		const self = this;
		return new Promise((resolve, reject) => {
			this.pool.getConnection((err, connection) => {
				if (err) {
					console.log("数据库连接失败");
					reject(err);
					return;
				}
				console.log("数据库连接成功");
				connection.query(sql, params, (err, results, fields) => {
					connection.release(); 
					if (err) {
						console.log("数据库操作失败");
						reject(err);
						return;
					}
					console.log("数据库操作成功");
					resolve({
						results,
						fields,
					});
				});
			});
		});
	}
}

module.exports = new DBPool();