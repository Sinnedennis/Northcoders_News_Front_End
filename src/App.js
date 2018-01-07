import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Navbar from './containers/Navbar';
import Feed from './containers/Feed';
import FeedByTopic from './containers/FeedByTopic';
import UserPage from './containers/UserPage';

import ArticleAndComments from './components/ArticleAndComments';
import Error from './components/Error';
import Footer from './components/Footer';

import './styling/App.css';
import 'bulma/css/bulma.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Router>
            <div>

              <Navbar />
              <div className="Container">


                <Switch>
                  <Route exact path="/" component={Feed} />
                  <Route exact path="/topic/:topic/:topicId" component={FeedByTopic} />
                  <Route exact path="/article/:articleId" component={ArticleAndComments} />
                  <Route exact path="/user/:userName" component={UserPage} />
                  <Route path="/*" component={Error} />
                </Switch>


              </div>
            
            
            </div>
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;