import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Row, Col} from 'react-flexbox-grid';

import { users } from './config';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import FruitsDirectory from './views/FruitsDirectory';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

fetch(`/auth/v1`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(users[0])
})
.then(response => response.json())
.then(data => {
  ReactDOM.render(<MuiThemeProvider>
    <Router>
      <Row around='xs'>
        <Col xs={12} md={11}>
          <Route exact path="/" component={() => <FruitsDirectory {...data}/>} />
        </Col>
      </Row>
    </Router>
  </MuiThemeProvider>, document.getElementById('root'));
})
.catch((error) => {
  console.error('Error:', error);
});
