import React from 'react';
import MerchantComponent from './components/MerchantComponent';
import { mockMerchants, mockCustomers } from './api/mockData';

function App() {
  return (
    <div className="App">
      {mockMerchants.map((merchant) => (
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
