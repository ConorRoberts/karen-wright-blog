import React, { useEffect, useState } from "react";
import PostPreview from "../../components/PostPreview";
import styles from "../../styles/PostID.module.scss";
import Header from "../../components/Header";
import dbConnect from "../../utils/dbConnect";
import Post from "../../models/Post";
import axios from "axios";
import { BsPencilSquare, BsFillTrashFill } from "react-icons/bs";
import {useRouter} from "next/router";
import {
  Box,
  Modal,
  Button,
  BoxModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";

const PostID = ({ id, post }) => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user, setUser] = useState(null);
  useEffect(async () => {
    const user = await axios.get("/api/session");
    setUser(user);
  }, []);

  const deletePost = async () => {
    await axios.delete(`/api/posts/id/${id}`);
    router.push("/");
  };

  return (
    <div className="container">
      <Header user={user} />
      <main className={styles.mainContainer}>
        <Box
          borderWidth="1px"
          borderRadius="lg"
          className={styles.iconsContainer}
        >
          <Link href={`/admin/edit/${id}`}>
            <Button
              fontSize="1.5rem"
              padding="1.5rem"
              size="lg"
              leftIcon={<BsPencilSquare />}
            >
              Edit Post
            </Button>
          </Link>
          <Button
            fontSize="1.5rem"
            padding="1.5rem"
            size="lg"
            leftIcon={<BsFillTrashFill />}
            onClick={onOpen}
          >
            Delete Post
          </Button>
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent padding="0.5rem" size="lg" marginTop="8rem">
            <ModalCloseButton />
            <ModalBody paddingTop="3rem" fontSize="2rem">
              Are you sure you want to delete this post?
            </ModalBody>

            <ModalFooter>
              <Button
                fontSize="1.5rem"
                size="lg"
                variant="ghost"
                mr={3}
                onClick={onClose}
              >
                No
              </Button>
              <Button
                fontSize="1.5rem"
                onClick={() => deletePost()}
                size="lg"
                colorScheme="blue"
              >
                Yes
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <div className={styles.postContainer}>
          {post && (
            <PostPreview
              author={post.author}
              title={post.title}
              category={post.category}
              imageURL={post.imageURL}
              text={post.text}
              date={post.date}
              orientation={post.orientation}
              noLink
            />
          )}
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps = async (req, res) => {
  const {
    params: { id },
  } = req;

  await dbConnect();

  const post = await Post.findById(id);
  const postJSON = post ? JSON.parse(JSON.stringify(post)) : null;

  return {
    props: { id, post: postJSON },
  };
};

export default PostID;
