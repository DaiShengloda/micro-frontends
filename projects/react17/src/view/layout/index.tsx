import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

const Home = lazy(() => import('../components/Home'))
const About = lazy(() => import('../components/About'))

// function Layout() {
const Layout: React.FC = () => {
    return (
        <Router basename={(window as any).__POWERED_BY_QIANKUN__ ? '/react17' : '/'}>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
            <Suspense fallback={null}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                </Switch>
            </Suspense>
        </Router>
    )
  }

  export default Layout