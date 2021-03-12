import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom'

const Home = lazy(() => import('../components/Home'))
const About = lazy(() => import('../components/About'))

const Layout: React.FC = () => {
    return (
        <Router basename={(window as any).__POWERED_BY_QIANKUN__ ? '/react17' : '/'}>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
            </nav>
            <Suspense fallback={null}>
                <Switch>
                    <Redirect exact path="/" to="/home" />
                    <Route path="/home"  component={Home} />
                    <Route path="/about" component={About} />
                </Switch>
            </Suspense>
        </Router>
    )
  }

  export default Layout