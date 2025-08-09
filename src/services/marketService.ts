import apiClient from './apiClient';
import type { 
  CryptoCurrency, 
  TradingPair, 
  OrderBook, 
  Trade, 
  Order,
  CreateOrderRequest,
  CandlestickData,
  MarketStats 
} from '@/types';

export class MarketService {
  async getCurrencies(): Promise<CryptoCurrency[]> {
    const response = await apiClient.get<CryptoCurrency[]>('/market/currencies');
    return response.data;
  }

  async getTradingPairs(): Promise<TradingPair[]> {
    const response = await apiClient.get<TradingPair[]>('/market/pairs');
    return response.data;
  }

  async getTradingPair(symbol: string): Promise<TradingPair> {
    const response = await apiClient.get<TradingPair>(`/market/pairs/${symbol}`);
    return response.data;
  }

  async getOrderBook(symbol: string, limit = 50): Promise<OrderBook> {
    const response = await apiClient.get<OrderBook>(`/market/orderbook/${symbol}`, { 
      limit: limit.toString() 
    });
    return response.data;
  }

  async getRecentTrades(symbol: string, limit = 50): Promise<Trade[]> {
    const response = await apiClient.get<Trade[]>(`/market/trades/${symbol}`, { 
      limit: limit.toString() 
    });
    return response.data;
  }

  async getCandlestickData(
    symbol: string, 
    interval: string = '1h', 
    limit = 100
  ): Promise<CandlestickData[]> {
    const response = await apiClient.get<CandlestickData[]>(`/market/candlestick/${symbol}`, {
      interval,
      limit: limit.toString()
    });
    return response.data;
  }

  async getMarketStats(): Promise<MarketStats> {
    const response = await apiClient.get<MarketStats>('/market/stats');
    return response.data;
  }

  async getTicker24h(symbol?: string): Promise<TradingPair | TradingPair[]> {
    const endpoint = symbol ? `/market/ticker/${symbol}` : '/market/ticker';
    const response = await apiClient.get<TradingPair | TradingPair[]>(endpoint);
    return response.data;
  }

  async createOrder(orderData: CreateOrderRequest): Promise<Order> {
    const response = await apiClient.post<Order>('/trading/orders', orderData);
    return response.data;
  }

  async getOrders(symbol?: string, status?: string): Promise<Order[]> {
    const params: Record<string, string> = {};
    if (symbol) params.symbol = symbol;
    if (status) params.status = status;

    const response = await apiClient.get<Order[]>('/trading/orders', params);
    return response.data;
  }

  async getOrder(orderId: string): Promise<Order> {
    const response = await apiClient.get<Order>(`/trading/orders/${orderId}`);
    return response.data;
  }

  async cancelOrder(orderId: string): Promise<{ message: string }> {
    const response = await apiClient.delete<{ message: string }>(`/trading/orders/${orderId}`);
    return response.data;
  }

  async getOrderHistory(
    symbol?: string, 
    limit = 50, 
    offset = 0
  ): Promise<{ orders: Order[]; total: number }> {
    const params: Record<string, string> = {
      limit: limit.toString(),
      offset: offset.toString()
    };
    if (symbol) params.symbol = symbol;

    const response = await apiClient.get<{ orders: Order[]; total: number }>('/trading/orders/history', params);
    return response.data;
  }

  async getTradeHistory(
    symbol?: string,
    limit = 50,
    offset = 0
  ): Promise<{ trades: Trade[]; total: number }> {
    const params: Record<string, string> = {
      limit: limit.toString(),
      offset: offset.toString()
    };
    if (symbol) params.symbol = symbol;

    const response = await apiClient.get<{ trades: Trade[]; total: number }>('/trading/trades/history', params);
    return response.data;
  }
}

// Create singleton instance
const marketService = new MarketService();
export default marketService;
