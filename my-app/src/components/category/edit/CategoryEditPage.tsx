import {ICategoryEdit} from "./types";
import {useFormik} from "formik";
import http from "../../../http";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {ICategoryItem} from "../list/types";


const CategoryEditPage = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const init: ICategoryEdit = {
        id: id ? Number(id) : 0,
        name: "",
        image: "",
        description: ""
    };
    const onFormikSubmit = async (values: ICategoryEdit) => {
        console.log("Send data server", values);
        try{
            const result = await http.post(`api/category/edit/${id}`, values);
            navigate("/");
        }
        catch {
            console.log("Server error request");
        }
    }
    const formik = useFormik({
        initialValues: init,
        onSubmit: onFormikSubmit
    });

    const {values, handleChange, handleSubmit, setFieldValue} = formik;

    useEffect(() => {
        http.get<ICategoryItem>(`api/category/${id}`)
            .then(resp => {
               const {data} = resp;
                setFieldValue("name", data.name);
                setFieldValue("image", data.image);
                setFieldValue("description", data.description);
            });
    },[id]);


    return (

        <div className="container">
            <h1 className="text-center">Зміна категорії</h1>

            <form className="col-md-6 offset-md-3" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name">Назва</label>
                    <input type="text" className="form-control" id="name" name="name"
                           onChange={handleChange}
                           value={values.name}
                           placeholder="Вкажіть назву"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="image">Фото</label>
                    <input type="text" className="form-control" id="image" name="image"
                           onChange={handleChange}
                           value={values.image}
                           placeholder="Вкажіть фото"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="description">Опис</label>
                    <input type="text" className="form-control" id="description" name="description"
                           onChange={handleChange}
                           value={values.description}
                           placeholder="Вкажіть опис"/>
                </div>

                <button type="submit" className="btn btn-primary">Зберегти</button>
            </form>
        </div>
    );
}

export default CategoryEditPage;