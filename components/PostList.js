import React, { useState, useEffect } from "react";
import PostPreview from "./PostPreview.js";
import styles from "../styles/PostList.module.scss";
import axios from "axios";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const {
      data: { data },
    } = await axios.get("/api/posts");
    setPosts(data.reverse());
  }, []);

  return (
    <div className={styles.postListContainer}>
      {posts &&
        posts.map(({ _id, title, author, category, date, imageURL, text }) => (
          <>
            {/* <button
              onClick={async () => await axios.delete(`/api/posts/id/${_id}`)}
            >
              Delete Post
            </button> */}
            <PostPreview
              key={_id}
              postID={_id}
              title={title}
              text={text}
              imageURL={imageURL}
              category={category}
              author={author}
              date={date}
            />
          </>
        ))}
    </div>
  );
};

export default PostList;
