const fs=require('fs')

fs.readFile('../assets/pom.log','utf8',function(err,datastr){
    console.log('读取成功后的'+err);
    console.log('读取成功后的'+datastr);
})