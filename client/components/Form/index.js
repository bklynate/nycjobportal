import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Box } from '@chakra-ui/core';
import * as actions from '../../actions';
import SearchBoxInput from '../SearchBoxInput';
import styles from './styles.scss';

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
    /* eslint-disable-next-line */
    console.error('Error caught in Form component:: ', error, info, this.props);
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
      <Box d="flex" justifyContent={['initial', 'center']}>
        <form className={styles.form} onSubmit={this.onSubmit}>
          <SearchBoxInput
            autoFocus
            onChange={this.onInputChange}
            placeholder="Enter a keyword to search for jobs"
            value={jobTitle}
          />
          <Button
            className={styles.button}
            size="lg"
            variant="outline"
            variantColor="blackAlpha"
            fontWeight="bold"
            textAlign="center"
            onClick={this.onSubmit}
          >
            Search Jobs
          </Button>
        </form>
      </Box>
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
