import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import ForgotPassword from '../pages/auth/ForgotPassword'
import NotFound from '../pages/errors/NotFound'

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/masuk' component={Login} />
        <Route path='/daftar' component={Register} />
        <Route path='/lupa-kata-sandi' component={ForgotPassword} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
