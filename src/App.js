import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Navbar from './containers/Navbar';
import Feed from './containers/Feed';
import FeedByTopic from './containers/FeedByTopic';
import ArticleAndComments from './components/ArticleAndComments';
import UserPage from './containers/UserPage';
import Error from './components/Error';
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
                <Route exact path="/article/:articleId"  component={ArticleAndComments} />
                <Route exact path="/user/:userName"  component={UserPage} />
                <Route path="/*" component={Error} error={'123123'} />
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