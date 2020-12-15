const express = require('express');
const router = express.Router();
const { 
  getSpells,
  getSpell,
} = require('../controllers/spells');

router.route('/')
  .get(getSpells);

router.route('/:id')
  .get(getSpell);

module.exports = router;
