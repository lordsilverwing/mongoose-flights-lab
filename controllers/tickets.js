const Ticket = require('../models/ticket')
const Flight = require('../models/flight')

module.exports = {
    show,
    create,
    addToFlight
};

function addToFlight(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        ticket.flight.push(req.body.ticketId);
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`)
        })
    })
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      res.render(`tickets/new`, { title: 'Flight Detail', flight });
    });
}

function create(req, res) {
    Ticket.create(req.body, function(err, ticket){       
        res.redirect(`/flights/${req.body.flight}`)
    })
}

