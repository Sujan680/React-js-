import React, { useEffect, useState } from 'react'

const ChallengeFecthData = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            setPosts(data);
        }
        fetchData();
    }, []);
  return (
    <div>
        <h2>Fetching Data:...</h2>
        
            {
                posts.length > 0 ?  <h2> {posts[0].title} </h2> : ""
            }
        
    </div>
  )
}

export default ChallengeFecthData