var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');
const ticketsCtrl = require('../controllers/tickets');

/* GET users listing. */

router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.get('/:id/tickets/new', ticketsCtrl.show);
router.post('/:id/tickets/new', ticketsCtrl.create);
router.get('/:id', flightsCtrl.show);
router.post('/', flightsCtrl.create);


module.exports = router;
