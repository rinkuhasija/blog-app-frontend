import React, { useContext, useState } from 'react'
import styles from './addBlog.module.css'
import authContext from '../../context/login/authContext';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

function AddBlog() {

    const { isLoggedIn, setIsLoggedIn } = useContext(authContext);
    const navigate = useNavigate()
    const login = window.localStorage.getItem("isLoggedIn")
    const user = window.localStorage.getItem("user")
    const userId = window.localStorage.getItem("userId")
    const token = window.localStorage.getItem("token")

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "title") {
            setTitle(value);
        } else if (name === "content") {
            setContent(value);
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!login) {
            navigate("/login")
        } else {

            if (title.length > 3 && content.length > 3) {
                const blog = {
                    title,
                    content,
                    user,
                    userId,
                    token
                }
                setIsLoading(true)
                axios.post("http://3.111.7.227/api/v1/posts", blog)
                    .then(res => {
                        console.log(res.data)
                        alert("POST SUBMITTED SUCCESSFULLY")
                        navigate("/blogs")
                    })
                    .catch(err => console.log(err));
                setIsLoading(false)
                setTitle("");
                setContent("");
            } else {
                alert("Title must be at least 3 characters long")
            }

        }

    }





    return (
        <div className={styles.addYourPostContainer}>

            <Navbar /> <br /> <br /> <br />

            <h2> Add Your Blog post </h2> <br />

            <form className={styles.addYourPostForm}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" onChange={handleChange} name="title" placeholder="Title" /> <br /> <br />

                <label htmlFor="content">Content</label>
                <textarea id="content" name="content" onChange={handleChange} placeholder="Write something.." style={{ height: "200px" }}></textarea> <br /> <br />

                <input onClick={handleSubmit} disabled={isLoading} type="submit" value={isLoading ? "Loading..." : "Submit"} >
                </input>
            </form>


        </div>
    )
}

export default AddBlog