import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Navbar from './components/Navbar';
import Feed from './components/Feed';
import FeedByTopic from './components/FeedByTopic';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Container">
          <Router>
            <div>
              <Navbar />

              <Switch>
                <Route path="/" exact component={Feed} />
                <Route path="/topic/:topic" exact component={FeedByTopic} />
                <Route path="/*" component={Footer} />
              </Switch>

              {/* <Switch>
                <Route exact path='/' component={Feed} />
                <Route path='/topics/football' component={Footer} />
                <Route exact path='/404' component={Footer} />
                <Route path='/*' component={Footer} />
              </Switch> */}

              {/* <Footer /> */}
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;