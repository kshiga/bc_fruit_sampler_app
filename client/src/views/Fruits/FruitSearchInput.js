import React from 'react';

import { TextField } from 'material-ui';

export default class FruitSearchInput extends React.Component {
  constructor(props){
    super(props);

    this.fruitSearch = this.fruitSearch.bind(this);
    this.state = { query: "" };
  }

  fruitSearch(event, value){
    if(this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(function(){
                         this.setState({
                             query: value
                         })
                       }.bind(this),500);
  }

  render() {
    return (
      <TextField
        id="fruit-query"
        name="fruit-query"
        onChange={this.fruitSearch}
      />
    );
  }
}
