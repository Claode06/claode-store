import React from "react";
import "../../index.css";
import { Button, Form, InputGroup } from "react-bootstrap";
import user from "../../storage/account.json";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  function handleLogin(e) {
    const isEmail = user.users.find((row) => row.name == e.name);
    const isPassword = user.users.find((row) => row.password == e.password);
    if (isEmail && isPassword) {
      toast.success("Berhasil");
      Cookies.set("access_token", isEmail.token);
      navigate("/customer");
    } else if (isEmail) {
      toast.warning("Password tidak sesuai");
    } else {
      toast.warning("Email / Password tidak sesuai");
    }
  }

  return (
    <div className="container-login">
      <div className="login-form">
        <p className="fs-2 text-center fw-semibold">Claode Store</p>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div class="form-floating mb-3">
            <input
              {...register("name")}
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              {...register("password")}
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <Button
            type="submit"
            onClick={handleSubmit(handleLogin)}
            variant="primary"
            className="mt-4 w-100"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
