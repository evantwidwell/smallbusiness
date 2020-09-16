import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Home from './containers/Home'
import cookie from 'cookie'
import Login from './components/Login'

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie)
  return cookies["loggedIn"] ? true : false
}

const ProtectedRoute = ({component: Component, ...rest}) => {
  return (
      <Route
      {...rest}
      render={(props) => checkAuth()
          ? <Component {...props} />
          : <Redirect to="/login" />}
      />
  )
}
const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            
            <Route path="/login" component={Login} />
            
        </Switch>
    );
};

export default Router;