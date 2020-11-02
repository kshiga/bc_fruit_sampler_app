import React from 'react';

import { GridList } from 'material-ui';
import FruitsResultsGridTile from './FruitsResultsGridTile';

export default class FruitsResultsGridList extends React.Component {
  constructor(props){
    super(props);

    this.renderFruitsResults = this.renderFruitsResults.bind(this);
  }

  renderFruitsResults(){
    return this.props.fruitsResults.map((fruit, index) => {
      <FruitsResultsGridTile {...fruit} key={index}/>
    })
  }

  render(){
    return(
      <GridList>
        <Subheader>Query: {this.props.query}</Subheader>
        { this.renderFruitsResults() }
      </GridList>
    );
  }
}
