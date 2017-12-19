import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { connect } from 'react-redux';
import fetchTopics from '../actions/topics.js';

import HomeIcon from 'react-icons/lib/fa/home';

const logo = require('./logo.png');

class Navbar extends React.Component {

  componentWillMount() {
    this.props.fetchTopics();
  }

  render() {
    return (
      
        <div className="Navbar">

          <div className="Logo">
            <img className="LogoImg" src={logo} />
          </div>

          <Link to="/">
            <div className="Home">
              <HomeIcon className="HomeIcon" size={70} color="red" />
            </div>
          </Link>

          <div className="TopicList">
            <ul>
              {this.props.topics === undefined ?
                "LOADING" :
                this.props.topics.map(topic =>
                  <Link to={`/topic/${topic.slug}`} key={topic._id}><button className="button" value={topic.slug}>{topic.title}</button></Link>
                )}

            </ul>
          </div>

        </div>
      
    );
  }
}

const mapStateToProps = state => ({
  topics: state.topics.data,
  loading: state.topics.loading,
  error: state.topics.error
});
const mapDispatchToProps = dispatch => ({
  fetchTopics: () => {
    dispatch(fetchTopics());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);