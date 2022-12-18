import { BrowserRouter, Routes as Switch, Route, Navigate } from "react-router-dom";
import Bags from "../pages/bags";
import Erp from "../pages/erp";
import Gifts from "../pages/gifts";
import Home from "../pages/home";
import Products from "../pages/products";
import Profile from "../pages/profile";
import Store from "../pages/store";
import { DASHBOARD } from "./paths";


const Routes = () =>  {
    return (
        <BrowserRouter>
            <Switch>
               
                <Route path={'/'} element={ <Navigate  to={DASHBOARD.home} />} />
                <Route path={DASHBOARD.home} element={<Home />} />
                <Route path={DASHBOARD.home} element={<Home />} />
                <Route path={DASHBOARD.products} element={<Products />} />
                <Route path={DASHBOARD.profile} element={<Profile />} />
                <Route path={DASHBOARD.erp} element={<Erp />} />
                <Route path={DASHBOARD.store} element={<Store />} />
                <Route path={DASHBOARD.gifts} element={<Gifts />} /> 
                <Route path={DASHBOARD.bags} element={<Bags />} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;