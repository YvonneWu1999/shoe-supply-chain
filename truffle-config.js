require('babel-register');
require('babel-polyfill');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    }, rinkeby: {
      host: "localhost", // Connect to geth on the specified
      port: 7545,
      from: "0x9A8a71a79F946E11dD828A8B0D29fd1BDd07a66D", // default address to use for any transaction Truffle makes during migrations
      network_id: 4,
      gas: 4612388 // Gas limit used for deploys
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/artifacts/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
