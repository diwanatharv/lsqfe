import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import Welcome from './components/welcome';
import count from './components/count';
function App() {
  return (
<>
       <Greet name="Atharv"/>
       <Welcome name ="Yash"/>
       <count></count>
       </>
  );
}

export default App;
