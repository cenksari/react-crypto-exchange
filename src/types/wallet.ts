export interface Asset {
  id: string;
  symbol: string;
  name: string;
  icon: string;
  balance: number;
  availableBalance: number;
  lockedBalance: number;
  usdValue: number;
  isActive: boolean;
}

export interface Transaction {
  id: string;
  userId: string;
  type: 'deposit' | 'withdrawal' | 'trade' | 'fee' | 'transfer';
  asset: string;
  amount: number;
  fee: number;
  status: 'pending' | 'completed' | 'failed' | 'cancelled';
  description: string;
  hash?: string;
  address?: string;
  createdAt: string;
  updatedAt: string;
}

export interface DepositRequest {
  asset: string;
  amount: number;
  method: 'crypto' | 'bank_transfer' | 'credit_card';
  bankDetails?: BankDetails;
}

export interface WithdrawalRequest {
  asset: string;
  amount: number;
  address: string;
  tag?: string;
  twoFactorCode?: string;
}

export interface BankDetails {
  accountNumber: string;
  routingNumber: string;
  accountHolderName: string;
  bankName: string;
}

export interface WalletAddress {
  asset: string;
  address: string;
  tag?: string;
  qrCode: string;
  isActive: boolean;
}

export interface TransactionFilter {
  type?: Transaction['type'];
  asset?: string;
  status?: Transaction['status'];
  dateFrom?: string;
  dateTo?: string;
  limit?: number;
  offset?: number;
}
