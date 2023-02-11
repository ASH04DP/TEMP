require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_URL = 'https://eth-goerli.alchemyapi.io/v2/123abc123abc123abc123abc123abcde';
const PRIVATE_KEY = '6e594907ff4943be37a271178abdb68c304f7ff7fa5ff8479ffb1cd1a98d7c63';
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: GOERLI_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
