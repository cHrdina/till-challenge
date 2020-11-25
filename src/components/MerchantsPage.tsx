import React, { useEffect, useState } from 'react';
import { Merchant } from '../interfaces/merchant.interface';
import MerchantPicker from './MerchantPicker';
import * as client from '../api/client';

type Props = {};

const MerchantsPage: React.FC<Props> = ({}) => {
  const [merchants, setMerchants] = useState<Merchant[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    handleDataFetch();
  }, [isLoading]);

  const handleDataFetch = () => {
    client.get('/merchants').then((responseJson) => {
      setMerchants(responseJson);
      setIsLoading(false);
    });
  };

  return (
    <div className="merchant-page">
      <MerchantPicker merchants={merchants} />
    </div>
  );
};

export default MerchantsPage;
