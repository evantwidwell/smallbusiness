import React from 'react'
import { Switch, Route} from 'react-router'
import Dashboard from './containers/Dashboard'
import Login from './containers/Login'
import Listing from './containers/Listing'
import AddListing from'./containers/AddListing'



const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/login" component={Login}/>  
            <Route path="/listing/:id" component={Listing}/>
            <Route path="/addlisting" component={AddListing}/>
        </Switch>
    );
};

export default Router;