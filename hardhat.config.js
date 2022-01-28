require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

const HDWalletProvider = require("@truffle/hdwallet-provider");

const infuraKey = "a071c10bdc584d70bb92ace178bdb242";
const fs = require("fs");
const mnemonic = fs.readFileSync(".secret").toString().trim();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [mnemonic],
    },
    mumbai2: {
      url: "https://matic-testnet-archive-rpc.bwarelabs.com",
      accounts: [mnemonic],
    },
  },
  solidity: "0.8.11",
  etherscan: {
    apiKey: "KXHMHTMVXRBUE1QYGVZGDZ7WZ6JNZK4DRF",
  },
};
