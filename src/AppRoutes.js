import { Switch, Route, Redirect } from 'react-router-dom';

import { EPISODE, HOME, SHOW } from './routes/routesConfig';
import { ShowPage } from './components/show';
import { EpisodePage } from './components/episode';

const AppRoutes = () => (
  <Switch>
    <Route exact path='/'>
      <Redirect to={HOME} />
    </Route>
    <Route path={`${SHOW}/:id`} component={ShowPage} />
    <Route path={`${EPISODE}/:id`} component={EpisodePage} />
  </Switch>
);

export default AppRoutes;