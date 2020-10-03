import React from 'react';
import Routes from './routes';

import {ThemeProvider} from './contexts/Theme';

// JSX
const App = () => (
  <ThemeProvider>
    <Routes />
  </ThemeProvider>
);

export default App;
