// const Attendance = require('../models').Attendance;
const { Learning } = require('../models');

const create = async (req, res) => {
  try {
    const learning = {
      idStudent: req.body.idStudent,
      idClass: req.body.idClass,
    };

    const data = await Learning.create(learning);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const findAll = async (req, res) => {
  try {
    const data = await Learning.findAll();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const findOne = async (req, res) => {
//   try {
//     const idLearning = req.params.idLearning;
//     const data = Learning.findByPk(idLearning);
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ message: error });
//   }
};

const update = async (req, res) => {
//   try {
//     const idLearning = req.params.idLearning;

//     const data = Attendance.update(req.body, { where: { idLearning } });
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ message: error });
//   }
};

const remove = async (req, res) => {
//   try {
//     const idAttendance = req.params.idAttendance;

//     const data = Attendance.destroy({ where: { idAttendance } });
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ message: error });
//   }
};

module.exports = { create, findAll, findOne, update, remove };
