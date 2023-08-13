import React, { useEffect, useState } from 'react'
import styles from "./blogs.module.css"
import { Navigate, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

function Blogs() {

    const [data, setData] = useState([])
    const navigate = useNavigate()

    async function getBlogPosts() {
        const response = await fetch("http://3.111.7.227/api/v1/posts")
        const data = await response.json();
        setData(data)
    }

    function openSingleBlogPost(id) {
        navigate((`/blog/${id}`));
    }

    useEffect(() => {
        getBlogPosts()
    }, [])

    return (
        <div className={styles.allBlogsContainer}>

            <Navbar />

            <div className={styles.topTextContainer}>
                <h1> All Blog Posts</h1> <br />
                <button onClick={() => navigate("/add-blog")}> Add a Blog Post 
                </button>
            </div>


            <div className={styles.allBlogs}>

                {data.map((item, index) => {
                    return <div onClick={() => openSingleBlogPost(item.id)} key={item.id} className={styles.blogCard}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrVOFtZiw59qhv4VruOw9zocQu3b1_sfsXJXit4uaJnDUQOMqycxHBDV1M6Nt9Fbkvaw0&usqp=CAU" alt="blogs_post_sample" />
                        <h3> {item.title} </h3>
                        <p> Author : {item.user.name}</p>
                    </div>
                })
                }
            </div>

        </div>
    )
}

export default Blogs
