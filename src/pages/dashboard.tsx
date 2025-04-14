import { NextPage } from 'next';
import Head from 'next/head';
import { useEthers } from '@usedapp/core';
import Dashboard from '../components/Dashboard';
import WalletConnect from '../components/WalletConnect';

// Mock data - replace with real API calls
const mockTransactions = [
  {
    hash: '0x4f7f...3a2b',
    type: 'PYUSD Transfer',
    value: 150.42,
    timestamp: '2023-05-15T10:30:00Z'
  },
  {
    hash: '0x8e2d...7f1c',
    type: 'PYUSD Swap',
    value: 89.75,
    timestamp: '2023-05-15T09:15:00Z'
  },
  {
    hash: '0x1a3f...5e9d',
    type: 'PYUSD Deposit',
    value: 1200.00,
    timestamp: '2023-05-14T16:45:00Z'
  },
  // Add more mock data as needed
];

const DashboardPage: NextPage = () => {
  const { account } = useEthers();

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>PYUSD Tracker | Dashboard</title>
        <meta name="description" content="PYUSD Analytics Dashboard" />
      </Head>

      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/assets/pyusd-logo.svg" className="h-10" alt="PYUSD Logo" />
            <h1 className="text-xl font-bold text-gray-800">PYUSD Dashboard</h1>
          </div>
          <WalletConnect />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {account ? (
          <Dashboard transactions={mockTransactions} />
        ) : (
          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <h2 className="text-xl font-bold mb-4">Connect Your Wallet</h2>
            <p className="text-gray-600 mb-6">
              Please connect your Phantom wallet to view the PYUSD dashboard.
            </p>
            <WalletConnect />
          </div>
        )}
      </main>
    </div>
  );
};

export default DashboardPage;