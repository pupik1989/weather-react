import React from 'react'
import Nav from './Nav'
import Weather from './Weather'
import Favorites from './Favorites'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Nav />
                <Switch>
                    <Route path="/" exact component={Weather} />
                    <Route path="/favorites" component={Favorites} />
                </Switch>
            </div>
        </Router>
    )
}

export default App