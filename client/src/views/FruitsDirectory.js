import React from 'react';

import { Paper, Card, CardHeader, CardText } from 'material-ui';
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
    if(!query.length){
      this.setState({
        query: query,
        fruitsResults: []
      });

    } else {
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
          query: query,
          fruitsResults: []
        });
      });
    }
  }

  render() {
    return (
      <Paper style={styles.paper}>
        <Card>
          <CardHeader
              title="Fruit Finder"
              subtitle="Find Fruits in your area"
              avatar="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/red-apple_1f34e.png"
          />
          <CardText>
            <div className="form-container">
              <form className={classes.root} noValidate autoComplete="off">
                <FruitSearchInput changeHandler={this.fetchFruits}/>
              </form>
            </div>
          </CardText>
        </Card>
        <Card>
          <CardHeader
              title={`Query: ${this.state.query}`}
          />
          <div className="results-container">
            <CardText>
              <FruitsResultsGridList
                query={this.state.query}
                fruitsResults={ this.state.fruitsResults }
              />
            </CardText>
          </div>
        </Card>
      </Paper>
    );
  }
}
