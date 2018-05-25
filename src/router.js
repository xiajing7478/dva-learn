import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import List from './routes/List/List'
import Login from './routes/User/Login'
import Count from './routes/Count/Count'
import Demo from './routes/Demo/Demo'
import Test from "./routes/TEST/test";
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Count} />
        <Route path="/list" exact component={List} />
        <Route path="/login" exact component={Login} />
        <Route path="/demo" exact component={Demo} />
        <Route path="/test" exact component={Test} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
