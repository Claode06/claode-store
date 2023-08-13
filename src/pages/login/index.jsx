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
      <div className="login-form login-responsif">
        <p className="fs-2 text-center fw-bold ">CLAODE STORE</p>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div class="form-floating mb-3">
            <input
              {...register("name")}
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="Masukkan Username / Email . . ."
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              {...register("password")}
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Masukkan Password . . ."
            />
            <label for="floatingPassword">Password</label>
          </div>
          <Button
            type="submit"
            onClick={handleSubmit(handleLogin)}
            variant="primary"
            className="mt-4 py-2 fs-5 fw-semibold w-100"
          >
            LOGIN
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
