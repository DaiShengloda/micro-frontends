import styles from './AppLess.less'
import { Button } from 'antd'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from 'widget/Layout/LayoutView'

function App() {

  const handleClick = function({ name: subapp }) {
    subapp = '/' + subapp
    window.history.pushState(null, subapp, subapp)
    console.log(subapp)
  }

  return (
    <div className={styles.app}>
      {/* <Button onClick={() => handleClick({name: 'vue'})}>vue-app</Button>
      <Button onClick={() => handleClick({name: 'react17'})}>react-app</Button> */}
      <Router>
        <Switch>
          <Route path="/" exact component={Layout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
