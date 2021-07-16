import React from 'react';
import { Router, Route, Switch, Redirect} from 'react-router-dom';
import PrivateRoute from './PrivateRoute'
import LoginRoute from  './LoginRoute'
import HomeView from "./view/HomeView";
import LoginView from './view/LoginView'
import {history} from "./utils/history";
import BookView from "./view/BookView";
import CartView from "./view/CartView";
import OrderView from "./view/OrderView";
import SingleOrderView from "./view/SingleOrderView";
import AdminView from "./view/AdminView";
import RegisterView from "./view/RegisterView";
import MyOrderListView from "./view/MyOrderListView";
import MyConsumptionListView from "./view/MyConsumptionListView";
class BasicRoute extends React.Component{

    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            console.log(location,action);
        });
    }

    render(){
        return(
            <Router history={history}>
                <Switch>
                    <PrivateRoute exact path="/" component={HomeView} />
                    <LoginRoute exact path="/login" component={LoginView} />
                    <PrivateRoute exact path="/bookDetails" component={BookView} />
                    <PrivateRoute exact path="/Cart" component={CartView} />
                    <PrivateRoute exact path="/Order" component={OrderView} />
                    <PrivateRoute exact path="/MyOrderList" component={MyOrderListView} />
                    <PrivateRoute exact path="/SingleOrder" component={SingleOrderView} />
                    <PrivateRoute exact path="/admin/book" component={AdminView} />
                    <LoginRoute exact path="/register" component={RegisterView} />
                    <PrivateRoute exact path="/MyConsumptionList" component={MyConsumptionListView} />
                    <Redirect from="/*" to="/" />
                </Switch>

            </Router>
        )
    }


}

export default BasicRoute;