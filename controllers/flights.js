const Flight = require('../models/flight');
module.exports = {
    index,
    new: newFlight,
    create 

};

async function create(req, res) {
    try {
        await Flight.create(req.body);
    } catch (err) {
        console.log(err);
    }
    res.redirect('/flights');
}

async function newFlight(req, res) {
   res.render('flights/new');
}

async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', {flights});
    
}