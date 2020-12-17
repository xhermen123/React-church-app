import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Menu from './../components/Menu';
import Footer from './../components/Footer';
import Home from './../components/Home';
import Visit from './../components/Visit';
import Give from './../components/Give';
import Contact from './../components/Contact';
import Media from './../components/Media';
import Connect from './../components/Connect';
import Vernon from './../components/Vernon';
import Revelstoke from './../components/Revelstoke';
import Kelowna from './../components/Kelowna';

export default () => (
    <div>
        <Menu />
        <BrowserRouter>
            <Switch>
                <Route path="/" exact render={(props) => <Home {...props} />} />
                <Route path="/home" exact render={(props) => <Home {...props} />} />
                <Route path="/visit" exact render={(props) => <Visit {...props} />} />
                <Route path="/give" exact render={(props) => <Give {...props} />} />
                <Route path="/contact" exact render={(props) => <Contact {...props} />} />
                <Route path="/media" exact render={(props) => <Media {...props} />} />
                <Route path="/connect" exact render={(props) => <Connect {...props} />} />
                <Route path="/Vernon" exact render={(props) => <Vernon {...props} />} />
                <Route path="/Revelstoke" exact render={(props) => <Revelstoke {...props} />} />
                <Route path="/Kelowna" exact render={(props) => <Kelowna {...props} />} />
            </Switch>
        </BrowserRouter>
        <Footer />
    </div>
);