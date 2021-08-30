import React from "react"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Home from "../pages/Home"

function Router() {
  return(
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/main">
          <Home />
        </Route>
        <Redirect to="/main" />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default Router