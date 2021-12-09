import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import ForgotPassword from '../pages/auth/ForgotPassword'
import NotFound from '../pages/errors/NotFound'
import ProductM from '../components/Product/ProductM'
import AboutM from '../components/About/AboutM'
import Detail from '../pages/Detail'
import Profile from '../pages/Profile'

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/masuk' component={Login} />
        <Route path='/daftar' component={Register} />
        <Route path='/lupa-kata-sandi' component={ForgotPassword} />
        <Route path='/produk' component={ProductM} />
        <Route path='/tentang' component={AboutM} />
        <Route path='/detail' component={Detail} />
        <Route path='/profil' component={Profile} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
