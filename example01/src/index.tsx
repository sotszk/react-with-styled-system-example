import * as React from 'react';
import ReactDOM from 'react-dom';
import Box from './components/Box';

const App = () => (
  <div>
    <h2>Hello world.</h2>
    <div>
      <Box p={48} fontSize={24}>This is A Box</Box>
    </div>
  </div>
)

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)
