const { setupLoader } = require('@openzeppelin/contract-loader');
const HDWalletProvider = require("@truffle/hdwallet-provider");

require('dotenv').config();

const mnemonic = process.env.MNEMONIC || '';

const deploy = async () => {
  const provider = new HDWalletProvider(mnemonic, process.env.LOCAL_PROVIDER || "http://127.0.0.1:7545")
  const owner = provider.getAddress(process.env.ACCOUNT_INDEX || 0)
  const loader = setupLoader({ provider, defaultSender: owner, defaultGasPrice: 20000000000, defaultGas: 6000000 });

  const Factory = loader.web3.fromArtifact('UniswapV2Factory');

  const factory = await Factory.deploy({ arguments: [owner] }).send();

  const allPairsLength = await factory.methods.allPairsLength().call();

  console.log({ factory, allPairsLength });
  process.exit(0);
};

deploy();

