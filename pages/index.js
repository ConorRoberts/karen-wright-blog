import Head from "next/head";
import Header from "../components/Header";
import PostList from "../components/PostList";
import styles from "../styles/Home.module.scss";
import React from "react";
import withSession from "../lib/withSession";
import About from "../components/About";
import dbConnect from "../utils/dbConnect";
import Post from "../models/Post";

const Home = ({ user,posts }) => {
  return (
    <div>
      <Head>
        <title>Karen Wright's Blog</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header user={user} />
      <main className={styles.mainContainer}>
        <div className={styles.blogPostContainer}>
          <PostList posts={posts}/>
        </div>
        <div className={styles.aboutContainer}>
          <About />
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps = withSession(async ({ req, res }) => {
  await dbConnect();
  const posts = await Post.find({});
  const postsJSON = JSON.parse(JSON.stringify(posts.reverse()))

  const user = await req.session.get("user");
  const username = user ? user.username : null;

  return { props: {posts:postsJSON, user: username } };
});

export default Home;
