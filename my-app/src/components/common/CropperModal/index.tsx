import {ChangeEvent, FC, useState} from "react";
import {ICropperModal} from "./types";
import classNames from "classnames";
import selectImage from "../../../assets/default.jpg";

const CropperModal: FC<ICropperModal> = ({
                                             onChange,
                                             field,
                                             error,
                                             touched,
                                             value,
                                             aspectRatio = 1/1
                                         }) => {
    const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
        console.log("1");
        // e.preventDefault();
        const files = e.target.files;
        console.log("2");
        if (files) {
            console.log("HandleImage", files[0]);
            if (files[0] === undefined) return;
            const fileRef = files[0];
            const allowedTypes = ["image/jpeg", "image/png", "image/gif"]
            if (!allowedTypes.includes(fileRef.type)) {
                alert("Недопустимий тип файлу")
                return;
            }
            onChange(field, fileRef);

        }
    }
    return (
        <>
            <div className="mb-3">
                <label htmlFor="image">
                    Фото
                    <img
                        src={value == null ? selectImage : URL.createObjectURL(value)}
                        width="200"
                        style={{ objectFit: "contain", display: 'block', cursor: 'pointer'}}
                        alt="ФОТОГРАФІЯ"
                        className={classNames(
                            "img-thumbnail d-block",
                            {"border border-danger-subtle" : error !== ""}
                        )}
                    />
                </label>

                <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/jpeg, image/png, image/gif" // обмеження для файлу
                    className="d-none"
                    onChange={onChangeImage}
                    placeholder="Вкажіть фото"
                />

                {error !== "" && (
                    <span className={"d-block invalid-feedback"}>{error}</span>
                )}
            </div>
        </>
    )
}

export default CropperModal;
