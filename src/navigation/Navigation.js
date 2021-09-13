import { Route, Switch } from 'react-router';

import HomeScreen from '../screens/Home/HomeScreen';
import NotFoundScreen from '../screens/NotFound/NotFoundScreen';

const Navigation = () => (
  <Switch>
    <Route exact path='/' component={HomeScreen} />
    <Route path='*' component={NotFoundScreen} status={404} />
  </Switch>
);

export default Navigation;
