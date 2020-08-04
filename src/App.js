import React from "react";
import "./App.css";
import Home from "./pages/home";
import Basic from "./pages/basic-info";
import Pension from "./pages/pension-info";
import Interim from "./pages/interim";
import Header from "./components/header";
import Footer from "./components/footer";
import { Router, Switch, Route, Link } from "react-router-dom";
import history from './history';
function App() {
  return (
    <div>
      <Router history={history}>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/basic" exact component={Basic} />
        <Route path="/pension" exact component={Pension} />
        <Route path="/interim" exact component={Interim} />
        <Footer />
      </Router>
    </div>
  );
}
export default App;
