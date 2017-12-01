var express = require('express');
var router = express.Router({mergeParams: true});
var crud = require('../models/CRUD');
var messageError = {
    error: {
        code: '400',
        message: 'Invalid request - exemplo: ?t=nametable - more info in www.mycrosan.com.br'
    }
};

router.get('/:id?', function (req, res, next) {

    if (req.query.t === undefined) {
        res.json(messageError);
        return
    }

    if (req.params.id) {
        crud.getById(req.params.id, req.query.t, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    } else {
        crud.get(req.query.t, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
})

router.post('/', function (req, res, next) {

    if (req.query.t === undefined) {
        res.json(messageError);
        return
    }

    crud.insert(req.body, req.query.t, function (err, results) {
        if (err) {
            res.json(err);
        }
        else {
            res.json({id: results.insertId, values: req.body});//or return count for 1 &amp;amp;amp; 0
        }
    });
});

router.delete('/:id', function (req, res, next) {

    if (req.query.t === undefined) {
        res.json(messageError);
        return
    }

    crud.delete(req.params.id, req.query.t, function (err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(count);
        }

    });
});

router.put('/:id', function (req, res, next) {

    if (req.query.t === undefined) {
        res.json(messageError);
        return
    }

    crud.update(req.params.id, req.query.t, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports = router;