import React, {useEffect, useState} from "react";
import http from "../../../http";
import {ICategoryItem} from "./types";

const CategoryListPage = () => {
    const [categories, setCategories] =
        useState<ICategoryItem[]>([]);

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
}

export default CategoryListPage;