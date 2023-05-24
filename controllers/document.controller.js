const { Document, Class } = require('../models');

const create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: 'Content can not be empty!',
      });
      return;
    }
  
    // Create a Document
    const document = {
      docName: req.body.docName,
      fileUrl: req.body.fileUrl,
      postedDate: req.body.postedDate,
      idClass: req.body.idClass,
    };
    // Save Document in the database
    Document.create(document)
      .then(data => {
        Document.findByPk(data.idDoc).then(data => {
          res.send(data);
        });
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || 'Some error occurred while creating the Document.',
        });
      });
};

// Retrieve all Document from the database.
const findAll = (req, res) => {
    Document.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || 'Some error occurred while retrieving Document.',
        });
      });
  };

// Find a single Document with an id
const findOne = (req, res) => {
    const idDoc = req.params.idDoc;
  
    Document.findByPk(idDoc)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Document.`,
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: 'Error retrieving Document',
        });
      });
  };

// Find Document by idClass
const findByIdClass = (req, res) => {
    const idClass = req.params.idClass;
  
    Document.findAll({
      where: {
        idClass: idClass,
      }
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || 'Some error occurred while retrieving Document.',
        });
      });
  };

// Update a Document by the id in the request
const update = (req, res) => {
    const idDoc = req.params.idDoc;
  
    Document.update(req.body, {
      where: { idDoc: idDoc },
    })
      .then(num => {
        if (num == 1) {
            Document.findOne({
            where: {
                idDoc: idDoc,
            }
          }).then(data => res.send(data));
        } else {
          res.send({
            message: `Cannot update Document. Maybe Document was not found or req.body is empty!`,
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: 'Error updating Document',
        });
      });
  };

// Delete a Document with the specified id in the request
const remove = (req, res) => {
    const idDoc = req.params.idDoc;
  
    Document.destroy({
      where: { idDoc: idDoc },
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: 'Document was deleted successfully!',
          });
        } else {
          res.send({
            message: `Cannot delete Document. Maybe Document was not found!`,
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: 'Could not delete Document',
        });
      });
  };

  module.exports = { create, findAll, findOne, findByIdClass, update, remove};