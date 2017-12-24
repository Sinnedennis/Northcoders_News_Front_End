import React from 'react';
import { connect } from 'react-redux';

import fetchTopics from '../../actions/topics.js';

import NavbarUI from '../../components/NavbarUI';

class Navbar extends React.Component {

  componentDidMount() {
    this.props.fetchTopics();
  }

  render() {
    const { topics, loading, error } = this.props;

    return (
      <div>
        {
          <NavbarUI topics={topics} error={error} loading={loading} />
        }
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