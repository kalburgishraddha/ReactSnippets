import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDynamic = () => {
    const [posts,setPosts]=useState([]);
    const {id} = useParams();
    console.log("ID", id)
    const getData = () => {
        var reqOptions = {
            method: "GET"
        }
        fetch("http://localhost:3030/posts", reqOptions)
        .then((response)=>response.json())
        .then((result)=> setPosts(result))
        .catch((error)=> console.log("error", error))
    }

    useEffect(()=> {
        getData();
    },[])
    return (
            
            <div>
            {posts.map(post => {
                if(id=== post.id) {
                return(<div>
                <h3>{post.id}</h3>
                <h3>{post.title}</h3>
                <h3>{post.body}</h3>
            </div>)
                }
            })}
            </div>
        
    )
}
export default PostDynamic;