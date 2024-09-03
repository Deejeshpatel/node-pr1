const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://parun9097:uTTRTLAzZ9epoyhR@cluster0.qtwz1.mongodb.net/tracker')
    .then(() => console.log('Connected!'))
    .catch((err) => console.log('err', err));