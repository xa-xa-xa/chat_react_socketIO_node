const express = require('express');
const router = express.Router();

/*
 * @route GET api/topics
 * @desc Get all users topics
 * @access Private
 */

router.get('/', (req, res) => {
  res.send('Get all users topics');
});
/*
 * @route POST api/topics
 * @desc Add new topic
 * @access Private
 */

router.post('/', (req, res) => {
  res.send('Add new topic');
});

/*
 * @route PUT api/topics/:id
 * @desc Get all users topics
 * @access Private
 */

router.put('/:id', (req, res) => {
  res.send('Update users topics');
});

/*
 * @route PUT api/topics/:id
 * @desc Get all users topics
 * @access Private
 */

router.put('/:id', (req, res) => {
  res.send('Update users topics');
});

/*
 * @route DELETE api/topics/:id
 * @desc Delete users topics
 * @access Private
 */

router.delete('/:id', (req, res) => {
  res.send('Delete users topics');
});

module.exports = router;
