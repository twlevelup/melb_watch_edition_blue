var Config = {};

if (process.env.NODE_ENV === 'production') {
  Config.firebaseUrl = 'https://watch-levelup-blue.firebaseIO.com';
} else {
  Config.firebaseUrl = 'https://watch-levelup-blue.firebaseIO.com';
}

module.exports = Config;
