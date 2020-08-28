var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('isto é um teste com N.1.G.G.4. You can get drAnk and smoke w33k all day (2Pac)');
});

module.exports = router;
