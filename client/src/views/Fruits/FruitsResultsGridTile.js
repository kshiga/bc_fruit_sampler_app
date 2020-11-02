import React from 'react';
import { GridTile } from 'material-ui';

const FruitsResultsGridTile = props => {
  return(
    <GridTile
        title={props.name}
        subtitle={<span>weight: <b>{props.weight}</b></span>}
      >
        <img src={props.img} alt={props.altText} />
      </GridTile>
  );
}

export default FruitsResultsGridTile
