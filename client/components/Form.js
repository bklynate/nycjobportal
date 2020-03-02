import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Form extends Component {
  state = {
    jobTitle: '',
  };

  onInputChange = e => {
    const jobTitle = e.target.value;
    this.setState(() => ({ jobTitle }));
  };

  onSubmit = async e => {
    e.preventDefault();
    const { fetchKeywordJobs } = this.props;
    const { jobTitle } = this.state;
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

export default connect(null, actions)(Form);