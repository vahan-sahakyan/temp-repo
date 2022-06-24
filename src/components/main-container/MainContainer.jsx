import React from 'react';
import './MainContainer.scss';
import { Redirect, Route, Switch } from 'react-router-dom';

// routes config
import routes from '../../routes';

const MainContainer = () => {
  return (
    <div className="content-wrapper">
      <Switch>
        {/* {routes.map((route, idx) => {
          return route.component && (
            <Route
              key={idx}
              path={route.path}
              exact={route.exact}
              name={route.name}
              render={props => (
                <div className='sub-wrapper'>
                  <route.component {...props} />
                </div>
              )} />
          )
        })} */}
        {/* <Redirect from="/" to="/dashboard" /> */}
      </Switch>
    </div>
  );
};

export default MainContainer;
