import './App.css';
import React, {useState, useEffect} from "react";
import axios from "axios";
import Posts from './Posts';
import Pagination from "./Pagination";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(localStorage.getItem("currentPage") ? localStorage.getItem("currentPage") : 1);
  const [postsPerPage] = useState(5);


  useEffect(() => {
    getFacts();
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  const getFacts = async () => {
    setLoading(true);
    try{
    const response = await fetch(
      `https://catfact.ninja/breeds`
    );
    const data = await response.json();
    setPosts(data.data);
    setLoading(false);
    console.log(data.data);
  }
  catch(err){
    alert(err);
  }
}


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  
  const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <div className="container mt-5">
      <h1 className='text-primary'>CatWiki</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination 
      postsPerPage={postsPerPage} 
      totalPosts={posts.length}
      paginate={paginate}
      />
    </div>
  )
};

export default App;
