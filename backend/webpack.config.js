/*resolve: {
  fallback: {
    crypto: require.resolve('crypto-browserify')
  }
}

node: {
  crypto: true
}*/
// webpack.config.js
resolve.fallback: { "crypto": require.resolve("crypto-browserify") }
const crypto = require('crypto-browserify');
module.exports = {
  // ...
  resolve: {
    fallback: {
      "crypto": require.resolve("crypto-browserify")
    }
  }
};
