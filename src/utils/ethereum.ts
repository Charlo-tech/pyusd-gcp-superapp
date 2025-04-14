import {
    formatEther,
    isAddress,
    isHexString,
    getAddress,
    Transaction,
  } from 'ethers';
  
  export const formatETH = (wei: bigint) => {
    return parseFloat(formatEther(wei)).toLocaleString('en-US', {
      minimumFractionDigits: 4,
      maximumFractionDigits: 4,
    });
  };
  
  export const validateAddress = (address: string) => {
    return isAddress(address);
  };
  
  export const validateTxHash = (hash: string) => {
    return isHexString(hash, 32);
  };
  
  export const parseTransactionData = (rawTx: string) => {
    try {
      return Transaction.from(rawTx);
    } catch (error) {
      throw new Error('Invalid raw transaction data');
    }
  };
  
  export const normalizeAddress = (address: string) => {
    return getAddress(address.toLowerCase());
  };