import React from "react";
import PostPreview from "../../components/PostPreview";
import styles from "../../styles/PostID.module.scss";
import Header from "../../components/Header";
import dbConnect from "../../utils/dbConnect";
import Post from "../../models/Post";

const PostID = ({ post }) => {
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

  await dbConnect();

  const post = await Post.findById(id);
  const postJSON = post ? JSON.parse(JSON.stringify(post)) : null;

  return {
    props: { id, post: postJSON },
  };
};

export default PostID;
