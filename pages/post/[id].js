import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import PostPreview from "../../components/PostPreview";
import styles from "../../styles/PostID.module.scss";
import Header from "../../components/Header";

const PostID = () => {
  const router = useRouter();
  const [post, setPost] = useState({});

  useEffect(async () => {
    if (router) {
      const {
        data: { data },
      } = await axios.get(`/api/posts/id/${router.query.id}`);
      setPost(data);
    }
  }, [router]);

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
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default PostID;
