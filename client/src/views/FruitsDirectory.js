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

const fruitsResults = [
  {
    img: "https://via.placeholder.com/150",
    name: 'tomato',
    weight: '20 oz',
    altText: "placeholder image"
  },
  {
    img: "https://via.placeholder.com/150",
    name: 'cucumber',
    weight: '5 oz',
    altText: "placeholder image"
  },
  {
    img: "https://via.placeholder.com/150",
    name: 'mango',
    weight: '12 oz',
    altText: "placeholder image"
  },
  {
    img: "https://via.placeholder.com/150",
    name: 'pumpkin',
    weight: '160 oz',
    altText: "placeholder image"
  }
];

const apiCall = query => {
  return fruitsResults.filter((fruit) => {
    return query.length ? fruit.name.includes(query) : false;
  });
}

export default class FruitsDirectory extends React.Component {
  constructor(props) {
    super(props);

    this.updateQuery = this.updateQuery.bind(this);

    this.state = {
      query:"",
      fruitsResults: []
    }
  }

  updateQuery(query){
    // currently a function, will be an API call
    let results = apiCall(query);
    this.setState({
      query: query,
      fruitsResults: results
    });
  }

  render() {
    return (
      <Paper style={styles.paper}>
        <h2>This is Fruits Directory</h2>
        <div className="form-container">
          <form className={classes.root} noValidate autoComplete="off">
            <FruitSearchInput changeHandler={this.updateQuery}/>
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
