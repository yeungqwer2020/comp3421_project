import React, { Suspense, lazy } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/store';


import Header from './Navbar/Header';
import SubHeader from './Navbar/SubHeader';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Items from './Product/Items';
import Details from './ProductDetails/Details';
import Cart from './Cart2/Cart';

import LoginPage from "./Login/LoginPage";
import Login2 from './Login/Login2';
import Register from './Login/Register';
import Upload from './Upload/Upload';
import Cart2  from './Cart/Cart2';
import All_products  from './Upload/All_products';
import SigninScreen from './Login2/SigninScreen';
import RegisterScreen from './Login2/RegisterScreen';
import ProfileScreen from './Profile/ProfileScreen';
import CartF  from './Cart3/Cart3';
import Order from './Cart2/Order';


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Suspense fallback={<div>Loading...</div>}>
          <Provider store={store}>
            <Header/>
            <SubHeader/>
              <div className="container container-fluid">
              <Switch>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/product"  component={Items}/>
                <Route exact path="/product/type/:type"  component={Items}/>
                <Route exact path="/product/:id" component={Details} />
                <Route path="/cart" component={Cart} />
                <Route exact path="/user/cart" component={Cart2} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/login2" component={Login2} />
                {/* <Route exact path="/register2" component={Register} /> */}
                <Route exact path="/upload" component={Upload} />
                <Route exact path="/admin_products" component={All_products} />
                <Route path="/signin" component={SigninScreen} />
                <Route path="/register" component={RegisterScreen} />
                <Route path="/profile" component={ProfileScreen} />
                <Route path="/order" component={Order} />

                <Route path="/" component={Home}/>
                
              </Switch>
              </div>
            <Footer/>
          </Provider>
        </Suspense>
      </div>
    )
  }
}


export default App;
