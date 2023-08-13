import React from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const TopBar = (props) => {
  const { title } = props;

  const navigate = useNavigate();

  function handleSignOut() {
    if (window.confirm("Yakin ingin keluar ?")) {
      Cookies.remove("access_token");
      navigate("/");
    }
  }
  return (
    <div className="py-3 pe-3 ">
      <div className="bg-secondary-blue rounded rounded-xxl p-3 shadow-sm d-flex justify-content-between">
        <p className="p-0 m-0 fw-bolder text-white">{title ?? "Menu"}</p>
        <button
          onClick={handleSignOut}
          className="border-0 bg-transparent text-danger fw-semibold px-2 m-0"
        >
          Keluar
        </button>
      </div>
    </div>
  );
};

export default TopBar;
