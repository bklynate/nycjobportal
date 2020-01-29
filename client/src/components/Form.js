import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions';

class Form extends Component {
  state = {
    jobTitle: '',
  };

  onInputChange = e => {
    const jobTitle = e.target.value;
    this.setState(() => ({ jobTitle }));
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchKeywordJobs(this.state.jobTitle);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            autoFocus
            onChange={this.onInputChange}
            placeholder="Enter a keyword to search for jobs"
            value={this.state.jobTitle}
          />
          <button className="waves-effect waves-light btn">Search Jobs</button>
        </form>
      </div>
    );
  }
}

export default connect(null, actions)(Form);
