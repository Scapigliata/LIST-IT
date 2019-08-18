import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from "./pages/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App" >
              <div className="modal"></div>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route component={NotFound} />
            </Switch>
            <ErrorBoundary>
              <Footer />
            </ErrorBoundary>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
