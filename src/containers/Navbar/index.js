import React from 'react';
import { connect } from 'react-redux';

import fetchTopics from '../../actions/topics.js';

import NavbarUI from '../../components/NavbarUI';
import Loading from '../../components/Loading';
import Error from '../../components/Error';


class Navbar extends React.Component {

  componentWillMount() {
    this.props.fetchTopics();
  }

  render() {
    const { topics, loading, error } = this.props;

    return (
      <div>
        {
          error ? <Error error={error} />
            : loading ? <Loading />
              : <NavbarUI topics={topics} />
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