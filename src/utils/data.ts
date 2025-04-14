import { TransactionResponse, formatEther } from 'ethers';

type TransactionMetric = {
  date: string;
  count: number;
  totalValue: number;
};

export const processTransactionMetrics = (
  transactions: TransactionResponse[]
): TransactionMetric[] => {
  const dailyMetrics: Record<string, TransactionMetric> = {};

  transactions.forEach(tx => {
    const date = new Date(Number((tx as any).blockTimestamp) * 1000).toISOString().split('T')[0];
    
    if (!dailyMetrics[date]) {
      dailyMetrics[date] = {
        date,
        count: 0,
        totalValue: 0,
      };
    }

    dailyMetrics[date].count++;
    dailyMetrics[date].totalValue += parseFloat(formatEther(tx.value));
  });

  return Object.values(dailyMetrics);
};

export const calculateTotalTransacted = (transactions: TransactionResponse[]) => {
  return transactions.reduce((acc, tx) => 
    acc + parseFloat(formatEther(tx.value)), 0);
};