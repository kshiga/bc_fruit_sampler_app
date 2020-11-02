import React from 'react';
import { GridTile } from 'material-ui';

export default FruitsResultsGridTile = props => {
  props.img = props.hasOwnProperty('img') ? props.img : "https://www.google.com/logos/doodles/2020/where-to-vote-6753651837108825-l.png"
  
  return(
    <GridTile
        title={props.fruit}
        subtitle={<span> <b>{props.weight}</b></span>}
      >
        <img src={props.img} />
      </GridTile>
  );
}
