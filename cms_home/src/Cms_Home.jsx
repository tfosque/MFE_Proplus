import React, { useEffect, useState } from "react";
import "./cms_home.scss";
export default function Cms_Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = "http://localhost:1337/api/info-block50s/";

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
  }, []);

  const img01 =
    "https://dev-site.becn.digital/site/binaries/content/gallery/beaconhippo/beacon_pro_plus_homepage_banner1_081919.png";
  const img02 =
    "https://dev-site.becn.digital/site/binaries/content/gallery/beaconhippo/beacon_3d_plus_homepage_banner2_080119.png";
  const img03 =
    "https://dev-site.becn.digital/site/binaries/content/gallery/beaconhippo/tri-built_homepage_banner3_080119.png";

  console.log("cms", { data });

  const articleBeacon = data;
  // const article = articleBeacon && articleBeacon.data[0].attributes;
  const title = articleBeacon && articleBeacon.data[0].attributes.Title;
  const text = articleBeacon && articleBeacon.data[0].attributes.Text;
  const moreAbout =
    articleBeacon && articleBeacon.data[0].attributes.TextLinkTitle;

  return (
    <div className="row">
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img01} className="d-block w-100" alt="..." />
            <div
              className="carousel-caption d-none d-md-block"
              style={{ textAlign: "left" }}
            >
              <h5>GET MORE DONE WITH BEACON PRO+</h5>
              <p>24/7 Access to your Beacon Account from Any Device.</p>
              <div>
                <button
                  className="btn btn-lg btn-warning"
                  style={{ color: "#fff" }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img02} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img03} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container" style={{ maxWidth: "1200px" }}>
        <div className="row">
          <div className="col-6">
            <h2>{title}</h2>
            <p style={{ fontSize: ".9rem" }}>{text}</p>

            <button className="btn btn-link" style={{ color: "orange" }}>
              {moreAbout} &rarr;
            </button>
          </div>
          <div className="col-2">
            <div className="block1">
              <div className="bold"> 500+</div>
              <div className="sub-label">LOCATIONS</div>
            </div>
          </div>
          <div className="col-2">
            <div className="block1">
              <div className="bold"> 3000+</div>
              <div className="sub-label">FLEET SIZE</div>
            </div>
          </div>
          <div className="col-2">
            <div className="block1">
              <div className="bold"> 8500+</div>
              <div className="sub-label">TEAM MEMBERS</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <div className="article">
              <h3>PRACTICAL INNOVATION</h3>
              <p className="para">
                Work smarter with tools designed to help you save time and build
                your business
              </p>
              <button className="btn btn-warning">
                Learn More About Our Solutions
              </button>
            </div>
          </div>
          <div className="col-4">
            <div className="article">
              <h3>SEAMLESS EXECUTION</h3>
              <p className="para">
                Our teams works hard to ensure you have the products you need
                when and where you need them
              </p>
              <button className="btn btn-warning">
                Find a Location Near You
              </button>
            </div>
          </div>
          <div className="col-4">
            <div className="article">
              <h3>HANDS-ON PARTNERSHIP</h3>
              <p className="para">
                Build more with unique programs designed to help you get more
                done
              </p>
              <button className="btn btn-warning">
                Learn More About Contractor Programs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
