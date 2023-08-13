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

  const pathName = window.location.pathname;
  return (
    <div className="py-3 pe-3 ">
      <div className="bg-secondary-blue rounded rounded-xxl p-3 shadow-sm d-flex justify-content-between">
        <p className="p-0 m-0 fw-bolder sidenav-responsif text-white">{title ?? "Menu"}</p>
        <div className=" gap-4 top-bar-navigation">
          <a
            href="/customer"
            className={`text-link fw-bold ${
              pathName.includes("/customer") && "text-yellow"
            }`}
          >
            Customer
          </a>
          <p className="p-0 m-0 text-white">|</p>
          <a
            href="/order"
            className={`text-link fw-bold ${
              pathName.includes("/order") && "text-yellow"
            }`}
          >
            Order
          </a>
          <p className="p-0 m-0 text-white">|</p>
          <a
            href="/supplier"
            className={`text-link fw-bold ${
              pathName.includes("/supplier") && "text-yellow"
            }`}
          >
            Supplier
          </a>
        </div>
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
