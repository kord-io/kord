var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send("Rooms here");
});

module.exports = router;
