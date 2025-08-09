/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string
  readonly VITE_APP_VERSION: string
  readonly VITE_APP_ENVIRONMENT: string
  readonly VITE_API_BASE_URL: string
  readonly VITE_WS_BASE_URL: string
  readonly VITE_JWT_SECRET: string
  readonly VITE_REFRESH_TOKEN_EXPIRY: string
  readonly VITE_ACCESS_TOKEN_EXPIRY: string
  readonly VITE_ENABLE_2FA: string
  readonly VITE_ENABLE_KYC: string
  readonly VITE_ENABLE_TRADING: string
  readonly VITE_SENTRY_DSN: string
  readonly VITE_GOOGLE_ANALYTICS_ID: string
  readonly VITE_CSP_NONCE: string
  readonly VITE_CSRF_TOKEN: string
  readonly VITE_ENABLE_SERVICE_WORKER: string
  readonly VITE_CACHE_DURATION: string
  readonly VITE_DEBUG_MODE: string
  readonly VITE_MOCK_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
