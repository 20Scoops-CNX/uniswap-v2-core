const keccak256 = require('keccak256')
const file = require('./build/contracts/UniswapV2Pair.json')
console.log(keccak256(file.bytecode).toString('hex'))