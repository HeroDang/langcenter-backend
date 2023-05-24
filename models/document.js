'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  class Document extends Model {
    static associate(models) {
      Document.belongsTo(models.Class, {
        foreignKey: 'idClass',
      });
    }
  }
  Document.init({
    idDoc: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      field: 'iddoc',
    },
    docName: {
      type: Sequelize.STRING,
      field: "docname",
    },
    fileUrl: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      field: 'fileurl',
    },
    postedDate: {
      type: Sequelize.DATEONLY,
      field: 'posteddate',
    },
  }, {
    sequelize,
    modelName: 'Document',

    freezeTableName: true,

    timestamps: false,

    createdAt: false,

    updatedAt: false,
  });
  return Document;
};