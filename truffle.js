module.exports = {
  networks: {
    development: {
       host: "localhost",
       port: 7545,
       network_id: "*"
    },
    rinkeby: {
       host: "localhost",
       port: 8545,
       network_id: "4",
       gas: 4000000
    }
  }
};
