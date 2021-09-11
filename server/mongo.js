const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const env = {
    dbName: 'wundereats',
    key: 'HkwH9OfzuxZYVa0QCIboBZC6eaFmH2FngwUNHEuroPHl1zAqGKxqH9s8xDtSpPhwaWOFrxp6J8F1mbi9dMbm9w==',
    cosmosPort: 10255,
    mongoUri = 'mongodb://wundereats:HkwH9OfzuxZYVa0QCIboBZC6eaFmH2FngwUNHEuroPHl1zAqGKxqH9s8xDtSpPhwaWOFrxp6J8F1mbi9dMbm9w==@wundereats.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@wundereats@'
};

function connect() {
    return mongoose.connect(env.mongoUri, { useMongoClient: true });
}

module.exports = {
    connect,
    mongoose
};