require("@nomiclabs/hardhat-waffle");
require("chai");
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

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
  solidity: "0.8.7",
  etherscan: {
    apiKey: {
      bsc: "SECRET"
    },
  },

  networks: {
    local: {
      url: `http://127.0.0.1:8545/`,
      accounts: [`0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80`]
    },
    matic: {
      url: "https://rpc-mumbai.matic.today",
      accounts: ["e645996b1cff9e0db7605ca534d1a5dfbcf3b7c1060c1613dcc5f20a45231f19"]
    },
    bsc: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts: [`0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80`],
      gas: 5500000
    },
    bscmain: {
      url: "https://bsc-dataseed1.binance.org",
      accounts: [`0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80`],
      gas: 5500000
    },
    avax: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      accounts: ["0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"]
    }
  }
};
