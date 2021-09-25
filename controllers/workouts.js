const User = require('../models/user');
const Workout = require('../models/workout')

async function removeWorkout (req, res){
    let deleteWorkout = await Workout.deleteOne({ 
        _id: req.params.deleteWorkoutIdNumber 
     });
     res.redirect("/workouts")
}

 function showWorkouts(req, res) {
    Workout.find({}, function (err, docs) {
        console.log(docs)
        res.render('workouts/show.ejs', {workouts: docs})
    });
}

async function handleForm(req, res){
    console.log(req.body)
    const newWorkout = new Workout(req.body);
    let user = await User.findById(req.user._id);
    user.workout.push(newWorkout._id);
    await user.save();
     newWorkout.save().then(()=> console.log(newWorkout))
     res.redirect('/workouts')
}

function showForm(req,res){
    console.log('something')
res.render('workouts/form')
}

async function editWorkout(req,res){
    const workouts = await Workout.findById(req.params.id)
    res.render('workouts/edit', {workouts})
}

async function editWorkoutAndUpdate(req, res){
    console.log('edit and update function was ran')
    const updateWorkout = await Workout.findByIdAndUpdate(req.params.id, req.body)
    // await updateWorkout.save()
    res.redirect('/workouts')
}






module.exports= {
    showWorkouts,
    handleForm,
    editWorkout,
    editWorkoutAndUpdate,
    removeWorkout,
    showForm


}













