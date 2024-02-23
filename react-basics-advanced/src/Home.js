import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Home = () =>{
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
  return (
    <div>
      <h1>Posts Home</h1>
      {console.log("Posts Home", posts.length)}
      <nav>
        
    {posts.map(({id,title})=> {
      return(<ul>
      <li key={id}>
        <Link to={`blog/${id}`}>{title}</Link>
      </li>
      </ul>)
      
    })}



       
      </nav>
    </div>
  );
}

export default Home;