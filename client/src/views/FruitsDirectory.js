import React from 'react';

import { Paper } from 'material-ui';
import FruitSearchInput from './Fruits/FruitSearchInput';

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
  render() {
    return (
      <Paper style={styles.paper}>
        <h2>This is Fruits Directory</h2>
        sad;fjas
        <form className={classes.root} noValidate autoComplete="off">
          <FruitSearchInput />
        </form>
      </Paper>
    );
  }
}
