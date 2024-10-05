
var app = require("express").Router();
const DBPool = require('./connDB.js')

//新增加订单
app.post('/api/order/addOrder', (req, res) => {
    let param = req.body
    let addSql =
        'INSERT INTO `orderlist`(`id`,`title`,`note`,`price`,`address`,`level`,`num`) VALUES(?,?,?,?,?,?,?)';
    let addSqlParams = [new Date().getTime(), param.title, param.note, param.price, param.address, param.level, param.num];
    DBPool.query(addSql, addSqlParams, (results) => {
        res.send('订单添加成功！');
    })

});
//修改订单
app.post('/api/order/updataOrder', (req, res) => {
    let param = req.body
    DBPool.query('UPDATE orderlist SET ? WHERE id = ?', [param, param.id], (results) => {
        res.send("订单状态更新成功！！");
    })
});
//删除订单数据
app.get('/api/order/deleteOrder', (req, res) => {
    let param = req.query
    DBPool.query('delete from orderlist where id = ?', [param.id], (results) => {
        let result = results.results
        res.send("数据删除成功！！")
    })
});
//查询订单列表
app.get("/api/order/orderListQuery", (req, res) => {
    let searchSql = 'SELECT * from `orderlist` order by id ASC'
    DBPool.query(searchSql, [], (results) => {
        let result = results.results
        res.send(result);
    })
});

module.exports = app;