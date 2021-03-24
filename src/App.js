import React, { lazy, Suspense, useEffect, useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import { PizzaContext } from "./components/context";
// import ChooseSize from "./pages/chooseSize";
// import ChooseCrust from "./pages/chooseCrust";
import { Footer, TopBar } from "./components/appBg";
import { Box } from "./components/utils";

const ChooseSize = lazy(() => import("./pages/chooseSize"));
const ChooseCrust = lazy(() => import("./pages/chooseCrust"));
const ChooseTooping = lazy(() => import("./pages/chooseTooping"));

// const Register = lazy(() => import("./components/register.js"));

const Loading = () => <div>Loading ...</div>;
const NoMatch = (props) => <h2>Url not found - {props.location.pathname}</h2>;

export default function App() {
  const [pizzaSize, setPizzaSize] = useState("Medium");
  const [crust, setCrust] = useState("Thin");
  console.log("pizzaSize in app", pizzaSize);
  return (
    <div className="App">
      <PizzaContext.Provider
        value={{ setPizzaSize, pizzaSize, crust, setCrust }}
      >
        <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
          <Suspense fallback={<Loading />}>
            <TopBar></TopBar>
            <Switch>
              <Route exact path="/" component={ChooseSize} />
              <Route exact path="/crust" component={ChooseCrust} />
              <Route exact path="/topping" component={ChooseTooping} />

              <Route component={NoMatch} />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </PizzaContext.Provider>
    </div>
  );
}
