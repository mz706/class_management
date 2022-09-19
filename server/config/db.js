const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/usersdb',
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection();


module.exports = db