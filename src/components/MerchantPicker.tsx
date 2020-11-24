import React, { useState } from 'react';
import { Merchant } from '../interfaces/merchant';
import MerchantComponent from './MerchantComponent';

type Props = {
  merchants: Merchant[];
};

const MerchantPicker: React.FC<Props> = ({ merchants }) => {
  const [activeItem, setActiveItem] = useState('');

  return (
    <div className="picker-container">
      <div>
        <label htmlFor="merchants">Select a Merchant: </label>
        <select name="merchants" id="merchants" className="dropdown">
          {merchants.map((merchant) => (
            <option value={merchant.id}>{merchant.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MerchantPicker;
