const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user:user@cluster0.0v7c2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
{useNewUrlParser : true , useUnifiedTopology : true})
    .then(()=> console.log('Mongo is UP.'))
    .catch(err => console.log('Mongo is Down. Raison : ', err))