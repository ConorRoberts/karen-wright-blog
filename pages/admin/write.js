import React, { useState } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import styles from "../../styles/Write.module.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import PostPreview from "../../components/PostPreview";
import { useRouter } from "next/router";

const Write = () => {
  const router = useRouter();
  const [formState, setFormState] = useState({
    title: "",
    text: "",
    category: "",
    imageURL: "",
    author: "Karen Wright",
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };

  const submitPost = async (e) => {
    e.preventDefault();
    await axios.post("/api/posts", formState);
    router.push("/");
  };

  return (
    <div>
      <Head>
        <title>New Blog Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="New Blog Post" />
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
          />
        </div>
        <form
          className={styles.formContainer}
          onSubmit={(e) => submitPost(e, formState)}
        >
          <div className={styles.inputContainer}>
            <TextField
              inputProps={{ style: { fontSize: "2rem" } }}
              InputLabelProps={{ style: { fontSize: "2rem" } }}
              className={styles.inputField}
              required
              label="Title"
              id="title"
              variant="outlined"
              onChange={handleChange}
              value={formState.title}
            />
          </div>
          <div className={styles.inputContainer}>
            <TextField
              inputProps={{ style: { fontSize: "1.5rem", lineHeight: "2rem" } }}
              InputLabelProps={{ style: { fontSize: "2rem" } }}
              className={styles.inputField}
              required
              label="Body"
              multiline
              id="text"
              variant="outlined"
              onChange={handleChange}
              value={formState.text}
            />
          </div>
          <div className={styles.inputContainer}>
            <TextField
              inputProps={{ style: { fontSize: "1.5rem", lineHeight: "2rem" } }}
              InputLabelProps={{ style: { fontSize: "2rem" } }}
              className={styles.inputField}
              required
              label="Category"
              multiline
              id="category"
              variant="outlined"
              value={formState.category}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputContainer}>
            <TextField
              inputProps={{ style: { fontSize: "1.5rem", lineHeight: "2rem" } }}
              InputLabelProps={{ style: { fontSize: "2rem" } }}
              className={styles.inputField}
              required
              label="Image URL"
              multiline
              id="imageURL"
              variant="outlined"
              value={formState.imageURL}
              onChange={handleChange}
            />
          </div>
          <Button
            style={{
              width: "30%",
              backgroundColor: "#777",
              fontSize: "1.5rem",
            }}
            // style={styles.btnSubmit}
            type="submit"
            // className={styles.btnSubmit}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Write;
