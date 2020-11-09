import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Post: React.FC = () => {
 
  const [post, setPost] = useState<any>()
  let count = 1;
  const fetchAPI = useCallback(async () => {
    let data = await fetch('https://jsonplaceholder.typicode.com/posts/'+count)
    let response = await data.json() as IPost
    console.log(response.body);
    console.log(response.id);
    setPost(response);
    count++;
  }, [])

  useEffect(() => {
    fetchAPI()
  }, [fetchAPI])

  return (
    <div className="page">

      Post Id: {post?.id}
      <h2>{post?.title}</h2>
      <p>
        {post?.body}
      </p>
      <button onClick={() => fetchAPI()}>Get Next Post</button>
    </div>
  )
};

export default Post;
