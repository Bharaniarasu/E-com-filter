import React, { lazy, Suspense } from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import { compose } from "recompact";
import Cards from "./components/cards/cards";
import Loader from "./components/loader";

const Cart = lazy(() => import("./components/cart"));
const Product = lazy(() => import("./components/product"));
const AddNew = lazy(() => import("./components/add"));
const ContactUs = lazy(() => import("./components/contactUs"));
// const Loader = lazy(() => import("./components/loader"));
const Routes = () => (
  <Suspense fallback={<Loader />}>
    <Switch>
      <Route exact path="/contact-us" component={ContactUs} />
      <Route exact path="/" component={Cards} />
      <Route exact path="/home" component={Cards} />
      {/* <Route exact path="/:id" component={Product} /> */}
      <Route exact path="/add" component={AddNew} />
      <Route exact path="/cart" component={Cart} />
    </Switch>
  </Suspense>
);
export default compose(withRouter)(Routes);
