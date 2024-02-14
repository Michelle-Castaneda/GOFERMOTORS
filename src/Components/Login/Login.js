import React, { useState, useContext } from 'react';
import axios from 'axios';
import styles from "./Login.module.css";
import AuthContext from '../../store/authContext';

const Login = ({ closeModal }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);
  const [error, setError] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('')
  const { dispatch } = useContext(AuthContext);

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
    setError('');
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let body = {
      username,
      password,
    };

    if (register && password !== confirmedPassword) {
      setError("Passwords Do not match");
      return;
    }

    if (username === '' || password === '') {
      setError("Must enter all fields");
      return;
    }

    axios
      .post(register ? "http://localhost:4000/register" : "http://localhost:4000/login", body)
      .then((res) => {
        dispatch({ type: "LOGIN", payload: res.data });
        closeModal();
      })
      .catch((err) => {
        console.error(err);
        register ? setError("Username not available") : setError("Username or Password is incorrect");
      });
  };

  return (
    <main>
      <h2 className={styles.login_header}>{register ? "Create an account" : "Sign in to Gofer Motors"}</h2>
      <form className={styles.auth_form} onSubmit={submitHandler}>
        <div className={styles.input_container}>
          <input
            type="text"
            id="username"
            name="username"
            placeholder='User Name'
            className={styles.form_input}
            onChange={(e) => handleInputChange(e, setUsername)}
          />
        </div>
        <div className={styles.input_container}>
          <input
            type="password"
            id="password"
            name="password"
            placeholder='Password'
            className={styles.form_input}
            onChange={(e) => handleInputChange(e, setPassword)}
          />
        </div>
        {register &&
          <div className={styles.input_container}>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              placeholder='Confirm Password'
              className={styles.form_input}
              onChange={(e) => handleInputChange(e, setConfirmedPassword)}
            />
          </div>
        }
        {error && <div className={styles.error_message}>{error}</div>}
        <button type="submit" className={styles.login_btn}>Login to your account</button>
      </form>
      <div className={styles.auth_btn}>
        <span className={styles.login_or_register_text}>{register ? "Already have an account?" : "Not Registered?"}</span>
        <button className={styles.login_or_register_btn} onClick={() => { setRegister(!register); setError('') }}>
          {register ? "Login" : "Create an account"}
        </button>
      </div>
    </main>
  );
};

export default Login;
