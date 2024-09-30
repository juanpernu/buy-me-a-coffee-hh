import * as dotenv from "dotenv";
import "@nomicfoundation/hardhat-toolbox-viem";
import "hardhat-cannon";

dotenv.config();

const config = {
  solidity: "0.8.24",
  defaultNetwork: "cannon",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    local: {
      url: "http://127.0.0.1:8545/",
      accounts: process.env.PRIVATE_KEY?.split(","),
      chainId: 1337,
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/tlkQ0zSlB2jJoL5Qk69BJsHjpoi69n4o",
      accounts: process.env.RAINBOW_PRIVATE_KEY?.split(","),
      chainId: 11155111,
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  cannon: {
    // if your smart contracts are open source, set this to true to enable contract verification and pushing of your contact sources
    publicSourceCode: true,
  },
};

export default config;
