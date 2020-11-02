import React from 'react';

import { Paper } from 'material-ui';
import FruitSearchInput from './Fruits/FruitSearchInput';
import FruitsResultsGridList from './Fruits/FruitsResultsGridList';

const styles = {
  paper: {
    minHeight: '100px',
    padding: '40px'
  }
};

const classes = {
  root: 'form',
}

export default class FruitsDirectory extends React.Component {
  constructor(props) {
    super(props);

    this.fetchFruits = this.fetchFruits.bind(this);

    this.state = {
      query:"",
      fruitsResults: []
    }
  }

  fetchFruits(query){
    fetch(`/api/v1/fruits?name_like=${query}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.props.token}`
        },
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        query: query,
        fruitsResults: data
      });
    })
    .catch((error) => {
      console.error('Error:', error);
      this.setState({
        query: query
      });
    });
  }

  render() {
    return (
      <Paper style={styles.paper}>
        <h2>This is Fruits Directory</h2>
        <div className="form-container">
          <form className={classes.root} noValidate autoComplete="off">
            <FruitSearchInput changeHandler={this.fetchFruits}/>
          </form>
        </div>
        <div className="results-container">
        <FruitsResultsGridList
          query={this.state.query}
          fruitsResults={ this.state.fruitsResults }
        />
        </div>
      </Paper>
    );
  }
}
