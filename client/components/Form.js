import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Form extends Component {
  state = {
    jobTitle: '',
  };

  componentDidMount() {
    const { searchQuery, fetchKeywordJobs } = this.props;
    if (searchQuery) {
      this.setState({ jobTitle: searchQuery });
      fetchKeywordJobs(searchQuery);
    }
  }

  componentDidCatch(error, info) {
    console.log('Here is the error: ', error);
    console.log('Here is the info: ', info);
  }

  onInputChange = e => {
    const jobTitle = e.target.value;
    this.setState({ jobTitle });
  };

  onSubmit = async e => {
    e.preventDefault();
    const { fetchKeywordJobs, history } = this.props;
    const { jobTitle } = this.state;
    history.push(`?q=${jobTitle}`);
    fetchKeywordJobs(jobTitle);
  };

  render() {
    const { jobTitle } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            autoFocus
            onChange={this.onInputChange}
            placeholder="Enter a keyword to search for jobs"
            value={jobTitle}
          />
          <button>Search Jobs</button>
        </form>
      </div>
    );
  }
}

const loadData = (store, request) => {
  const { query } = request || {};
  const { q: queryString } = query || {};
  return store.dispatch(actions.fetchKeywordJobs(queryString));
};

export { loadData };

export default withRouter(connect(null, actions)(Form));
