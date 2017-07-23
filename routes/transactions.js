var express = require('express');
var router = express.Router();

var isLogedin = function (req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/login')
}

/* GET users listing. */
router.get('/', isLogedin, function(req, res, next) {
  res.send('respond with a resource');
});

// 송금 요청, 청구



// 대출 신청

// 대출 현황 확인

// 대출 상환



module.exports = router;