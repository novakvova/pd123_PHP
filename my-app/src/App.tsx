import React from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import AdminHomePage from "./components/admin/home/AdminHomePage";
import AdminLayout from "./components/admin/container/AdminLayout";
import CategoryListPage from "./components/admin/category/list/CategoryListPage";
import CategoryCreatePage from "./components/admin/category/create/CategoryCreatePage";
import CategoryEditPage from "./components/admin/category/edit/CategoryEditPage";
import HomePage from "./components/home/HomePage";
import DefaultLayout from "./components/container/DefaultLayout";
import LoginPage from "./components/auth/login/LoginPage";
import Loader from "./components/common/loader/Loader";
import RegisterPage from "./components/auth/register/RegisterPage";

const App = () => {

    return (
        <>
            <Loader/>
            <Routes>
                <Route path="/" element={<DefaultLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={"login"} element={<LoginPage/>}/>
                    <Route path={"register"} element={<RegisterPage/>}/>
                </Route>

                <Route path={"/admin"} element={<AdminLayout/>}>
                    <Route index element={<AdminHomePage/>}/>
                    <Route path={"category"}>
                        <Route index element={<CategoryListPage/>} />
                        <Route path="create" element={<CategoryCreatePage/>}/>
                        <Route path="edit">
                            <Route path=":id" element={<CategoryEditPage/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </>
    );
};

export default App;
