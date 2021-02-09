import React, { useEffect, useState } from "react";
import axios from "axios";
import PostPreview from "../../components/PostPreview";
import styles from "../../styles/PostID.module.scss";
import Header from "../../components/Header";
// import dbConnect from "../../utils/dbConnect";
// import Post from "../../models/Post";

const PostID = ({ id }) => {
  const [post, setPost] = useState({});

  useEffect(async () => {
    const {
      data: { data },
    } = await axios.get(`/api/posts/id/${id}`);
    setPost(data);
  }, []);

  return (
    <div className="container">
      <Header />
      <main className={styles.mainContainer}>
        <div className={styles.postContainer}>
          {post && (
            <PostPreview
              author={post.author}
              title={post.title}
              category={post.category}
              imageURL={post.imageURL}
              text={post.text}
              date={post.date}
              noLink
            />
          )}
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const {
    params: { id },
  } = context;

  return {
    props: { id },
  };
};

export default PostID;
