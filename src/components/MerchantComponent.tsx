import React from 'react';
import { Merchant } from '../interfaces/merchant';

const MerchantComponent: React.FC<Merchant> = ({
  id,
  name,
  isTrading,
  transactions,
}) => {
  return (
    <div className="test-container">
      <h1>{name}</h1>
      <ul>
        {transactions.map((t) => (
          <li key={t.id}>
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
