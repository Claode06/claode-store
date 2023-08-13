import React, { useEffect } from "react";

const Pagination = () => {
  const url = new URLSearchParams(window.location.search);
  const page = url.get("page");
  const limit = url.get("limit");

  function prev() {
    if (page && Number(page) > 1) {
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.set("page", Number(page) - 1);
      window.history.replaceState(null, "", `?${urlParams.toString()}`);
    }
  }
  function next() {
    if (page) {
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.set("page", Number(page) + 1);
      window.history.replaceState(null, "", `?${urlParams.toString()}`);
    } else {
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.set("page", 2);
      window.history.replaceState(null, "", `?${urlParams.toString()}`);
    }
  }
  function handleLimit(e) {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("limit", e.target.value);
    window.history.replaceState(null, "", `?${urlParams.toString()}`);
  }

  return (
    <div className="d-flex gap-1 align-items-center justify-content-end">
      <div className="d-flex gap-2 align-items-center">
        <button
          onClick={prev}
          className="border-0 bg-transparent fw-medium"
        >{`Prev`}</button>
        <p className="fs-6 m-0 p-0 fw-semibold">{page ?? 1}</p>
        <button
          onClick={next}
          className="border-0 bg-transparent fw-medium"
        >{`Next`}</button>
      </div>
      <select onInput={handleLimit}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
    </div>
  );
};

export default Pagination;
