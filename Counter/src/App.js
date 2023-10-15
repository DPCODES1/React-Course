import './App.css';
import Context from './Context/Context';
import Counter from './components/Counter/Counter';
function App() {
  return (
    <Context className="App">
      <Counter></Counter>
    </Context>
  );
}

export default App;
