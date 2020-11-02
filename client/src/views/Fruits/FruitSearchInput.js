import React from 'react';

import { TextField } from 'material-ui';

export default class FruitSearchInput extends React.Component {
  render() {
    return (
      <TextField
        id="fruit-query"
        name="fruit-query"
        onChange={(e, value)=>{ console.log(e.target.value, value) }}
      />
    );
  }
}
