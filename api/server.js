var express = require('express');
var bodyParser = require('body-parser');

var loginHandler = require('./routes/login');
var studentsRoutes = require('./routes/student');
var teacherRoutes = require('./routes/teachers');


var app = express();
var port = process.env.PORT || 8080;
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// LOGIN AND USER REGISTRATION
router.post('/api/login-alumno', loginHandler.loginStudent);
router.post('/api/login', loginHandler.loginUser);

router.post('/api/profesor', teacherRoutes.registerTeacher);

// STUDENTS
router.get('/api/alumno', studentsRoutes.getStudents);
router.get('/api/alumno/:id', studentsRoutes.getStudent);
router.get('/api/alumno/:nombres/:apellidos', studentsRoutes.getStudentByName);
//router.get('api/alumno', studentsRoutes.getStudentByGroup);
router.put('/api/alumno/:id', studentsRoutes.updateStudent);
router.post('/api/alumno', studentsRoutes.registerStudent);

// TEACHERS

// PARENTS

// GAMES


app.use('/', router);

app.listen(port);
console.log('server running on port ' + port);
