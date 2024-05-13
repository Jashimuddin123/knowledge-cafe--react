import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = () => {
    // create a state hold a state data 
    const [ blogs, setBlogs] = useState([]);

    // create useEffect for faching data 
    useEffect(()=>{
        fetch('blog.json')
        .then(res=> res.json())
        .then(data=> setBlogs(data))
    } , [])
    return (
        <div className="md:w-2/3">
           <h1 className="text0-3xl font-semibold">Blogs here: {blogs.length}</h1>
           <h6>vbnvbnv</h6>
           {
            blogs.map(blog=><Blog key={blogs.id} blog={blog}></Blog>)
           }
            
        </div>
    );
};

export default Blogs;