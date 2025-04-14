import { useState } from 'react';
import { useEtherBalance, useEthers } from '@usedapp/core';
import { formatEther } from 'ethers';

export default function PaymentFlow() {
  const { account } = useEthers();
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const balance = useEtherBalance(account);

  const sendPayment = async () => {
    // Implement transaction sending logic
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-2xl font-bold mb-4">Send PYUSD</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Recipient</label>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          />
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm">Balance: {balance ? formatEther(balance) : '0'} PYUSD</p>
        </div>

        <button
          onClick={sendPayment}
          className="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600"
        >
          Send Payment
        </button>
      </div>
    </div>
  );
}