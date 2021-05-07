var express = require('express');
var router = express.Router();
var x = 0;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Square' });

});


// router.post('/', function(req, res) {
//   x.push(req.body);
//   res.redirect('/Square')

//   // res.redirect('/',addX(x))
// })
router.post('/index',function(req, res) {
  x =req.body.x;
  res.redirect('/Square');
})
router.get('/Square', function(req, res, next) {
  res.render('Square', { x: x })
  // res.redirect('/',addX(x))
})
router.post('/Square',function(req, res) {
  res.render('index');
})

module.exports = router;
