import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { GlobalState } from '../../GlobalState';
import Home from './Home/Home';
import Games from './Games/Games';
import Soon from './Soon/Soon';
import Login from './Login/Login';
import Register from './Login/Register';
import Detail from './Details/DetailProducts';
import CreateProduct from './CreateProduct/CreateProduct';
import NotFound from './Utils/Not-Found/NotFound';
import CreateOpinion from './CreateOpinion/CreateOpinion';

function Pages() {

    const state = useContext(GlobalState);
    const [isLogged] = state.userAPI.isLogged;
    const [isAdmin] = state.userAPI.isAdmin;

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/games" component={Games} />
            <Route path="/soon" component={Soon} />

            <Route path="/details/:id" component={Detail} />

            <Route path="/signin" component={ isLogged ? NotFound : Login} />
            <Route path="/signup" component={ isLogged ? NotFound : Register} />

            <Route path="/create_opinion" component={ isLogged ? CreateOpinion : NotFound } />

            <Route path="/create_product" component={ isAdmin ? CreateProduct : NotFound } />
            <Route path="/edit_product/:id" component={ isAdmin ? CreateProduct : NotFound } />

            <Route path="*" component={NotFound} />
        </Switch>
    )
}

export default Pages
