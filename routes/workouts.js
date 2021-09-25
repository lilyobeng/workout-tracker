var express = require('express');
var router = express.Router();
var workoutsCtrl = require('../controllers/workouts')

router.get('/', isLoggedIn, workoutsCtrl.showWorkouts);

router.get('/delete/:deleteWorkoutIdNumber', workoutsCtrl.removeWorkout);

router.post('/form', workoutsCtrl.handleForm);

router.get('/form', workoutsCtrl.showForm)

router.get('/edit/:id', workoutsCtrl.editWorkout);

router.put('/:id', workoutsCtrl.editWorkoutAndUpdate);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}
module.exports = router;