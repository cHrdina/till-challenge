import React, { useState } from 'react';
import { Merchant } from '../interfaces/merchant';
import MerchantComponent from './MerchantComponent';

type Props = {
  merchants: Merchant[];
};

const MerchantPicker: React.FC<Props> = ({ merchants }) => {
  const [activeItem, setActiveItem] = useState<Merchant | undefined>(
    merchants[0]
  );

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = e.target.value;
    const selectedItem = merchants.find(
      (merchant) => merchant.id === selectedId
    );

    setActiveItem(selectedItem);
  };

  return (
    <div className="picker-container">
      <div>
        <label htmlFor="merchants">Select a Merchant: </label>
        <select
          name="merchants"
          id="merchants"
          className="dropdown"
          onChange={(e) => handleSelect(e)}
        >
          {merchants.map((merchant) => (
            <option value={merchant.id}>{merchant.name}</option>
          ))}
        </select>
      </div>
      <div className="merchant-picker-results">
        {activeItem && <MerchantComponent {...activeItem} />}
      </div>
    </div>
  );
};

export default MerchantPicker;
