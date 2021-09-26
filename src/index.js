import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/scss/style.scss";
import HomeOne from "./HomeOne";
import HomeTwo from "./HomeTwo";
import HomeThree from "./HomeThree";
import About from "./pages/About";
import Services from "./service/Services";
import ServiceDetailsLeftSidebar from "./service/ServiceDetailsLeftSidebar";
import Projects from "./project/Projects";
import ProjectDetails from "./project/ProjectDetails";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/404";
import NoMAtch from "./pages/404";
import { Switch, Route, HashRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import ComingSoon from "pages/ComingSoon/ComingSoon";
import ServiceDetailsRightSidebar from "service/ServiceDetailsRightSidebar";


class Root extends Component {
  render() {
    return (
      <HashRouter basename="/castro">
        <Switch>
          <Route
            exact
            path='/'
            component={HomeThree}
          />
          <Route
            exact
            path='/about-us'
            component={About}
          />
          <Route
            exact
            path='/services'
            component={Services}
          />
          <Route
            exact
            path='/service-details-left-sidebar'
            component={ServiceDetailsLeftSidebar}
          />
          <Route
            exact
            path='/service-details-right-sidebar'
            component={ServiceDetailsRightSidebar}
          />
          <Route
            exact
            path='/projects'
            component={Projects}
          />
          <Route
            exact
            path='/project-details'
            component={ProjectDetails}
          />
          <Route
            exact
            path='/contact-us'
            component={Contact}
          />
          <Route
            exact
            path='/404'
            component={PageNotFound}
          />
          <Route component={NoMAtch} />
        </Switch>
      </HashRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));

serviceWorker.register();
