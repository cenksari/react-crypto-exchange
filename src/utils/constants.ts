// Application constants
export const APP_CONFIG = {
  NAME: import.meta.env.VITE_APP_NAME || 'Crypto Exchange',
  VERSION: import.meta.env.VITE_APP_VERSION || '1.0.0',
  ENVIRONMENT: import.meta.env.VITE_APP_ENVIRONMENT || 'development',
} as const;

// API endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    PROFILE: '/auth/profile',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
    CHANGE_PASSWORD: '/auth/change-password',
    VERIFY_EMAIL: '/auth/verify-email',
    VERIFY_PHONE: '/auth/verify-phone',
    ENABLE_2FA: '/auth/2fa/enable',
    DISABLE_2FA: '/auth/2fa/disable',
  },
  MARKET: {
    CURRENCIES: '/market/currencies',
    PAIRS: '/market/pairs',
    TICKER: '/market/ticker',
    ORDERBOOK: '/market/orderbook',
    TRADES: '/market/trades',
    CANDLESTICK: '/market/candlestick',
    STATS: '/market/stats',
  },
  TRADING: {
    ORDERS: '/trading/orders',
    TRADES: '/trading/trades',
    HISTORY: '/trading/history',
  },
  WALLET: {
    ASSETS: '/wallet/assets',
    TRANSACTIONS: '/wallet/transactions',
    DEPOSIT: '/wallet/deposit',
    WITHDRAW: '/wallet/withdraw',
    ADDRESSES: '/wallet/addresses',
  },
} as const;

// Local storage keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth-token',
  REFRESH_TOKEN: 'refresh-token',
  USER_PREFERENCES: 'user-preferences',
  THEME: 'theme',
  LANGUAGE: 'language',
} as const;

// Route paths
export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  MARKET: '/market',
  TRADING: '/trading',
  WALLET: '/wallet',
  PROFILE: '/profile',
  TRANSACTIONS: '/transactions',
  AUTH: {
    SIGNIN: '/auth/signin',
    SIGNUP: '/auth/signup',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
  },
  CAPITAL: '/capital',
  NOT_FOUND: '/404',
} as const;

// Form validation
export const VALIDATION_RULES = {
  PASSWORD: {
    MIN_LENGTH: 8,
    MAX_LENGTH: 128,
    REQUIRE_UPPERCASE: true,
    REQUIRE_LOWERCASE: true,
    REQUIRE_NUMBER: true,
    REQUIRE_SPECIAL_CHAR: true,
  },
  EMAIL: {
    MAX_LENGTH: 254,
  },
  PHONE: {
    MIN_LENGTH: 10,
    MAX_LENGTH: 15,
  },
  NAME: {
    MIN_LENGTH: 1,
    MAX_LENGTH: 50,
  },
} as const;

// Trading constants
export const TRADING = {
  ORDER_TYPES: ['market', 'limit', 'stop_loss', 'stop_limit'] as const,
  ORDER_SIDES: ['buy', 'sell'] as const,
  ORDER_STATUSES: ['pending', 'filled', 'partially_filled', 'cancelled', 'rejected'] as const,
  MIN_ORDER_SIZE: 0.00001,
  MAX_ORDER_SIZE: 1000000,
  DEFAULT_CHART_INTERVALS: ['1m', '5m', '15m', '1h', '4h', '1d', '1w'] as const,
} as const;

// Market data
export const MARKET = {
  DEFAULT_QUOTE_ASSETS: ['USDT', 'BTC', 'ETH', 'BNB'] as const,
  PRICE_PRECISION: 8,
  QUANTITY_PRECISION: 8,
  WEBSOCKET_RECONNECT_INTERVAL: 5000,
  ORDERBOOK_DEPTH: 20,
  RECENT_TRADES_LIMIT: 50,
} as const;

// UI constants
export const UI = {
  BREAKPOINTS: {
    SM: 640,
    MD: 768,
    LG: 1024,
    XL: 1280,
    '2XL': 1536,
  },
  ANIMATION_DURATION: 200,
  DEBOUNCE_DELAY: 300,
  TOAST_DURATION: 5000,
  PAGINATION_LIMIT: 20,
} as const;

// Security
export const SECURITY = {
  SESSION_TIMEOUT: 15 * 60 * 1000, // 15 minutes
  REFRESH_TOKEN_EXPIRY: 7 * 24 * 60 * 60 * 1000, // 7 days
  MAX_LOGIN_ATTEMPTS: 5,
  LOGIN_LOCKOUT_DURATION: 30 * 60 * 1000, // 30 minutes
  CSRF_TOKEN_HEADER: 'X-CSRF-Token',
  RATE_LIMIT: {
    LOGIN: 5, // requests per minute
    API: 100, // requests per minute
    WEBSOCKET: 50, // messages per second
  },
} as const;

// Error messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your internet connection.',
  SESSION_EXPIRED: 'Your session has expired. Please log in again.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  VALIDATION_FAILED: 'Please check your input and try again.',
  SERVER_ERROR: 'Server error. Please try again later.',
  UNKNOWN_ERROR: 'An unexpected error occurred.',
} as const;

// Success messages
export const SUCCESS_MESSAGES = {
  LOGIN: 'Successfully logged in!',
  LOGOUT: 'Successfully logged out!',
  REGISTRATION: 'Account created successfully! Please verify your email.',
  PASSWORD_CHANGED: 'Password changed successfully!',
  PROFILE_UPDATED: 'Profile updated successfully!',
  ORDER_PLACED: 'Order placed successfully!',
  ORDER_CANCELLED: 'Order cancelled successfully!',
} as const;

// Feature flags
export const FEATURES = {
  TWO_FACTOR_AUTH: import.meta.env.VITE_ENABLE_2FA === 'true',
  KYC_VERIFICATION: import.meta.env.VITE_ENABLE_KYC === 'true',
  TRADING: import.meta.env.VITE_ENABLE_TRADING === 'true',
  DARK_MODE: true,
  NOTIFICATIONS: true,
  ADVANCED_CHARTS: true,
} as const;

// Environment configuration
export const ENV = {
  IS_DEVELOPMENT: import.meta.env.DEV,
  IS_PRODUCTION: import.meta.env.PROD,
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
  WS_BASE_URL: import.meta.env.VITE_WS_BASE_URL,
  SENTRY_DSN: import.meta.env.VITE_SENTRY_DSN,
  GA_ID: import.meta.env.VITE_GOOGLE_ANALYTICS_ID,
} as const;

// Regular expressions
export const REGEX = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^\+?[1-9]\d{1,14}$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
  CRYPTO_ADDRESS: {
    BTC: /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/,
    ETH: /^0x[a-fA-F0-9]{40}$/,
    USDT: /^0x[a-fA-F0-9]{40}$/,
  },
} as const;

// HTTP status codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
} as const;
