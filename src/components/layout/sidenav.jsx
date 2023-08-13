import React from "react";
import "../../index.css";

const Sidenav = () => {
  const pathName = window.location.pathname;

  return (
    <div className="sidenav-component p-3">
      <div className="bg-secondary-blue h-100 rounded rounded-xxl py-3 shadow-sm">
        <div className="px-2">
          <p className="fs-4 fw-semibold text-center py-2 text-white fw-bold bg-primary-blue px-1 rounded">
            CLAODE STORE
          </p>
        </div>
        <ul className="list p-0 mt-4 ">
          <li className="px-2">
            <a className="link fw-semibold  " href="/customer">
              <p
                className={`py-2 m-0 px-2 w-100 menu-list rounded ${
                  pathName.includes("/customer") && "bg-yellow"
                }`}
              >
                Customer
              </p>
            </a>
          </li>
          <li className="px-2">
            <a className="link fw-semibold" href="/order">
              <p
                className={`py-2 my-1 px-2 w-100 menu-list rounded ${
                  pathName.includes("/order") && "bg-yellow"
                }`}
              >
                Order
              </p>
            </a>
          </li>
          <li className="px-2">
            <a className="link fw-semibold" href="/supplier">
              <p
                className={`py-2 m-0 px-2 w-100 menu-list rounded ${
                  pathName.includes("/supplier") && "bg-yellow"
                }`}
              >
                Supplier
              </p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidenav;
