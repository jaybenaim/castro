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
            path='/home-one'
            component={HomeOne}
          />
          <Route
            exact
            path='/home-two'
            component={HomeTwo}
          />
          <Route
            exact
            path='/home-three'
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
          {/* <Route
            exact
            path='/service-details-right-sidebar'
            component={ServiceDetailsRightSidebar}
          /> */}
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
          {/* <Route
            exact
            path='/blog-left-sidebar'
            component={BlogLeftSidebar}
          />
          <Route
            exact
            path='/blog-right-sidebar'
            component={BlogRightSidebar}
          />
          <Route
            exact
            path='/blog-details-left-sidebar'
            component={BlogDetailsLeftSidebar}
          />
          <Route
            exact
            path='/blog-details-right-sidebar'
            component={BlogDetailsRightSidebar}
          /> */}
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
