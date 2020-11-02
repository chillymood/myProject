import React, { Component, Fragment } from "react";
import Header from "./common/Header";
import { GlobalStyles } from "./style";
import { GlobalIconFont } from "./statics/iconfont/iconfont";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail/loadable.js";
import Login from "./pages/login";
import Write from "./pages/write";
import Register from "./pages/register"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/write" component={Write}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/detail/:id" component={Detail}></Route>
        </BrowserRouter>
        <GlobalStyles />
        <GlobalIconFont />
      </Provider>
    );
  }
}

export default App;
