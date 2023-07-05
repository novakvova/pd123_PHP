import {ICategoryEdit} from "./types";
import {useFormik} from "formik";
import http_common from "../../../../http_common";
import {useNavigate, useParams} from "react-router-dom";
import {ChangeEvent, useEffect, useState} from "react";
import {ICategoryItem} from "../list/types";
import defaultImage from '../../../../assets/default.jpg';
import {APP_ENV} from "../../../../env";


const CategoryEditPage = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [oldImage, setOldImage] = useState<string>("");

    const init: ICategoryEdit = {
        id: id ? Number(id) : 0,
        name: "",
        image: null,
        description: ""
    };
    const onFormikSubmit = async (values: ICategoryEdit) => {
        console.log("Send data server", values);
        try{
            const result = await http_common.post(`api/category/edit/${id}`, values,{
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            navigate("../..");
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
        http_common.get<ICategoryItem>(`api/category/${id}`)
            .then(resp => {
               const {data} = resp;
                setFieldValue("name", data.name);
                //setFieldValue("image", data.image);
                setOldImage(`${APP_ENV.BASE_URL}uploads/300_${data.image}`);
                setFieldValue("description", data.description);
            });
    },[id]);

    const onChangeFileHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if(files) {
            const file = files[0];
            if(file) {
                const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
                if (!allowedTypes.includes(file.type)) {
                    alert("Недостимий тип файлу!");
                    return;
                }
                setFieldValue(e.target.name, file);
            }
        }
    }
    const imgView = oldImage ? oldImage : defaultImage;
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
                    <label htmlFor="image">
                        <img src={values.image==null ? imgView : URL.createObjectURL(values.image)}
                             alt="фото" width={150} style={{cursor:"pointer"}}/>
                    </label>
                    <input type="file" className="d-none"
                           id="image"
                           name="image"
                           onChange={onChangeFileHandler}
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
