import React from 'react';
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';
import Items from './context/Data.context'
function App() {
  return (
    <>
      <Items>
        <Header></Header>
        <main>
          <Meals></Meals>
        </main>
      </Items>
    </>
  );
}

export default App;
