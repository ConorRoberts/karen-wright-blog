import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Login.module.scss";
import { useRouter } from "next/router";
import axios from "axios";

import { Input, FormLabel, Button } from "@chakra-ui/react";

const Login = () => {
  const router = useRouter();
  const [isBadLogin, setIsBadLogin] = useState(false);
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };
  const submitLogin = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/login", {
        username: formState.username,
        password: formState.password,
      });
      await axios.get("/api/login/");
      router.push("/");
    } catch (error) {
      setIsBadLogin(true);
    }
  };
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Header />
      <div className={styles.formContainer}>
        <form onSubmit={(e) => submitLogin(e)} className={styles.form}>
          <h1 className={styles.title}>Login</h1>
          <FormLabel fontSize="1.6rem">Username</FormLabel>
          <Input
            size="lg"
            h="5rem"
            marginBottom="2rem"
            fontSize="2.3rem"
            id="username"
            onChange={handleChange}
            value={formState.username}
          />
          <FormLabel fontSize="1.6rem">Password</FormLabel>
          <Input
            size="lg"
            h="5rem"
            fontSize="2.3rem"
            marginBottom="3rem"
            type="password"
            id="password"
            onChange={handleChange}
            value={formState.password}
          />
          <Button
            padding="2rem 4rem"
            background="#777"
            fontSize="2rem"
            type="submit"
          >
            Login
          </Button>
          {isBadLogin ? <p className={styles.badLogin}>Invalid Login</p> : null}
        </form>
      </div>
    </>
  );
};

export default Login;
