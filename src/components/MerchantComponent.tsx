import React from 'react';
import { Merchant } from '../interfaces/merchant.interface';
import StatusTag from './StatusTag';

const MerchantComponent: React.FC<Merchant> = ({
  id,
  name,
  isTrading,
  transactions,
}) => {
  return (
    <div className="merchant-container">
      <h1>{name}</h1>
      {isTrading && <StatusTag active text="Currently Trading" />}
      <label>
        <h3>Transactions:</h3>
      </label>
      <ul aria-label="transactions list">
        {transactions.map((t) => (
          <li className="transaction-container" key={t.id}>
            <ul>
              {Object.entries(t).map(([key, value]) => (
                <li key={key}>
                  {key}: {value}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MerchantComponent;
