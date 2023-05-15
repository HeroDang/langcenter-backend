const { authJwt } = require('../middlewares');

module.exports = app => {
  const { Student } = require('../controllers');
  var router = require('express').Router();

  // Create a new Student
  router.post('/create', Student.createPhase1);
  
  // Retrieve all Student
  router.get('/', Student.findAll);

  // Retrieve a single Student with id
  router.get('/:idStudent', Student.findOne);

  // Update a Student with id
  router.patch('/:idStudent', Student.update);

  // Update a Student with id (New)
  router.patch('/updateNew/:idStudent', Student.updateNew);

  router.post('/updateScore/', Student.updateScore);
  // Delete a Student with id
  router.delete('/:idStudent', Student.remove);

  // Retrieve all Student by idClass
  router.get('/class/:idClass', Student.findByIdClass);

  app.use('/api/students', router);
};
