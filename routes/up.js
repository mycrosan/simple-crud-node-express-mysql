var express = require('express');
var router = express.Router();
var moment = require('moment');

/* GET time listing. */
router.get('/', function (req, res, next) {
    var timestamps = moment()
    res.json({
        time: [
            {
                number: Date.now(),
                timestamps: timestamps,
                time: timestamps.format('HH:mm:ss'),
                date: timestamps.format('YYYY-MM-DD')
            }
        ]
    });
});

module.exports = router;
