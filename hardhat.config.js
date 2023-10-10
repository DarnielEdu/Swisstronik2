// hardhat.config.js
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.b88a70281b7866c3ba50309fa6764cc66252d6b688c0876c11b300d2c3ba46d],
    },
    swisstronik: {
      url: "https://rpc.swisstronik.com",
      accounts: [process.env.cbd1ce468465335b7672f320718f545b5aff80748bfa257269a991f795e26f8],
    },
  },
};
