import React from 'react';
import { GridTile } from 'material-ui';

const styles = {
  gridtile: {
    border: "1px #000 solid"
  }
}


const FruitsResultsGridTile = props => {
  return(
    <GridTile
        title={props.name}
        subtitle={<span>weight: <b>{props.weight}</b></span>}
        style={styles.gridtile}
      >
        <img src={props.img} alt={props.altText} />
      </GridTile>
  );
}

export default FruitsResultsGridTile
