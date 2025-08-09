# Crypto Exchange Platform

A modern, secure, and high-performance cryptocurrency trading platform built with React 19, TypeScript, and Vite.

## 🚀 Features

### Core Features
- **React 19** with latest features and optimizations
- **TypeScript** for type safety and better developer experience
- **Vite** for ultra-fast development and optimized builds
- **Zustand** for lightweight state management
- **React Hook Form** with Zod validation for robust form handling
- **React Router v7** for modern routing
- **Hot Toast** for elegant notifications

### Security Features
- Input sanitization and XSS protection
- CSRF token support
- Secure authentication with JWT
- Password strength validation
- Two-factor authentication ready
- Rate limiting configuration

### Performance Optimizations
- Code splitting with React.lazy
- Dynamic imports for heavy libraries (ApexCharts)
- Bundle optimization with manual chunking
- Image optimization and lazy loading
- Service worker ready
- Memoization and React.Suspense

### Developer Experience
- Strict TypeScript configuration
- Comprehensive ESLint rules
- Prettier code formatting
- Vitest for testing
- Path aliases for clean imports
- Error boundaries for graceful error handling

### Production Ready
- Docker containerization
- CI/CD pipeline with GitHub Actions
- Environment-based configuration
- Health checks and monitoring
- Nginx configuration for production
- Security headers and CSP

## 🏗️ Architecture

```
src/
├── components/          # Reusable UI components
│   ├── Common/         # Generic components
│   ├── Forms/          # Form-specific components
│   └── ErrorBoundary/  # Error handling
├── hooks/              # Custom React hooks
├── layouts/            # Page layouts
├── screens/            # Page components
├── services/           # API services
├── stores/             # State management
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── styles/             # Global styles
```

## 🛠️ Technology Stack

### Frontend
- **React 19.1.1** - Latest React with concurrent features
- **TypeScript 5.8** - Type safety and IDE support
- **Vite 6.1** - Next generation build tool
- **Zustand 5.0** - Lightweight state management
- **React Hook Form 7.54** - Performant forms with validation
- **Zod 3.24** - Schema validation
- **Lucide React** - Modern icon library
- **Clsx** - Conditional class names

### Development Tools
- **ESLint 9.32** - Linting with modern rules
- **Prettier 3.6** - Code formatting
- **Vitest 2.1** - Fast unit testing
- **TypeScript ESLint** - TypeScript-specific linting

### Production
- **Docker** - Containerization
- **Nginx** - Web server and reverse proxy
- **GitHub Actions** - CI/CD pipeline

## 🚀 Quick Start

### Prerequisites
- Node.js 20+ and npm/yarn
- Docker (optional, for containerization)

### Development Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd react-crypto-exchange-optimized
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. **Start development server**
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build           # Build for production
npm run preview         # Preview production build locally

# Quality Assurance
npm run lint            # Run ESLint
npm run lint:fix        # Fix ESLint errors
npm run format          # Format code with Prettier
npm run format:check    # Check code formatting
npm run type-check      # Run TypeScript compiler

# Testing
npm run test            # Run tests
npm run test:ui         # Run tests with UI
npm run test:coverage   # Run tests with coverage
```

## 🐳 Docker Deployment

### Build and Run with Docker

```bash
# Build the Docker image
docker build -t crypto-exchange .

# Run the container
docker run -p 3000:80 crypto-exchange
```

### Using Docker Compose

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

## 🔧 Configuration

### Environment Variables

Create `.env` files for different environments:

- `.env` - Development configuration
- `.env.production` - Production configuration
- `.env.example` - Template with all available variables

Key environment variables:

```bash
# Application
VITE_APP_NAME=Crypto Exchange
VITE_APP_VERSION=1.0.0
VITE_APP_ENVIRONMENT=production

# API Configuration
VITE_API_BASE_URL=https://api.cryptoexchange.com
VITE_WS_BASE_URL=wss://ws.cryptoexchange.com

# Security
VITE_JWT_SECRET=your_jwt_secret
VITE_CSRF_TOKEN=your_csrf_token

# Features
VITE_ENABLE_2FA=true
VITE_ENABLE_KYC=true
VITE_ENABLE_TRADING=true

# Monitoring
VITE_SENTRY_DSN=your_sentry_dsn
VITE_GOOGLE_ANALYTICS_ID=your_ga_id
```

## 🔒 Security Features

### Authentication & Authorization
- JWT-based authentication
- Refresh token mechanism
- Protected routes with role-based access
- Session management and timeout

### Input Validation & Sanitization
- Zod schema validation
- XSS protection through input sanitization
- CSRF protection ready
- SQL injection prevention

### Security Headers
- Content Security Policy (CSP)
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Referrer Policy

## 🧪 Testing

The project uses Vitest for testing with comprehensive test setup:

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run tests with UI
npm run test:ui
```

## 📦 Build & Deployment

### Production Build

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory with:
- Minified and compressed files
- Code splitting for optimal loading
- Tree shaking for smaller bundles
- Source maps disabled for security

### CI/CD Pipeline

The project includes a comprehensive GitHub Actions workflow:

1. **Code Quality**: Linting, formatting, and type checking
2. **Testing**: Unit tests with coverage reporting
3. **Security**: Vulnerability scanning with Trivy
4. **Build**: Production build and Docker image creation
5. **Deploy**: Automated deployment to production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes and add tests
4. Run quality checks: `npm run lint && npm run test`
5. Commit your changes: `git commit -m 'Add new feature'`
6. Push to the branch: `git push origin feature/new-feature`
7. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

**Note**: This is a demo project for educational purposes. Do not use in production without proper security auditing and compliance checks for financial applications.
