import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Header from './component/Header';
import Home from './component/Home';
import Default from './component/Default';
import Product from './component/Product';
import Cart from './component/Cart/Cart';
import Modal from './component/Modal';
import CategoryPage from './component/CategoryPage';
import Checkout from './component/checkout/Checkout';
import Congratulation from './component/checkout/Congratulation';
import Account from './component/Account/Account';

export class App extends Component {
  render() {
    return (
      <section >
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/product' component={Product}/>
          <Route exact path='/cart' component={Cart}/>
          <Route exact path='/categories' component={CategoryPage}/>
          <Route exact path='/checkout' component={Checkout}/>
          <Route exact path='/succes' component = {Congratulation}/>
          <Route exact path='/account' component = {Account}/>
          <Route  component={Default}/>
        </Switch>
        <Modal/>
      </section>
    );
  }
}

export default App;
