const { Op } = require('sequelize');
const { Model } = require('sequelize');
const appError = require("./../utils/appError");

exports.deleteOne = Model => async (req, res, next) => {
  const result = await Model.destroy({
    where: { id: req.body.id },
  });

  if (!result) {
    return next(new appError('No record found with that ID', 404));
  }

  res.status(200).json({
    status: '1',
    message:"Deleted Successfully!",
    data: null,
    error:""
  });
};

exports.updateOne = (Model) =>async (req, res, next) => {
  const updatedDoc = await Model.update(req.body, {
    where: { id: req.body.id },
    returning: true,
  });

  if (!updatedDoc) {
    return next(new appError('No record found with that ID', 404));
  }

  res.status(200).json({
    status: '1',
    message:"Updated Successfully!",
    data: {
      Data: updatedDoc,
    },
    error:""
  });
};

exports.createOne = (Model) => async (req, res, next) => {
  const doc = await Model.create(req.body);

  res.status(200).json({
    status: '1',
    message:"Created Successfully!",
    data: {
      Data: doc,
    },
    error:""
  });
};

exports.getOne = (Model, option) => async (req, res, next) => {
  let doc;
  if (option) {
    doc = Model.findByPk(req.body.id,option)
 }else{
 doc = Model.findByPk(req.body.id,option)
}
  if (!doc) {
    return next(new appError('No record found with that ID', 404));
  }

  res.status(200).json({
    status: '1',
    message:"",
    data: {
      Data: doc,
    },
    error:""
  });
};
//! Option is an Object 
/**
 * 
 const option = {
    where: {
      customerId: userId,
    },
    order: [["id", "DESC"]],
    include: [
      { model: bookingStatus, attributes: ["title"] }
    ],
    attributes: ["id", firstName,],
  }
 */
exports.getAll = (Model,option) => async (req, res,next) => {
  let docs;
  if (option) {
     docs = await Model.findAll(option);
  }else{
    docs =await Model.findAll();
  }
  if (docs.length < 1) {
    return next(new appError('No record found', 404));
  }
  res.status(200).json({
    status: '1',
    message: `All Data`,
    data: {
      Data: docs,
    },
    error:""
  });
};
