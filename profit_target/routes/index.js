var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // //case example
  // var a = [5, 7, 9, 13, 11, 6, 6, 3, 3];
  // var target = 12;

  //case 0
  var a = [1, 3, 46, 1, 3, 9];
  var target = 47;

  // //case 1
  // var a = [6, 6, 3, 9, 3, 5, 1];
  // var target = 12;

  // //case test case 1
  // var a = [5, 5, 5, 5, 5];
  // var target = 10;

  // //case test case 2
  // var a = [5];
  // var target = 5;

  // //case test case 3
  // var a = [50, 0, 0, 0];
  // var target = 0;

  // //case test case 4
  // var a = [33, 33, 44, 44, 22, 55, 77, 0];
  // var target = 77;

  // //case test case 5
  // var a = [33, 44, 44, 33];
  // var target = 77;

  var temp = [];

  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] + a[j] === target) {
        var b = {
          profit1: {
            vitri: i,
            giatri: a[i]
          },
          profit2: {
            vitri: j,
            giatri: a[j]
          }
        };
        temp.push(b);
      }
    }
  }

  var count = 0;

  for (let i = 0; i < temp.length; i++) {
    for (let j = i + 1; j < temp.length; j++) {
      if (temp[j].profit1.giatri === temp[i].profit1.giatri && temp[j].profit2.giatri === temp[i].profit2.giatri) {
        count++;
        break;
      } else {
        if (temp[j].profit1.giatri === temp[i].profit2.giatri && temp[j].profit2.giatri === temp[i].profit1.giatri) {
          count++;
          break;
        }
      }
    }
  }

  // res.json(temp.length - count);

  res.render('index', { title: 'Express', arr: a, target: target, result: temp.length - count });
});

module.exports = router;
