import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { CryptoCurrency, TradingPair, OrderBook, Trade, MarketStats } from '@/types';

interface MarketStore {
  // State
  currencies: CryptoCurrency[];
  tradingPairs: TradingPair[];
  selectedPair: TradingPair | null;
  orderBook: OrderBook | null;
  recentTrades: Trade[];
  marketStats: MarketStats | null;
  isLoading: boolean;

  // Actions
  fetchCurrencies: () => Promise<void>;
  fetchTradingPairs: () => Promise<void>;
  fetchOrderBook: (symbol: string) => Promise<void>;
  fetchRecentTrades: (symbol: string) => Promise<void>;
  fetchMarketStats: () => Promise<void>;
  setSelectedPair: (pair: TradingPair | null) => void;
  updatePrice: (symbol: string, price: number) => void;
  setLoading: (loading: boolean) => void;
  
  // WebSocket actions
  subscribeToTicker: (symbol: string) => void;
  unsubscribeFromTicker: (symbol: string) => void;
  subscribeToOrderBook: (symbol: string) => void;
  unsubscribeFromOrderBook: (symbol: string) => void;
}

const useMarketStore = create<MarketStore>()(
  devtools(
    (set, get) => ({
      // Initial state
      currencies: [],
      tradingPairs: [],
      selectedPair: null,
      orderBook: null,
      recentTrades: [],
      marketStats: null,
      isLoading: false,

      // Actions
      fetchCurrencies: async () => {
        set({ isLoading: true }, false, 'market/fetch-currencies-start');
        
        try {
          const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/market/currencies`);
          
          if (!response.ok) {
            throw new Error('Failed to fetch currencies');
          }

          const data = await response.json();
          
          set({
            currencies: data.data,
            isLoading: false,
          }, false, 'market/fetch-currencies-success');

        } catch (error) {
          set({ isLoading: false }, false, 'market/fetch-currencies-error');
          throw error;
        }
      },

      fetchTradingPairs: async () => {
        set({ isLoading: true }, false, 'market/fetch-pairs-start');
        
        try {
          const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/market/pairs`);
          
          if (!response.ok) {
            throw new Error('Failed to fetch trading pairs');
          }

          const data = await response.json();
          
          set({
            tradingPairs: data.data,
            isLoading: false,
          }, false, 'market/fetch-pairs-success');

        } catch (error) {
          set({ isLoading: false }, false, 'market/fetch-pairs-error');
          throw error;
        }
      },

      fetchOrderBook: async (symbol: string) => {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/market/orderbook/${symbol}`);
          
          if (!response.ok) {
            throw new Error('Failed to fetch order book');
          }

          const data = await response.json();
          
          set({
            orderBook: data.data,
          }, false, 'market/fetch-orderbook-success');

        } catch (error) {
          console.error('Failed to fetch order book:', error);
          throw error;
        }
      },

      fetchRecentTrades: async (symbol: string) => {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/market/trades/${symbol}`);
          
          if (!response.ok) {
            throw new Error('Failed to fetch recent trades');
          }

          const data = await response.json();
          
          set({
            recentTrades: data.data,
          }, false, 'market/fetch-trades-success');

        } catch (error) {
          console.error('Failed to fetch recent trades:', error);
          throw error;
        }
      },

      fetchMarketStats: async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/market/stats`);
          
          if (!response.ok) {
            throw new Error('Failed to fetch market stats');
          }

          const data = await response.json();
          
          set({
            marketStats: data.data,
          }, false, 'market/fetch-stats-success');

        } catch (error) {
          console.error('Failed to fetch market stats:', error);
          throw error;
        }
      },

      setSelectedPair: (pair: TradingPair | null) => {
        set({ selectedPair: pair }, false, 'market/set-selected-pair');
      },

      updatePrice: (symbol: string, price: number) => {
        const { currencies, tradingPairs } = get();
        
        const updatedCurrencies = currencies.map(currency => 
          currency.symbol === symbol ? { ...currency, price } : currency
        );

        const updatedTradingPairs = tradingPairs.map(pair => 
          pair.symbol === symbol ? { ...pair, price } : pair
        );

        set({
          currencies: updatedCurrencies,
          tradingPairs: updatedTradingPairs,
        }, false, 'market/update-price');
      },

      setLoading: (loading: boolean) => {
        set({ isLoading: loading }, false, 'market/set-loading');
      },

      // WebSocket methods (implementation depends on your WebSocket setup)
      subscribeToTicker: (symbol: string) => {
        // WebSocket subscription logic would go here
        console.log(`Subscribing to ticker for ${symbol}`);
      },

      unsubscribeFromTicker: (symbol: string) => {
        // WebSocket unsubscription logic would go here
        console.log(`Unsubscribing from ticker for ${symbol}`);
      },

      subscribeToOrderBook: (symbol: string) => {
        // WebSocket subscription logic would go here
        console.log(`Subscribing to order book for ${symbol}`);
      },

      unsubscribeFromOrderBook: (symbol: string) => {
        // WebSocket unsubscription logic would go here
        console.log(`Unsubscribing from order book for ${symbol}`);
      },
    }),
    {
      name: 'market-store',
    }
  )
);

export default useMarketStore;
