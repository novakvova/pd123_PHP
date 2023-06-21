import React, {useEffect, useState} from "react";
import http from "../../../http";
import {ICategoryItem} from "./types";
import {Link} from "react-router-dom";
import ModalDelete from "../../common/ModalDelete";

const CategoryListPage = () => {
    const [categories, setCategories] =
        useState<ICategoryItem[]>([]);

    useEffect(() => {
        http.get<ICategoryItem[]>("api/category").then((resp) => {
            console.log("Resp data", resp.data);
            setCategories(resp.data);
        });
    }, []);

    const onDelete = async (id: number) => {
        //console.log("Delete category", id);
        try {
            await http.delete(`api/category/${id}`);
            setCategories(categories.filter(x=>x.id!==id));
        } catch {

        }
    }
    return (
      <>
          <div className="container">
              <h1 className="text-center">Список категорій</h1>
              <Link to="/category/create" className="btn btn-success">Додати</Link>
              <table className="table">
                  <thead>
                  <tr>
                      <th scope="col">#</th>
                      <th scope="col">Назва</th>
                      <th scope="col">Фото</th>
                      <th scope="col">Опис</th>
                      <th></th>
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
                              <td>
                                  <ModalDelete id={category.id} text={category.name} deleteFunc={onDelete}/>
                                  &nbsp; &nbsp;
                                  <Link to={`/category/edit/${category.id}`} className="btn btn-info">Змінить</Link>
                              </td>
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