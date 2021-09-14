import { Route, Switch } from 'react-router';

import MarketScreen from '../screens/Market/MarketScreen';
import NotFoundScreen from '../screens/NotFound/NotFoundScreen';

import SigninScreen from '../screens/Members/SigninScreen';

const Navigation = () => (
  <Switch>
    <Route exact path='/' component={SigninScreen} />
    <Route exact path='/market' component={MarketScreen} />
    <Route path='*' component={NotFoundScreen} status={404} />
  </Switch>
);

export default Navigation;
