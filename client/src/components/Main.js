import React, { useState, useEffect } from "react";
import axios from 'axios';

import GridView from "./GridView";

export default function Main() {
  const [posts, setPosts] = useState([])

  let url = process.env.REACT_APP_POSTS_API_URL_PROD;

  if(process.env.NODE_ENV !== 'production') {
      url = process.env.REACT_APP_POSTS_API_URL_DEVEL;
  }
  
  useEffect(() => {
     axios
      .get(url)
      .then(response => {
        setPosts(response.data);
        console.log(response);
      }).catch(error => {
        alert(`${error}`)

    })
  }, [])


    return (
        <div>
            <GridView posts={posts}></GridView>
        </div>
    );
}