var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'adadasa' });
  // res.json()
  // fetch("../json/index.json").then(function (res) {
  //   res.json().then(function (data) {
  //     console.log(data);
  //   })
  // })

  // let data = fs.readFile('../json/index.json');
  // console.log(data);
  var data = fs.readFileSync('./json/index.json', 'utf8');
  console.log(data);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send(data)
});

module.exports = router;
