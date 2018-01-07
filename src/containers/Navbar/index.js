import React from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';

import getTopics from '../../actions/getTopics.js';

import NavbarUI from '../../components/NavbarUI';

class Navbar extends React.Component {

  componentDidMount() {
    this.props.getTopics();
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
  getTopics: () => {
    dispatch(getTopics());
  }
});

Navbar.propTypes = {
  topics: PT.array.isRequired,
  loading: PT.bool.isRequired,
  error: PT.string,

  getTopics: PT.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);