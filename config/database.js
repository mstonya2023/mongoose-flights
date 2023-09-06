const flights = require('flights');

flights.connect(process.env.DATABASE_URL);
	
// shortcut to mongoose.connection object
const db = flights.connection;
	
db.on('connected', function() {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});
