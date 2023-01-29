import './App.css';
import TestMocking from './components/TestMocking/TestMocking';
import { Counter } from './features/counter/Counter'

function App() {
  return (
    <div className="App">
      <Counter />
      <TestMocking />
    </div>
  );
}

export default App;
