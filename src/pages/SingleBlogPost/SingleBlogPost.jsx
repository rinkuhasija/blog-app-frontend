import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios"
import styles from "./singlePost.module.css"
import Navbar from '../../components/Navbar/Navbar';

function SingleBlogPost() {

    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://3.111.7.227/api/v1/posts/${id}`)
            .then((response) => {
                setBlog(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id])

    if (!blog) {
        return <div>Loading...</div>;
    }


    return (
        <div className={styles.singlePostContainer}>

            <Navbar />

            <div className={styles.singlePost}>

                <h1> {blog.title} </h1> <br />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrVOFtZiw59qhv4VruOw9zocQu3b1_sfsXJXit4uaJnDUQOMqycxHBDV1M6Nt9Fbkvaw0&usqp=CAU" alt="blogs_post_sample" /> <br />
                <p > {blog.content} </p>

            </div>

            

        </div>
    )
}

export default SingleBlogPost