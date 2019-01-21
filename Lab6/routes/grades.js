
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');
//var router = express.Router();

let checkData = [
	//check('id').exists(),
	check('name').exists(),
	check('course').exists(),
	check('grade').exists(),
  	//check('id', 'Id must be atleast one character').isLength({ min: 1 }),
  	check('name', 'name must be atleast one character').isLength({ min: 1 }),
  	check('course', 'course must be atleast one character').isLength({ min: 1 }),
  	check('grade', 'grade must be atleast one character').isLength({ min: 1 }),
  	sanitize('id').toInt()
];

const grades = require("../entities/grades");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(logger("access.log"));
app.use(cors());

app.get("/", (req, res) => {
  res.send(grades.gradeArray);
});

app.get("/:id",(req,res)=>{
    const searchId = (grades.gradeArray.find(g => g.id === parseInt(req.params.id)));
    if(!searchId) res.status(404).send("course with the Id is not found");
    res.send(searchId);
});

app.post('/', checkData, (req, res) => {
    //console.log(req.body);
    const errors = validationResult(req);
    console.log(errors.isEmpty);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.mapped() });
    } else {
        const { name, course, grade } = req.body;
        grades.add(name, course, grade);
        res.status(200).json(grades);
    }
});

app.put('/:id', checkData, (req,res) =>{
    const updateCourse = (grades.gradeArray.find(g => g.id === parseInt(req.params.id)));
    if(!updateCourse) res.status(404).send('Course with the Id is not found');
    updateCourse.name = req.body.name;
    updateCourse.course = req.body.course;
    updateCourse.grade = req.body.grade;
    res.send(updateCourse);
})

app.delete('/:id', (req, res) => {
    const deleteCourse = grades.gradeArray.find(g => g.id === parseInt(req.params.id));
    if(!deleteCourse) res.status(404).send('Course to delete not found');
    const courseIndex = grades.gradeArray.indexOf(deleteCourse);
    grades.gradeArray.splice(courseIndex,1);
    res.send(deleteCourse);
});

app.listen(3000, ()=>{console.log('Listening on port 3000...')});


module.exports = app;