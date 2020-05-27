import React from "react";
import "./PostContainer.css";
import PostCard from "../PostCard/PostCard";
import PostViewer from "../PostViewer/PostViewer";


function PostContainer(props) {
  const Posts = props.posts;
  const image = props.image;
  return (
    <div className="card-deck">
      {Posts.map((post, index) => (
        <PostCard key={index} post={post} image={image}/>
      ))}
      <PostViewer show={false} />
    </div>
  );
}

export default PostContainer;
