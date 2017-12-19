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
import Article from './components/Article';
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
                <Route exact path="/"  component={Feed} />
                <Route exact path="/topic/:topic/:topicId"  component={FeedByTopic} />
                <Route exact path="/article/:articleId"  component={Article} />
                <Route path="/*" component={Footer} />
              </Switch>

              <Footer />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;