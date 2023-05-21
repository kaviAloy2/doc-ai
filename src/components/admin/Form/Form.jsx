import { useRef, useState } from "react";
import "../../../Styles/admin/Form/Form.css";
import cancel from "../../../assets/Admin/Dash-board/close.png"
import ImageUpload from "./ImageUpload";
import storeInDataBase from "./storeInDataBase";

const FormPage = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [uploadImage, setUploadImage] = useState("")
    const [authorName, setAuthorName] = useState('')
    const [key_benefits, setkey_benefits] = useState("")

    const [authorsList, setAuthorsList] = useState([])
    const [keyBenefitsList, setKeyBenefitsList] = useState([])

    const folderName = 'Publications'
    const handleSubmit = async () => {
        const fileName = imageRef.current.files[0].name
        const isImageUploaded = await ImageUpload(uploadImage, fileName,folderName)
        if(isImageUploaded){
            console.log("DOne");
        }
        const finalData = {
            "title":title,
            "description":description,
            "imageUrl" :isImageUploaded,
            "authors" :authorsList,
            "keyBenefits":keyBenefitsList
        }
        storeInDataBase(finalData,folderName)


    }
    const addAuthor = () => {
        if (authorName != "") {
            setAuthorsList(oldArray => [...oldArray, authorName])
            setAuthorName("")
        }
    }

    const addKeyBenefits = () => {
        if (key_benefits !== "") {
            setKeyBenefitsList(oldArray => [...oldArray, key_benefits])
            setkey_benefits("")
        }
    }

    const removeAuthor = (index) => {
        setAuthorsList([
            ...authorsList.slice(0, index),
            ...authorsList.slice(index + 1, authorsList.length)
        ])

    }
    const removeKeyBenefits = (index) => {
        setKeyBenefitsList([
            ...keyBenefitsList.slice(0, index),
            ...keyBenefitsList.slice(index + 1, keyBenefitsList.length)
        ])
    }
    const imageRef = useRef()
    return (
        <>
                <div className="main-form">
                    <div className="form-heading">
                        <p>Publication</p>
                    </div>

                    <div className="font-content">
                        <div className="form-left">
                            <div className="form-fields">
                                <label >
                                    Publication Title:
                                </label>
                                <input type="text"
                                    value={title}
                                    onChange={
                                        (e) => { setTitle(e.target.value) }
                                    }
                                    required />
                            </div>

                            <div className="form-fields">
                                <label >
                                    Publication Description:
                                </label>

                                <textarea
                                    rows={6}
                                    required
                                    value={description}
                                    onChange={
                                        (e) => {
                                            setDescription(e.target.value)
                                        }
                                    }
                                />
                            </div>

                            <div className="form-fields">
                                <label>
                                    Upload Image:
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    ref={imageRef}
                                    // value={uploadImage}
                                    onChange={
                                        (e) => {
                                            setUploadImage(e.target.files[0])

                                        }
                                    }
                                    required
                                />
                            </div>

                        </div>

                        <div className="form-right">
                            <div className="list-arrays">
                                <div className="array-box">
                                    {
                                        authorsList.map((val, index) => {
                                            return (
                                                <>
                                                    <div className="added-array" key={index}>
                                                        <p>{val}</p>
                                                        <img src={cancel} alt="width"
                                                            height={"25px"} width="25px"
                                                            onClick={() => removeAuthor(index)}
                                                        />
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>


                            <div className="form-fields">
                                <label >
                                    Author Details:
                                </label>
                                <div className="input-container">

                                    <input type="text"
                                        value={authorName}
                                        onChange={
                                            (e) => { setAuthorName(e.target.value) }
                                        }
                                        required />
                                    <button onClick={addAuthor}>
                                        Add
                                    </button>
                                </div>
                            </div>
                            <div className="form-fields">
                                <div className="list-arrays">
                                    <div className="array-box">
                                        {
                                            keyBenefitsList.map((val, index) => {
                                                return (
                                                    <>
                                                        <div className="added-array" key={index}>
                                                            <p>{val}</p>
                                                            <img src={cancel} alt="width"
                                                                height={"25px"} width="25px"
                                                                onClick={() => removeKeyBenefits(index)}
                                                            />
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                </div>

                                <label>
                                    Key Benefits
                                </label>
                                <div className="input-container">

                                    <div>
                                        <input type="text"
                                            value={key_benefits}
                                            onChange={
                                                (e) => { setkey_benefits(e.target.value) }
                                            }
                                            required />
                                        <button onClick={addKeyBenefits}>
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="form-button">
                                <button className="formSubmit"
                                    onClick={handleSubmit}
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

        </>
    );
};

export default FormPage;
