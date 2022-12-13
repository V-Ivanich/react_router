import React from "react";

const Post = ({ id, posts, history }) => {

  const getPostById = (id) => {
    return posts.find((post) => post.id.toString() === id)
  };

  const handlesave = () => {
    history.replace("/posts")
  };
  const post = getPostById(id);

  return <><h2>{post? post.label : `Post with id:${id} not found`}</h2>
    <button onClick={() => {handlesave()}}>Сохранить</button>
  </>;
}

export default Post;
