module.exports = app => {
  const { Column_Transcript } = require('../controllers');

  var router = require('express').Router();

  // Create a new Column_Transcript
  router.post('/', Column_Transcript.create);

  router.post('/create', Column_Transcript.createPhase1);

  // Retrieve all Column_Transcript
  router.get('/', Column_Transcript.findAll);

  //Find  by IdCourseType
  router.get('/findByIdCourseType/:idCourseType', Column_Transcript.findByIdCourseType);

  // Retrieve a single Column_Transcript with id
  router.get('/:idColumn', Column_Transcript.findOne);

  // Update a Column_Transcript with id
  router.put('/:idColumn', Column_Transcript.update);

  // Delete a Column_Transcript with id
  router.delete('/:idColumn', Column_Transcript.remove);

  app.use('/api/columntranscripts', router);
};
