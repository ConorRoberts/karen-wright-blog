import React, { useState, useEffect } from "react";
import styles from "../styles/About.module.scss";
import { Container, Icon } from "@chakra-ui/react";
import {
  GrInstagram,
  GrFacebook,
  GrTwitter,
  GrPinterest,
} from "react-icons/gr";

const About = () => {
  const fullText =
    "Welcome! I’m Karen. While I’ve got websites and social media stuff elsewhere, I recently decided to take on a bit of a project that I suspect will be worth documenting. So here we are. I’m not quite sure what this will be but whatever it is, I don’t think it will be boring. Wish me luck!";
  const smallText = fullText.split(" ").slice(0, 50).join(" ");
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(smallText);

  useEffect(() => {
    if (open) {
      setText(fullText);
    } else {
      setText(smallText);
    }
  }, [open]);

  return (
    <>
      <Container className={styles.mainContent}>
        <ul className={styles.socialsContainer}>
          <li>
            <a href="https://www.facebook.com/karenwrightcoach">
              <Icon as={GrFacebook} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/karenwrightcoach/">
              <Icon as={GrInstagram} />
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.ca/kwrightcoach/">
              <Icon as={GrPinterest} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/kwrightcoach">
              <Icon as={GrTwitter} />
            </a>
          </li>
        </ul>
        <h2 className={styles.title}>About</h2>
        <p>
          {`${text} `}
          {open ? null : (
            <span className={styles.moreLink} onClick={() => setOpen(true)}>
              More...
            </span>
          )}
        </p>
      </Container>
    </>
  );
};

export default About;
