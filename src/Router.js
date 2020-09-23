import React from 'react'
import { Switch, Route} from 'react-router'
import Dashboard from './containers/Dashboard'
import cookie from 'cookie'
import Login from './containers/Login'
import Listing from './containers/Listing'

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie)
  return cookies["loggedIn"] ? true : false
}


const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/login" component={Login}/>  
            <Route path="/listing/:id" component={Listing}/> 
        </Switch>
    );
};

export default Router;