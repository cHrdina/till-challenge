import { Transaction } from './transaction.interface';

export interface Merchant {
  id: string;
  name: string;
  isTrading: boolean;
  currency: string;
  transactions: Transaction[];
}
