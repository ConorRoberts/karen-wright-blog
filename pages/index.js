import Head from "next/head";
import Header from "../components/Header";
import PostList from "../components/PostList";
import styles from "../styles/Home.module.scss";
import React from "react";
import withSession from "../lib/withSession";

const Home = ({ user }) => {
  return (
    <div>
      <Head>
        <title>Karen Wright's Blog</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header user={user} />
      <main className={styles.mainContainer}>
        <div className={styles.blogPostContainer}>
          <PostList />
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps = withSession(async ({ req, res }) => {
  const user = await req.session.get("user");
  return user ? { props: { user: user.username } } : { props: { user: null } };
});

export default Home;
