import logo from './logo.svg';
import './App.css';
import ControlledFormHooks from './components/ControlledFormHooks';
import UseStateWithArrays from './components/UseStateWithArrays';
import UseStateWithObjects from './components/UseStateWithObjects';
import UseStateYT from './components/UseStateYT';
import UseEffectCounter from './components/UseEffectCounter';
import UseEffectCounterTime from './components/UseEffectCounterTime';
import UseEffectCounterContainer from './components/UseEffectCounterContainer';

function App() {
  return (
    <div className="App">
      <ControlledFormHooks />
      <UseStateWithArrays />
      <UseStateWithObjects />
      <UseStateYT />
      <UseEffectCounter />
      <UseEffectCounterTime />
      <UseEffectCounterContainer />
    </div>
  );
}

export default App;
