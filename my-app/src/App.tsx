import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { APP_ENV } from "./env";
import http from "./http";

interface ICategoryItem {
  id: number;
  name: string;
  image: string;
  description: string;
}

const App = () => {
  const [categories, setCategories] = useState<ICategoryItem[]>([]);

  useEffect(() => {
    http.get<ICategoryItem[]>("api/category").then((resp) => {
      console.log("Resp data", resp.data);
      setCategories(resp.data);
    });
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="text-center">Список категорій</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Назва</th>
              <th scope="col">Фото</th>
              <th scope="col">Опис</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => {
              return (
                <tr key={category.id}>
                  <th scope="row">{category.id}</th>
                  <td>{category.name}</td>
                  <td>{category.image}</td>
                  <td>{category.description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;
