import './App.css';
import { Button } from 'antd';

function App() {

  const handleClick = function({ name: subapp }) {
    subapp = '/' + subapp
    window.history.pushState(null, subapp, subapp)
    console.log(subapp)
  }

  return (
    <div className="App">
      <Button onClick={() => handleClick({name: 'vue'})}>vue-app</Button>
      <Button onClick={() => handleClick({name: 'react17'})}>react-app</Button>
      <div id="subapp-container"></div>
    </div>
  );
}

export default App;
