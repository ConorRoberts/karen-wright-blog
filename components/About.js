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
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor leo a diam sollicitudin tempor id eu nisl. Ut sem viverra aliquet eget sit amet tellus cras. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Turpis nunc eget lorem dolor sed viverra ipsum nunc. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Pellentesque adipiscing commodo elit at imperdiet dui. Sodales ut eu sem integer vitae justo eget magna fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada. Purus sit amet volutpat consequat mauris nunc congue nisi. Tellus elementum sagittis vitae et leo duis ut. Nisl purus in mollis nunc sed id semper risus in. Viverra nam libero justo laoreet. Augue eget arcu dictum varius duis. Id semper risus in hendrerit. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum. Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Proin nibh nisl condimentum id venenatis. Congue mauris rhoncus aenean vel elit scelerisque mauris.";
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
            <a href="#">
              <Icon as={GrPinterest} />
            </a>
          </li>
          <li>
            <a href="#">
              <Icon as={GrTwitter} />
            </a>
          </li>
          <li>
            <a href="#">
              <Icon as={GrFacebook} />
            </a>
          </li>
          <li>
            <a href="#">
              <Icon as={GrInstagram} />
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
