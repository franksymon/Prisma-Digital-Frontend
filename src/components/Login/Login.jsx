import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import "./login.css";

const Login = ({ getUserBills }) => {
  const [user, setUser] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const rest = () => {
    setUser("");
    setpassword("");
  };

  const login = (e) => {
    e.preventDefault();
    const credentials = {
      username: user,
      clave: password,
    };

    dispatch({
      type: "GET_USERNAME",
      payload: user,
    });

    axios
      .post(`https://prismatest.prismadigdev.repl.co/login`, credentials)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });

    navigate("/bills");
    rest();
  };

  return (
    <section className="login">
      <form onSubmit={login} className="user-login">
        <div className="input-container">
          <label htmlFor="user"> User</label>
          <input
            type="text"
            name="user"
            id="user"
            placeholder="User"
            required
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            required
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <button>Login</button>
      </form>
    </section>
  );
};

export default Login;
