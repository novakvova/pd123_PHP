import React from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import CategoryListPage from "./components/category/list/CategoryListPage";
import CategoryCreatePage from "./components/category/create/CategoryCreatePage";
import CategoryEditPage from "./components/category/edit/CategoryEditPage";
import AdminHomePage from "./components/admin/home/AdminHomePage";

const App = () => {

    return (
        <>
            <Routes>
                <Route path="/">
                    <Route index element={<CategoryListPage/>}/>
                    <Route path={"/category"}>
                        <Route path="create" element={<CategoryCreatePage/>}/>
                        <Route path="edit">
                            <Route path=":id" element={<CategoryEditPage/>}/>
                        </Route>
                    </Route>

                </Route>
                <Route path={"admin"}>
                    <Route index element={<AdminHomePage/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default App;
