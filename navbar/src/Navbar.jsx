import React, { useEffect, useState } from "react";
// import axios from "axios";

export default () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //
  const [dataB, setDataB] = useState(null);
  const [loadingB, setLoadingB] = useState(true);
  const [errorB, setErrorB] = useState(null);

  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = "http://localhost:1337/api/menu-items/";
    const becnData = "api.becn.com";

    // Make the API call using the fetch API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
    //
  }, []);
  //
  useEffect(() => {
    // Define the API endpoint URL
    const becnData = "https://www.becn.com/login";

    // Make the API call using the fetch API
    fetch(becnData)
      .then((response) => response.json())
      .then((data) => {
        setDataB(data);
        setLoadingB(false);
        console.log("dataB:", { data });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoadingB(false);
      });
    //
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  const listItems = data.data.map((item) => (
    <li className="nav-item" key={item.id}>
      <a
        className="nav-link active"
        aria-current="page"
        href="#"
        style={{ color: "#fff" }}
      >
        {item.attributes.Label}
      </a>
    </li>
  ));

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">{listItems}</ul>
          <form className="d-flex">
            <input
              className="form-control form-control-sm me-2"
              type="search"
              placeholder="Product Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light btn-sm" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
