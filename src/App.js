import React, { Component } from "react";
import Navbar from "./components/Navbar";
//we npm installed this so now we import it -- lets us use routes
//we import Switch to prevent posts from showing up on other pages
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          {/* switch tells React to only call one url at a time */}
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/:post_id' component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
