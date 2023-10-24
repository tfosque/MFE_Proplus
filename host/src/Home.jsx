import Navbar from "navbar/Navbar";
import Footer from "footer/Footer";
import Sidebar from "sidebar/Sidebar";
import Orders from "orders/Orders";
import Cms_Home from "cms_home/Cms_Home";

export default function Home() {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <Navbar />
        </div>
      </div>

      {/*  <div className="container-md">
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-9">
            <Orders />
          </div>
        </div>
      </div> */}

      <Cms_Home />

      <div className="col-12">
        <Footer />
      </div>
    </div>
  );
}
