import React from 'react';
import './App.css';
import Counter from './components/Counter';
import PropDrilling from './components/PropDrilling';
import Context from './components/Context';
import Form from './components/Form';
import Changer from './components/Changer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello
          <Counter initialCount={5} />
          <PropDrilling />
          <Context />
          <Form />
          <Changer car={"Honda"} />

        </p>
      </header>
    </div>
  );
}

export default App;
