import React from 'react';
import Routes from './routes';

import {ThemeProvider} from './contexts/Theme';

const App = () => (
  <ThemeProvider>
    <Routes />
  </ThemeProvider>
);

export default App;
