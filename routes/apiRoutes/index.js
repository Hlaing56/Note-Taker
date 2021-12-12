const router = require('express').Router();
const { read, write, getNote, newNote } = require('../../db/store');
const { notes } = require('../../db/db.json');


module.exports  = router;