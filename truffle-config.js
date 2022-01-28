/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * trufflesuite.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

//  const HDWalletProvider = require('@truffle/hdwallet-provider');
// const HDWalletProvider = require("truffle-hdwallet-provider");
const HDWalletProvider = require("@truffle/hdwallet-provider");

const infuraKey = "a071c10bdc584d70bb92ace178bdb242";
const fs = require("fs");
const mnemonic = fs.readFileSync(".secret").toString().trim();
const web3 = require("web3-utils");

module.exports = {
  networks: {
    mumbaiMatic: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://polygon-mumbai.g.alchemy.com/v2/kQp00akdF_9M_LfhX_SJgCHTzLMUpXa8`
        ),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      gas: 5500000,
      gasPrice: 37000000000, // Specified in Wei
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.8", // Fetch exact version from solc-bin (default:truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    },
  },
  // Truffle DB is currently disabled by default; to enable it, change enabled: false to enabled: true
  //
  // Note: if you migrated your contracts prior to enabling this field in your Truffle project and want
  // those previously migrated contracts available in the .db directory, you will need to run the following:
  // $ truffle migrate --reset --compile-all
  db: {
    enabled: false,
  },
};
