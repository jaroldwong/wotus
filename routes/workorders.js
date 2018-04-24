const express = require('express');
const router = express.Router();

const data = [
  {
    subject: 'broken light',
    submitter: 'PSgrad',
    status: 'reported to facilities',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id sapien ultrices'
  },
  {
    subject: 'clogged toilet',
    submitter: 'linfac',
    status: 'work scheduled',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id sapien ultrices'
  },
  {
    subject: 'broken light',
    submitter: 'PSgrad',
    status: 'awaiting',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id sapien ultrices'
  },
  {
    subject: 'broken light',
    submitter: 'PSgrad',
    status: 'reported to facilities',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id sapien ultrices'
  },
  {
    subject: 'broken light',
    submitter: 'PSgrad',
    status: 'reported to facilities',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id sapien ultrices'
  }
];

// Index & Create
router
  .get('/', (req, res) => res.status(200).json(data))
  .post('/', (req, res) => res.send('Create'));

// Show, Update, Destroy
router
  .get('/:id', (req, res) => res.json(data[req.params.id]))
  .put('/:id', (req, res) => res.send('Update route'))
  .delete('/:id', (req, res) => res.send('Delete route'));

module.exports = router;
