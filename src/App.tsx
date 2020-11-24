import React from 'react';
import MerchantComponent from './components/MerchantComponent';

const mockData = [
  {
    id: '001',
    name: "Barney's Deals on Wheels",
    isTrading: true,
    currency: 'AUD',
    transactions: [
      {
        id: '001',
        amount: 45000,
        description: 'Minor Service',
        ccLastFour: '4234',
        ccExpiry: '11/04',
        ccToken: 'GH:D54356JJ$#2>GERG',
        customerId: '001',
        date: '2020-09-21 04:56:58.701972',
      },
      {
        id: '002',
        amount: 56000,
        description: 'Major Service',
        ccLastFour: '5643',
        ccExpiry: '11/02',
        ccToken: 'GH:D54356JJ$#2>GERG',
        customerId: '002',
        date: '2020-09-21 04:56:58.701972',
      },
      {
        id: '003',
        amount: 2000,
        description: 'Detailers Polish Medium cut',
        ccLastFour: '3356',
        ccExpiry: '12/04',
        ccToken: 'GH:D54356JJ$#2>GERG',
        customerId: '001',
        date: '2020-09-21 04:56:58.701972',
      },
    ],
  },
];

function App() {
  return (
    <div className="App">
      {mockData.map((merchant) => (
        <MerchantComponent
          id={merchant.id}
          name={merchant.name}
          currency={merchant.currency}
          isTrading={merchant.isTrading}
          transactions={merchant.transactions}
        />
      ))}
    </div>
  );
}

export default App;
