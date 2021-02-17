import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../../../components/Header";
import styles from "../../../styles/Write.module.scss";
import axios from "axios";
import PostPreview from "../../../components/PostPreview";
import { useRouter } from "next/router";
import withSession from "../../../lib/withSession";

import { Button, Textarea, FormLabel, Input, Select } from "@chakra-ui/react";

const Edit = ({ user }) => {
  const router = useRouter();
  const { id } = router.query;
  const [formState, setFormState] = useState({
    title: "",
    text: "",
    category: "",
    imageURL: "",
    author: "Karen Wright",
    orientation: "portrait",
  });

  useEffect(async () => {
    const {
      data: { data },
    } = await axios.get(`/api/posts/id/${id}`);
    setFormState(data);
  }, []);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };

  const submitPost = async (e) => {
    e.preventDefault();
    await axios.post(`/api/posts/id/${id}`, formState);
    router.push("/");
  };

  return (
    <div>
      <Head>
        <title>New Blog Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header user={user} />
      <div className={styles.mainContainer}>
        <div className={styles.postPreview}>
          <PostPreview
            noLink
            title={formState.title}
            category={formState.category}
            text={formState.text}
            imageURL={formState.imageURL}
            postID={"post-in-progress"}
            author="Karen Wright"
            date={new Date()}
            orientation={formState.orientation}
          />
        </div>
        <form
          className={styles.formContainer}
          onSubmit={(e) => submitPost(e, formState)}
        >
          <FormLabel className={styles.formLabel}>Title</FormLabel>
          <Input
            size="lg"
            onChange={handleChange}
            id="title"
            required
            value={formState.title}
            className={styles.inputField}
            fontSize="2rem"
            h="4rem"
          />
          <FormLabel className={styles.formLabel}>Body</FormLabel>
          <Textarea
            size="lg"
            id="text"
            onChange={handleChange}
            required
            value={formState.text}
            className={styles.inputField}
            fontSize="2rem"
            h="4rem"
          />
          <FormLabel className={styles.formLabel}>Category</FormLabel>
          <Input
            size="lg"
            onChange={handleChange}
            id="category"
            required
            value={formState.category}
            fontSize="2rem"
            h="4rem"
            multiline="true"
            className={styles.inputField}
          />
          <FormLabel className={styles.formLabel}>Image URL</FormLabel>
          <Input
            size="lg"
            id="imageURL"
            className={styles.inputField}
            required
            onChange={handleChange}
            value={formState.imageURL}
            fontSize="1.5rem"
            h="4rem"
          />
          <FormLabel className={styles.formLabel}>Orientation</FormLabel>
          <Select
            required
            w="auto"
            size="lg"
            fontSize="2rem"
            h="4rem"
            value={formState.orientation}
            id="orientation"
            onChange={handleChange}
          >
            <option value="portrait">Portrait</option>
            <option value="landscape">Landscape</option>
          </Select>
          <Button
            fontSize="2rem"
            padding="2rem 6rem"
            marginTop="2rem"
            type="submit"
            size="lg"
            className={styles.btnSubmit}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export const getServerSideProps = withSession(async ({ req, res }) => {
  const user = await req.session.get("user");
  if (user) {
    return { props: { user: user.username } };
  }
  res.end();
  return { props: {} };
});

export default Edit;
