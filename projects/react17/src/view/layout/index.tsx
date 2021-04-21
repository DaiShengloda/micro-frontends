import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

const Home = lazy(() => import('../components/Home'))
const About = lazy(() => import('../components/About'))

const Layout: React.FC = () => {
    return (
        <Router basename={(window as any).__POWERED_BY_QIANKUN__ ? '/lp/private/react17' : '/'}>
            <Suspense fallback={null}>
                <Switch>
                    <Route path="/goods/list/index" exact component={Home} />
                    <Route path="/goods/label/index" component={About} />                                                                                                             
                </Switch>
            </Suspense>
        </Router>
    )
  }

  export default Layout