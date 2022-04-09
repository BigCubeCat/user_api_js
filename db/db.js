const mongoose = require('mongoose')

function connect(port) {
	console.log(port)
	mongoose.connect(port, {
		useNewUrlParser: true,
	})
}

module.exports = {
	connect
};