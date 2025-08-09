// Number formatting utilities
export const formatCurrency = (
  amount: number,
  currency = 'USD',
  decimals = 2
): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(amount);
};

export const formatNumber = (
  value: number,
  decimals = 2,
  compact = false
): string => {
  if (compact && Math.abs(value) >= 1000) {
    return new Intl.NumberFormat('en-US', {
      notation: 'compact',
      minimumFractionDigits: 0,
      maximumFractionDigits: 1,
    }).format(value);
  }

  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals,
  }).format(value);
};

export const formatPercentage = (
  value: number,
  decimals = 2,
  showSign = false
): string => {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value / 100);

  if (showSign && value > 0) {
    return `+${formatted}`;
  }

  return formatted;
};

export const formatCryptoAmount = (
  amount: number,
  symbol: string,
  decimals = 8
): string => {
  const formatted = formatNumber(amount, decimals);
  return `${formatted} ${symbol.toUpperCase()}`;
};

export const formatPrice = (
  price: number,
  baseDecimals = 2,
  quotePrecision = 8
): string => {
  if (price >= 1) {
    return formatNumber(price, baseDecimals);
  } else {
    // For small prices, show more decimals
    const decimals = Math.max(quotePrecision, Math.abs(Math.floor(Math.log10(price))) + 2);
    return formatNumber(price, Math.min(decimals, 10));
  }
};

export const formatVolume = (volume: number): string => {
  if (volume >= 1000000000) {
    return `${(volume / 1000000000).toFixed(1)}B`;
  } else if (volume >= 1000000) {
    return `${(volume / 1000000).toFixed(1)}M`;
  } else if (volume >= 1000) {
    return `${(volume / 1000).toFixed(1)}K`;
  }
  return formatNumber(volume, 0);
};

export const formatMarketCap = (marketCap: number): string => {
  if (marketCap >= 1000000000000) {
    return `${(marketCap / 1000000000000).toFixed(2)}T`;
  } else if (marketCap >= 1000000000) {
    return `${(marketCap / 1000000000).toFixed(2)}B`;
  } else if (marketCap >= 1000000) {
    return `${(marketCap / 1000000).toFixed(2)}M`;
  }
  return formatNumber(marketCap, 0);
};

// Date formatting utilities
export const formatDate = (
  date: string | Date,
  options: Intl.DateTimeFormatOptions = {}
): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };

  return new Intl.DateTimeFormat('en-US', { ...defaultOptions, ...options }).format(dateObj);
};

export const formatTime = (date: string | Date): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  return new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(dateObj);
};

export const formatRelativeTime = (date: string | Date): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diff = now.getTime() - dateObj.getTime();

  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return rtf.format(-days, 'day');
  } else if (hours > 0) {
    return rtf.format(-hours, 'hour');
  } else if (minutes > 0) {
    return rtf.format(-minutes, 'minute');
  } else {
    return rtf.format(-seconds, 'second');
  }
};

export const formatDuration = (milliseconds: number): string => {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days}d ${hours % 24}h`;
  } else if (hours > 0) {
    return `${hours}h ${minutes % 60}m`;
  } else if (minutes > 0) {
    return `${minutes}m ${seconds % 60}s`;
  } else {
    return `${seconds}s`;
  }
};

// String utilities
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 3)}...`;
};

export const truncateAddress = (address: string, start = 6, end = 4): string => {
  if (address.length <= start + end) return address;
  return `${address.slice(0, start)}...${address.slice(-end)}`;
};

export const capitalizeFirst = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const formatBytes = (bytes: number, decimals = 2): string => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};

// Color utilities
export const getPriceChangeColor = (change: number): string => {
  if (change > 0) return 'text-green-500';
  if (change < 0) return 'text-red-500';
  return 'text-gray-500';
};

export const getPriceChangeIcon = (change: number): string => {
  if (change > 0) return '↗';
  if (change < 0) return '↘';
  return '→';
};
