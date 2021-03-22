import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

/**
 * Import all page components here
 */
import App from './App';
import About from './Pages/About/About';
import Writing from './Pages/Writing/Writing';
import Art from './Pages/Art/Art';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export const Routes = () => {
return (
  <div className="NavBar"> 
  <BrowserRouter>
    <Route path="/" component={App}/>
    <Route exact path="/" component={About}/>
    <Route path="/Writing" component={Writing} />
    <Route path="/Art" component={Art} />
  </BrowserRouter>
  </div>
);
}; 