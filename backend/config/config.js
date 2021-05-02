const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    mongoURI: 'mongodb+srv://user:test1234@petsp.3tsfd.mongodb.net/petspdb?retryWrites=true&w=majority',
    JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
}