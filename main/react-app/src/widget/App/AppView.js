import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Layout from 'widget/Layout/LayoutView'
import Setting from 'pages/Setting/SettingView';

function App() {

  const handleClick = function({ name: subapp }) {
    subapp = '/' + subapp
    window.history.pushState(null, subapp, subapp)
    console.log(subapp)
  }

  return (
    <div>
      {/* <Button onClick={() => handleClick({name: 'vue'})}>vue-app</Button>
      <Button onClick={() => handleClick({name: 'react17'})}>react-app</Button> */}
      <Router basename="/lp">
        <Switch>
          <Redirect exact path="/" to={{pathname: '/private'}}/>
          <Route path="/private" component={Layout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
