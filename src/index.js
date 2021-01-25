/*

=========================================================
* Now UI Kit React - v1.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2020 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";
import "assets/demo/demo.css?v=1.4.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.4.0";

// pages for this kit
import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import PortfolioPage from "views/examples/PortfolioPage.js";
import ResumePage from "views/examples/ResumePage";
import OldLandingPage from "./views/examples/OldLandingPage";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route 
            path="/index" 
            render={(props) => <LandingPage {...props} />}
        />
        <Route 
            path="/about" 
            render={(props) => <ProfilePage {...props} />}
        />
        <Route 
            path="/portfolio" 
            render={(props) => <PortfolioPage {...props} />}
        />
        <Route 
            path="/resume" 
            render={(props) => <ResumePage {...props} />}
        />
        {/*<Route */}
        {/*    path="/examples" */}
        {/*    render={(props) => <Index {...props} />}*/}
        {/*/>*/}
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
