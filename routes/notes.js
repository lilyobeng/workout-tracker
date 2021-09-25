var express = require('express');
var router = express.Router();
var notesCtrl = require('../controllers/notes');

router.post('/form', notesCtrl.handleForm);







module.exports = router;
