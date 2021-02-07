import Head from "next/head";
import Header from "../components/Header";
import PostList from "../components/PostList";
import styles from "../styles/Home.module.scss";
import React from "react";

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>Karen Wright's Blog</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header />
      {/* <h1 className={styles.title}>Karen Wright's Blog</h1> */}
      <main className={styles.mainContainer}>
        <div className={styles.blogPostContainer}>
          <PostList />
        </div>

      </main>
    </div>
  );
};

export default Home;
