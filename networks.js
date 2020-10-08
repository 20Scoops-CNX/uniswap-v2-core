const HDWalletProvider = require("@truffle/hdwallet-provider");

require('dotenv').config();

const mnemonic = process.env.MNEMONIC || '';

module.exports = {
  networks: {
    main: {
      provider: function () {
        return new HDWalletProvider({
          mnemonic,
          providerOrUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_KEY}`,
          addressIndex: Number(process.env.ACCOUNT_INDEX || 0)
        });
      },
      network_id: 1
    },
    development: {
      protocol: 'http',
      host: 'localhost',
      port: 8545,
      gas: 5000000,
      gasPrice: 5e9,
      networkId: '*',
    },
    ropsten: {
      provider: function () {
        return new HDWalletProvider({
          mnemonic,
          providerOrUrl: `https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_KEY}`,
          addressIndex: Number(process.env.ACCOUNT_INDEX || 0)
        });
      },
      network_id: 3
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider({
          mnemonic,
          providerOrUrl: `https://rinkeby.infura.io/v3/${process.env.INFURA_PROJECT_KEY}`,
          addressIndex: Number(process.env.ACCOUNT_INDEX || 0)
        });
      },
      network_id: 4
    },
    office: {
      provider: function () {
        return new HDWalletProvider({
          mnemonic,
          providerOrUrl: process.env.OFFICE_PROVIDER || `http://127.0.0.1:7545`,
          addressIndex: Number(process.env.ACCOUNT_INDEX || 0)
        });
      },
      network_id: "*"
    },
  },
};
