import React from 'react';
import {connect} from 'react-redux';
// import {Redirect} from 'react-router-dom';
import fetchArticlesByTopic from '../actions/articlesByTopic';


class TopicalArtcles extends React.Component {
  constructor (props) {
    super(props);
    const {params} = this.props.match;
    console.log(params);
  }
  componentWillMount(){
    const topic = this.props.match.params.topic;
    this.props.fetchArticlesByTopic('5a3144bfb2a0c121973f65e0');
  }
  
  componentWillReceiveProps(nextProps){
    const {topic} = nextProps.match.params;

    if (this.props.match.params.topic !== topic) {
        console.log(this.props.match.params.topic, topic)
    }
  }
  render () {
    // const {articles, loading, error, match : {params: {topic}}} = this.props;
    // const {page} = this.state;

    return (
        <div>
            {/* {this.state.articles ? JSON.stringify(this.state.articles[0]) : <p>LOADING</p>} */}
            <p>{JSON.stringify(this.props)}</p>
        </div>
        

    );
  }
}

const mapStateToProps = state => ({
  articles: state.articlesByTopic.data,
  loading: state.articlesByTopic.loading,
  error: state.articlesByTopic.error
});
const mapDispatchToProps = dispatch => ({
    fetchArticlesByTopic: (topic_id) => {
    dispatch(fetchArticlesByTopic(topic_id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TopicalArtcles);