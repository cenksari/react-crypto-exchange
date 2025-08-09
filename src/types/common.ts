export interface ApiResponse<T = unknown> {
  data: T;
  message: string;
  success: boolean;
  errors?: string[];
}

export interface PaginatedResponse<T = unknown> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
}

export interface ApiError {
  message: string;
  code: string;
  details?: Record<string, unknown>;
}

export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}

export interface FormValidationError {
  field: string;
  message: string;
}

export interface NotificationConfig {
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export interface ChartDataPoint {
  x: number | string;
  y: number;
}

export interface DateRange {
  start: Date;
  end: Date;
}

export interface SelectOption<T = string> {
  label: string;
  value: T;
  disabled?: boolean;
}

export type SortDirection = 'asc' | 'desc';

export interface SortConfig {
  field: string;
  direction: SortDirection;
}

export interface TableColumn<T = unknown> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  render?: (value: T[keyof T], item: T) => React.ReactNode;
  width?: string;
}

export interface EnvironmentConfig {
  apiBaseUrl: string;
  wsBaseUrl: string;
  enableMockApi: boolean;
  debugMode: boolean;
  sentryDsn?: string;
  googleAnalyticsId?: string;
}
