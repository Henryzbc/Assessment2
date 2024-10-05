var xlsx = require('node-xlsx').default;
// parse方法的参数为要解析的excel的路径
var list = xlsx.parse('../assets/data.xlsx');
// 输出数据
console.log(list);