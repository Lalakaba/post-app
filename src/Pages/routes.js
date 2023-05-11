import { Route,Switch, Redirect} from 'react-router-dom';
import React from "react";
import {AuthPage } from "./AuthPage";
import { CreatePage} from "./CreatePage";
import { LinksPage } from './LinksPage';


export const useRoutes = (isAuthenticated) => { // Флаг говорящий зареген ли пользователь
  if (isAuthenticated) {
    // В системе зареген !!!!!!!!
    return (
      <Switch>
        <Route path='/links' exact>
          <LinksPage />
        </Route>

        <Route path='/create' exact>
          <CreatePage />
        </Route>
        <Redirect to ='/create' />
      </Switch>
    );
  }
//   Еще не в системе
  return (
  <Switch>
<Route path ='/' exact>
    <AuthPage />
    </Route>
    <Redirect to='/' />
  </Switch>
  )
};
