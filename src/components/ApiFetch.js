import React, { useState, useEffect } from 'react';

const ApiFetch = () => {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [clicked, setClicked] = useState(false);
  const handlerClicked = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, [clicked, id]);
  return (
    <div>
      <div>
        <input
          type="text"
          value={id}
          onChange={(evt) => setId(evt.target.value)}
        />
      </div>
      <div>
        <button type="button" onClick={handlerClicked}>
          Get Post
        </button>
      </div>
      <div>{posts.title}</div>
    </div>
  );
};

export default ApiFetch;
