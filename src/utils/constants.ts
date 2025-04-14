export const NETWORKS = {
    sepolia: {
      chainId: 11155111,
      rpcUrl: `https://sepolia.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`,
      explorer: 'https://sepolia.etherscan.io',
    },
    mainnet: {
      chainId: 1,
      rpcUrl: `https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`,
      explorer: 'https://etherscan.io',
    },
  };
  
  export const PYUSD_CONTRACT = {
    address: '0x6c3ea9036406852006290770BEdFcAbA0e23A0e8', // PYUSD Sepolia testnet
    decimals: 6,
  };
  
  export const SUPPORTED_TOKENS = [PYUSD_CONTRACT.address];