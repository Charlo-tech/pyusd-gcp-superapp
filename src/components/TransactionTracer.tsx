import { useState, useEffect } from 'react';
import { useEthers } from '@usedapp/core';
import { formatEther, formatUnits, isHexString, parseEther, getAddress } from 'ethers';

const generateDummyData = (count: number) => {
  const types = ['PYUSD Transfer', 'PYUSD Swap', 'PYUSD Deposit', 'PYUSD Withdrawal'];
  const statuses = ['Confirmed', 'Pending', 'Failed'];
  const addresses = [
    '0x3f5CE5FBFe3E9af3971dD833D26bA9b5C936f0bE',
    '0xDecAF9CD2367cdbb726E904cD6397eDFcAe6068D',
    '0x742d35Cc6634C0532925a3b844Bc454e4438f44e'
  ];

  return Array.from({ length: count }, (_, i) => ({
    hash: `0x${Math.random().toString(16).substr(2, 64)}`,
    type: types[i % types.length],
    value: Math.random() * 1000 + 50,
    timestamp: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
    from: addresses[Math.floor(Math.random() * addresses.length)],
    to: addresses[Math.floor(Math.random() * addresses.length)],
    gasUsed: Math.floor(Math.random() * 100000) + 21000,
    status: statuses[Math.floor(Math.random() * statuses.length)]
  }));
};

const TransactionTracer = () => {
  const { account } = useEthers();
  const [transactionHash, setTransactionHash] = useState('');
  const [traceResult, setTraceResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showDummyData, setShowDummyData] = useState(false);

  // Load dummy data on component mount
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      setTraceResult({ calls: generateDummyData(8) });
    }
  }, []);

  const formatValue = (value: string) => {
    return parseFloat(value).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 2
    });
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  const getStatusStyle = (status: string) => ({
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '0.75rem',
    fontWeight: 600,
    backgroundColor: 
      status === 'Confirmed' ? '#dcfce7' :
      status === 'Pending' ? '#fef9c3' : '#fee2e2',
    color: 
      status === 'Confirmed' ? '#166534' :
      status === 'Pending' , '#854d0e' : '#991b1b'
  });

  return (
    <div style={styles.container}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>PYUSD Transactions</h2>
        <button
          onClick={() => setShowDummyData(!showDummyData)}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            backgroundColor: '#6366f1',
            color: 'white',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          {showDummyData ? 'Show Real Data' : 'Show Dummy Data'}
        </button>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Type</th>
            <th style={styles.tableHeader}>From</th>
            <th style={styles.tableHeader}>To</th>
            <th style={styles.tableHeader}>Value</th>
            <th style={styles.tableHeader}>Date</th>
            <th style={styles.tableHeader}>Gas Used</th>
            <th style={styles.tableHeader}>Status</th>
          </tr>
        </thead>
        <tbody>
          {(showDummyData ? generateDummyData(10) : traceResult?.calls || []).map((tx: any, index: number) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? 'white' : '#f8fafc' }}>
              <td style={styles.tableCell}>{tx.type}</td>
              <td style={{ ...styles.tableCell, fontFamily: 'monospace' }}>{tx.from}</td>
              <td style={{ ...styles.tableCell, fontFamily: 'monospace' }}>{tx.to}</td>
              <td style={styles.tableCell}>{formatValue(tx.value)}</td>
              <td style={styles.tableCell}>{formatDate(tx.timestamp)}</td>
              <td style={styles.tableCell}>{tx.gasUsed.toLocaleString()}</td>
              <td style={styles.tableCell}>
                <span style={getStatusStyle(tx.status)}>
                  {tx.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {!traceResult?.calls?.length && !showDummyData && (
        <div style={{ 
          padding: '2rem', 
          textAlign: 'center', 
          color: '#64748b',
          border: '1px dashed #e2e8f0',
          borderRadius: '0.5rem',
          marginTop: '1rem'
        }}>
          No transaction data available. {account ? 'Search for a transaction above' : 'Connect your wallet to view transactions'}
        </div>
      )}
    </div>
  );
};

// Reuse previous styles from earlier implementation
const styles = { 
  container: { /* ... */ },
  table: { /* ... */ },
  tableHeader: { /* ... */ },
  tableCell: { /* ... */ }
};

export default TransactionTracer;