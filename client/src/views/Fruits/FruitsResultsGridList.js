import React from 'react';

import { GridList, Subheader } from 'material-ui';
import {Row, Col} from 'react-flexbox-grid';
import FruitsResultsGridTile from './FruitsResultsGridTile';

export default class FruitsResultsGridList extends React.Component {
  constructor(props){
    super(props);

    this.renderFruitsResults = this.renderFruitsResults.bind(this);
  }

  renderFruitsResults(){
    if(!this.props.fruitsResults.length){
      return (<div><p>No fruits match you query {this.props.query}</p></div>);
    }
    return this.props.fruitsResults.map((fruit, index) => {
      return (<FruitsResultsGridTile {...fruit} key={index}/>);
    })
  }

  render(){
    return(
      <Row>
        <Col xs={12}>
          <Row center="xs">
            <Col xs={6} md={3} >
            <GridList cols={1} celHeight="auto" >
              { this.renderFruitsResults() }
            </GridList>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
