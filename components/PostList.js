import React, { useState, useEffect } from "react";
import PostPreview from "./PostPreview.js";
import styles from "../styles/PostList.module.scss";
import axios from "axios";

import { Select } from "@chakra-ui/react";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("None");

  useEffect(async () => {
    const {
      data: { data },
    } = await axios.get("/api/posts");
    setPosts(data.reverse());
    setCategories(
      data
        // object => category
        .map(({ category }) => category)
        // Ensures no duplicates
        .filter((e, index, arr) => arr.indexOf(e) === index)
    );
  }, []);

  const renderPosts = () => {
    if (selectedCategory === "None") {
      return posts.map(
        ({ _id, title, author, category, date, imageURL, text }) => (
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
        )
      );
    }
    return posts
      .filter(({ category }) => category === selectedCategory)
      .map(({ _id, title, author, category, date, imageURL, text }) => (
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
      ));
  };

  return (
    <>
      <div className={styles.selectCategory}>
        <label>Filter</label>
        <Select
          onChange={(e) => setSelectedCategory(e.target.value)}
          size="md"
          fontSize="1.6rem"
          h="40px"
        >
          <option value="None" key="None">
            None
          </option>
          {categories &&
            categories.map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
        </Select>
      </div>
      <div className={styles.postListContainer}>{posts && renderPosts()}</div>
    </>
  );
};

export default PostList;

// {/* <button
//               onClick={async () => await axios.delete(`/api/posts/id/${_id}`)}
//             >
//               Delete Post
//             </button> */}
