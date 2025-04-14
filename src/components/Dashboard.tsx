import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import { LinearScale, Tooltip } from 'chart.js';
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface Transaction {
  timestamp: string;
  value: number;
  hash: string;
  type: string;
}

export default function Dashboard({ transactions }: { transactions: Transaction[] }) {
  const data = {
    labels: transactions.map(t => new Date(t.timestamp).toLocaleDateString()),
    datasets: [{
      label: 'PYUSD Transactions',
      data: transactions.map(t => t.value),
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  return (
    <div className="p-6 space-y-8">
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold mb-4">PYUSD Performance</h2>
        <Line data={data} options={{ responsive: true }} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {transactions.slice(0, 3).map(tx => (
          <div key={tx.hash} className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-700">{tx.type}</h3>
            <p className="text-2xl font-bold text-green-600">
              ${tx.value.toFixed(2)}
            </p>
            <p className="text-sm text-gray-500 truncate">{tx.hash}</p>
          </div>
        ))}
      </div>
    </div>
  );
}