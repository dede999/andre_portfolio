const express = require('express');
const router = express.Router();

const controllers = require('./controllers');

router.get('/experiences', (req, res) => {
  res.json({ data: controllers.get_experiences() })
});

router.get('/projects', (req, res) => {
  res.status(200).json({ data: controllers.get_projects() })
});

router.get('/projects/:id', (req, res) => {
  res.status(200).json({ data: controllers.get_a_project(req.params.id) })
});

router.get('/tools', (req, res) => {
  res.status(200).json({ data: controllers.get_tools() })
});

router.get('/lang', (req, res) => {
  res.status(200).json({ data: controllers.get_languages() })
});

module.exports = router;
