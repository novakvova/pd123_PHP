import React from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import CategoryListPage from "./components/category/list/CategoryListPage";
import CategoryCreatePage from "./components/category/create/CategoryCreatePage";
const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" >
          <Route index element={<CategoryListPage/>}/>
          <Route path="category/create" element={<CategoryCreatePage/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
