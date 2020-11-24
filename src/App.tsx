import React from 'react';
import MerchantComponent from './components/MerchantComponent';
import { mockMerchants, mockCustomers } from './api/mockData';
import MerchantPicker from './components/MerchantPicker';

function App() {
  return (
    <div className="App">
      {/* {mockMerchants.map((merchant) => (
        <MerchantComponent {...merchant} />
      ))} */}
      <MerchantPicker merchants={mockMerchants} />
    </div>
  );
}

export default App;
