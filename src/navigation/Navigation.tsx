import { Routes, Route } from 'react-router-dom';

// pages
import SigninScreen from '../screens/Members/SigninScreen';
import SignupScreen from '../screens/Members/SignupScreen';
import ForgotScreen from '../screens/Members/ForgotScreen';
import ProfileScreen from '../screens/Members/ProfileScreen';
import MarketScreen from '../screens/Market/MarketScreen';
import CapitalScreen from '../screens/Capital/CapitalScreen';
import DashboardScreen from '../screens/Dashboard/DashboardScreen';
import TransactionsScreen from '../screens/Transactions/TransactionsScreen';

const Navigation = (): JSX.Element => (
  <Routes>
    <Route path='/' element={<SigninScreen />} />
    <Route path='/market' element={<MarketScreen />} />
    <Route path='/members' element={<ProfileScreen />} />
    <Route path='/capital' element={<CapitalScreen />} />
    <Route path='/dashboard' element={<DashboardScreen />} />
    <Route path='/transactions' element={<TransactionsScreen />} />
    <Route path='/members/forgot-password' element={<ForgotScreen />} />
    <Route path='/members/signup' element={<SignupScreen />} />
  </Routes>
);

export default Navigation;
