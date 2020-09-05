import React from 'react';
import HelloWorld from './components/HelloWorld';

// function App () {

// }

const App = () => {
  const title = 'Olá Mundo!';

  // JSX
  return (
    <>
      <HelloWorld title={title} />
      <HelloWorld title="Seja bem vindo" name="Gabriel" />
    </>
  );
};

export default App;
