import { NextPage } from 'next';
import Head from 'next/head';
import { useEthers } from '@usedapp/core';
import PaymentFlow from '../components/PaymentFlow';
import WalletConnect from '../components/WalletConnect';

const PayPage: NextPage = () => {
  const { account } = useEthers();

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>PYUSD Tracker | Send Payment</title>
        <meta name="description" content="Send PYUSD Payments" />
      </Head>

      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/assets/pyusd-logo.svg" className="h-10" alt="PYUSD Logo" />
            <h1 className="text-xl font-bold text-gray-800">PYUSD Payment</h1>
          </div>
          <WalletConnect />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-center">
          {account ? (
            <PaymentFlow />
          ) : (
            <div className="bg-white p-8 rounded-xl shadow-sm text-center max-w-md w-full">
              <h2 className="text-xl font-bold mb-4">Connect Your Wallet</h2>
              <p className="text-gray-600 mb-6">
                Please connect your Phantom wallet to send PYUSD payments.
              </p>
              <WalletConnect />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default PayPage;