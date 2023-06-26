import {ICategoryCreate} from "./types";
import {useFormik} from "formik";
import http from "../../../../http";
import {Link, useNavigate} from "react-router-dom";


const CategoryCreatePage = () => {
    const navigate = useNavigate();
    const init: ICategoryCreate = {
        name: "",
        image: "",
        description: ""
    };
    const onFormikSubmit = async (values: ICategoryCreate) => {
        console.log("Send data server", values);
        try{
            const result = await http.post("api/category", values);
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

    const {values, handleChange, handleSubmit} = formik;
    return (

        <div className="container">
            <h1 className="text-center">Додати категорію</h1>

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

                <button type="submit" className="btn btn-primary">Додати</button>
            </form>
        </div>
    );
}

export default CategoryCreatePage;