import { Suspense, lazy, ComponentType } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from '@/stores';
import LoadingSpinner from '@/components/Common/LoadingSpinner';
import { ROUTES } from '@/utils/constants';

// Lazy load screens for code splitting
const MarketScreen = lazy(() => import('@/screens/Market/MarketScreen'));
const SigninScreen = lazy(() => import('@/screens/Members/SigninScreen'));
const SignupScreen = lazy(() => import('@/screens/Members/SignupScreen'));
const ForgotScreen = lazy(() => import('@/screens/Members/ForgotScreen'));
const ProfileScreen = lazy(() => import('@/screens/Members/ProfileScreen'));
const CapitalScreen = lazy(() => import('@/screens/Capital/CapitalScreen'));
const NotFoundScreen = lazy(() => import('@/screens/NotFound/NotFoundScreen'));
const DashboardScreen = lazy(() => import('@/screens/Dashboard/DashboardScreen'));
const TransactionsScreen = lazy(() => import('@/screens/Transactions/TransactionsScreen'));

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
const isAuthenticated = useAuthStore(state => state.isAuthenticated);

if (!isAuthenticated) {
return <Navigate to={ROUTES.AUTH.SIGNIN} replace />;
}

return <>{children}</>;
};

// Public Route Component (redirect if already authenticated)
const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
const isAuthenticated = useAuthStore(state => state.isAuthenticated);

if (isAuthenticated) {
return <Navigate to={ROUTES.MARKET} replace />;
}

return <>{children}</>;
};

// Route configuration types
interface RouteConfig {
path: string;
component: ComponentType;
}

interface RedirectConfig {
from: string;
to: string;
}

// Public routes configuration
const publicRoutes: RouteConfig[] = [
{ path: ROUTES.HOME, component: SigninScreen },
{ path: ROUTES.AUTH.SIGNIN, component: SigninScreen },
{ path: ROUTES.AUTH.SIGNUP, component: SignupScreen },
{ path: ROUTES.AUTH.FORGOT_PASSWORD, component: ForgotScreen },
];

// Protected routes configuration
const protectedRoutes: RouteConfig[] = [
{ path: ROUTES.MARKET, component: MarketScreen },
{ path: ROUTES.DASHBOARD, component: DashboardScreen },
{ path: ROUTES.PROFILE, component: ProfileScreen },
{ path: ROUTES.CAPITAL, component: CapitalScreen },
{ path: ROUTES.TRANSACTIONS, component: TransactionsScreen },
];

// Legacy redirects configuration
const legacyRedirects: RedirectConfig[] = [
{ from: "/members", to: ROUTES.PROFILE },
{ from: "/members/signup", to: ROUTES.AUTH.SIGNUP },
{ from: "/members/forgot-password", to: ROUTES.AUTH.FORGOT_PASSWORD },
];

const Navigation: React.FC = () => (
<Suspense fallback={<LoadingSpinner />}>
<Routes>
{/* Public Routes */}
{publicRoutes.map(({ path, component: Component }) => (
<Route
key={path}
path={path}
element={
<PublicRoute>
<Component />
</PublicRoute>
}
/>
))}

{/* Protected Routes */}
{protectedRoutes.map(({ path, component: Component }) => (
<Route
key={path}
path={path}
element={
<ProtectedRoute>
<Component />
</ProtectedRoute>
}
/>
))}

{/* Legacy routes for backward compatibility */}
{legacyRedirects.map(({ from, to }) => (
<Route
key={from}
path={from}
element={<Navigate to={to} replace />}
/>
))}

{/* 404 Route */}
<Route path={ROUTES.NOT_FOUND} element={<NotFoundScreen />} />
<Route path="*" element={<Navigate to={ROUTES.NOT_FOUND} replace />} />
</Routes>
</Suspense>
);

export default Navigation;