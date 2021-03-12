const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports = {
    index,
    show,
    new: newFlight,
    create
}
function index(req, res) {
     Flight.find({}, function(err, flights) {
       res.render('flights/index', { flights });
     });
  }
  function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      Ticket.find({flight: flight._id}, function(err, tickets){
        res.render('flights/show', { title: 'Flight Detail', flight, tickets });
      })
      
    });
}
  
function newFlight(req, res) {
    res.render('flights/new');
}
function create(req, res){
    const flight = new Flight(req.body);
    flight.departs.setFullYear(flight.departs.getFullYear() + 1)
    flight.save(function(err){
        if (err){
            return res.redirect('flights/new');
        }
          res.redirect(`/flights/${flight._id}`)
    })
}
