import React, { lazy, Suspense, useEffect, useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import { PizzaContext } from "./components/context";
import { TopBar } from "./components/appBg";
import { Box } from "./components/utils";

const ChooseSize = lazy(() => import("./pages/chooseSize"));
const ChooseCrust = lazy(() => import("./pages/chooseCrust"));
const ChooseTooping = lazy(() => import("./pages/chooseTooping"));
const OrderSummery = lazy(() => import("./pages/orderSummery"));
const Checkout = lazy(() => import("./pages/checkout"));
const ShippingDetails = lazy(() => import("./pages/shippingDetails"));

const Loading = () => <div>Loading ...</div>;
const NoMatch = (props) => <h2>Url not found - {props.location.pathname}</h2>;

export default function App() {
  const [pizzaSize, setPizzaSize] = useState("Medium");
  const [crust, setCrust] = useState("Thin");
  const [tooping, setTooping] = useState("");
  return (
    <div className="App">
      <PizzaContext.Provider
        value={{
          setPizzaSize,
          pizzaSize,
          crust,
          setCrust,
          tooping,
          setTooping,
        }}
      >
        <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
          <Suspense fallback={<Loading />}>
            <TopBar></TopBar>
            <Box pt="48px" pb="60px">
              <Switch>
                <Route exact path="/" component={ChooseSize} />
                <Route exact path="/crust" component={ChooseCrust} />
                <Route exact path="/topping" component={ChooseTooping} />
                <Route exact path="/summery" component={OrderSummery} />
                <Route exact path="/checkout" component={Checkout} />
                <Route exact path="/shipping" component={ShippingDetails} />
                <Route component={NoMatch} />
              </Switch>
            </Box>
          </Suspense>
        </BrowserRouter>
      </PizzaContext.Provider>
    </div>
  );
}
