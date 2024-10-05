//demo（node 建立耽搁接口请求连接 createConnection）


//1.固定的，引进express框架
const express = require('express')
const app = express()

//2.设置跨域访问
app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1')
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

//解决接受到前端req数据为{}的问题
app.use(express.json())
// app.use((req, res) => {
// 	res.status(404).send('没有找到资源')
// })
const cors = require('cors')
app.use(cors())



//4.连接数据库
var mysql = require('mysql');
const connectionOption = {
	host: '101.200.179.180', //数据库服务器的地址
	port: 3306, //端口号
	user: 'root', //连接数据库的用户名
	password: '', //连接数据库的密码
	database: '', //数据库名
	connectionLimit: 10, //用于指定连接池中最大的链接数，默认属性值为10.
	multipleStatements: false, //是否允许执行多条sql语句，默认值为false
	//waitForConnections 是否排队从连接池获取数据库链接
}
var connection
// var connection = mysql.createConnection({

// });

//5.建立连接数据库
// connection.connect();


//新增加地址
app.post('/radish/address/addAddress', multipartMiddleware, (req, res) => {
	console.log(req.body);
	let param = req.body
	var addSql =
		'INSERT INTO `addresslist`(`id`,`createTime`,`name`,`phone`,`address`,`latitude`,`longitude`) VALUES(?,?,?,?,?,?,?)';
	var addSqlParams = [param.id, param.createTime, param.name, param.phone, param.address, param.latitude, param.longitude];
	connection = mysql.createConnection(connectionOption);
	connection.connect();
	connection.query(addSql, addSqlParams, function(err, result) {
		if (err) {
			console.log('[INSERT ERROR] - ', err.message);
			return;
		}
		res.send("地址创建成功！！"); 
	});
	connection.end();
});


//图片上传
var multiparty = require('multiparty');
app.post('/radish/upload', function(req, res, next) {
	let form = new multiparty.Form();
	form.uploadDir = "./images";
	// form.keepExtensions=true;   //是否保留后缀
	form.parse(req, function(err, fields, files) { //其中fields表示你提交的表单数据对象，files表示你提交的文件对象
		console.log('files----', files)
		console.log('files----', files.file[0].path.split('/')[1])
		if (err) {
			res.json({
				status: "1",
				msg: "上传失败！" + err
			});
		} else {
			res.json({
				status: "0",
				msg: "上传成功！",
				imgSrc: files.file[0].path.split('/')[1]
			});
		}
	})
});






//3.端口号
const port = 9090
//3.1 监听端口
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})