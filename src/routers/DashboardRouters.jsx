import React from 'react';
import NavbarApp from '../ui/NavbarApp';
import { Switch, Redirect, Route } from 'react-router-dom';
import GifsExpertApp from '../GifExpertApp';
import FavoriteScreem from '../favorite/FavoriteScreem';
import LoginScreem from '../auth/LoginScreem';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';
import useCheckAuth from '../auth/hooks/useCheckAuth';

const DashboardRouters = () => {

    const user = useCheckAuth() || { isAuth: false };
 
    const { isAuth } = user;
    
    console.log(isAuth)

   // const isAuth = true;

    return (
        <>
            <NavbarApp />
            <div>
                <Switch>
                    <Route exact path="/" component={ GifsExpertApp } />
                    <PrivateRouter exact path="/favorite" component={ FavoriteScreem } isAuth={ isAuth } />
                    <PublicRouter exact path="/login" component={ LoginScreem } isAuth={ isAuth } />

                    <Redirect to="/" />
                </Switch>
            </div>
        </>
    )
}

DashboardRouters.propTypes = {

}

export default DashboardRouters
