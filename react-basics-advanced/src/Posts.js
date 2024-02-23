import React from "react";
import { useEffect, useState } from "react";

const PostPage = () => {
    const [posts,setPosts] = useState([]);
    const getData = () => {
    var reqOptions = {
        method: "GET",
    }

    fetch("http://localhost:3030/posts", reqOptions)
    .then((response) => response.json())
    .then((result) => {console.log("RES",result);setPosts(result)})
    .catch((error)=> console.log("error", error))
    }
    useEffect(()=> {
        getData();
    }, [])
    return(
        <div>
            {console.log("Posts", posts.length)}
            {posts.map(post => {
                return(
                <div>
                    <h3>{post.id}</h3>
                    <h3>{post.title}</h3>
                    <h3>{post.body}</h3>
                </div>
                )
            })}
        </div>
    )
}
export default PostPage;

/*
{posts.map(jsonObject => {
            return(
                <div>
                    <h1>{jsonObject.title}</h1>
                    <p>{jsonObject.id}</p>
                    <p>{jsonObject.body}</p>
                </div>
                )
            })*/
