import { Route, Switch } from 'react-router';

import MarketScreen from '../screens/Market/MarketScreen';
import NotFoundScreen from '../screens/NotFound/NotFoundScreen';

import SigninScreen from '../screens/Members/SigninScreen';
import SignupScreen from '../screens/Members/SignupScreen';
import ForgotScreen from '../screens/Members/ForgotScreen';
import ProfileScreen from '../screens/Members/ProfileScreen';

const Navigation = () => (
  <Switch>
    <Route exact path='/' component={SigninScreen} />
    <Route exact path='/market' component={MarketScreen} />
    <Route exact path='/members' component={ProfileScreen} />
    <Route exact path='/members/forgot-password' component={ForgotScreen} />
    <Route exact path='/members/signup' component={SignupScreen} />
    <Route path='*' component={NotFoundScreen} status={404} />
  </Switch>
);

export default Navigation;
