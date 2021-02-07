import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Login.module.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useRouter } from "next/router";
import axios from "axios";

const Login = () => {
  const router = useRouter();
  const [validLogin, setValidLogin] = useState(false);
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
    // console.log(formState);
  };
  const submitLogin = async (e) => {
    e.preventDefault();

    try{
        const response = await axios
        .get("/api/login", {
          params: { username: formState.username, password: formState.password },
        })
        console.log(response.data.data);
    }catch(error){
        console.log(error);
    }

    // setValidLogin(true);
    //   query: { username: formState.username, password: formState.password },
    // console.log(data);
    // Store login as cookie
    // stuff with redux?
    // router.push("/");
  };
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Header />
      <div className={styles.formContainer}>
        {validLogin && <p>LOGGED IN WOO</p>}
        <form onSubmit={(e) => submitLogin(e)} className={styles.form}>
          <h1 className={styles.title}>Login</h1>
          <div className={styles.inputContainer}>
            <TextField
              inputProps={{ style: { fontSize: "2rem" } }}
              InputLabelProps={{ style: { fontSize: "2rem" } }}
              className={styles.inputField}
              required
              label="Username"
              id="username"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              value={formState.username}
            />
          </div>
          <div className={styles.inputContainer}>
            <TextField
              inputProps={{ style: { fontSize: "2rem" } }}
              InputLabelProps={{ style: { fontSize: "2rem" } }}
              className={styles.inputField}
              required
              label="Password"
              id="password"
              type="password"
              fullWidth
              variant="outlined"
              onChange={handleChange}
              value={formState.password}
            />
          </div>
          <Button
            style={{ fontSize: "2rem", background: "#777", width: "50%" }}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    </>
  );
};

export default Login;
