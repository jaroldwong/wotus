const express = require('express');
const router = express.Router();
const WorkOrder = require('../models/workorder');

router
  .get('/', (req, res) => {
    WorkOrder.find({})
      .then(workorders => {
        res.status(200).json(workorders);
      })
      .catch(error => {
        console.log(error);
      });
  }) // Index
  .post('/', (req, res) => {
    WorkOrder.create(req.body).then(workorder => {
      res.status(201).json({ message: 'Work order was successfully created' });
    });
  }); // Create

router
  .get('/:id', (req, res) => {
    WorkOrder.findById(req.params.id)
      .then(workorder => {
        res.status(200).json(workorder);
      })
      .catch(error => {
        console.log(error);
      });
  }) // Show
  .put('/:id', (req, res) => {
    WorkOrder.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(workorder => {
        res.status(204).json(workorder);
      })
      .catch(error => {
        console.log(error);
      });
  }) // Update
  .delete('/:id', (req, res) => {
    WorkOrder.findByIdAndRemove(req.params.id).then(res.sendStatus(204));
  }); // Delete

module.exports = router;
