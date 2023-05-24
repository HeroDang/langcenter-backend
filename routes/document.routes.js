module.exports = app => {
  const { Document } = require('../controllers');

  var router = require('express').Router();

  // Create a new Document
  router.post('/create', Document.create);

  // Retrieve all Document
  router.get('/', Document.findAll);

  // Retrieve a single Document with id
  router.get('/:idDoc', Document.findOne);

  // Retrieve a single Document with idClass
  router.get('/class/:idClass', Document.findByIdClass);

  // Update a Document with id
  router.patch('/update/:idDoc', Document.update);

  // Delete a Document with id
  router.delete('/remove/:idDoc', Document.remove);

  app.use('/api/documents', router);
};
