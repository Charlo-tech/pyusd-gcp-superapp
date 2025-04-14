import { JsonRpcProvider } from 'ethers';
import { NETWORKS } from './constants';

export const getProvider = (network: keyof typeof NETWORKS = 'sepolia') => {
  return new JsonRpcProvider(NETWORKS[network].rpcUrl);
};