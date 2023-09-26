import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Dashboard() {
  const user = useSelector((state) => state.auth.user);
  console.log("user", user);

  return (
    <>
      {/* <div className="dashboard container border row">
        <div className="col-3 border p-3">
          <h5>Manage My Account</h5>
          <div>Upload-Image</div>
          <div>Update-Password</div>
          <div>Add Address</div>
        </div>
        <div className="col-9 border p-3">
          <h3>Welcome {user.data.dataValues.firstName}</h3>
        </div>
      </div> */}
      <div className="container-fluid p-5">
        <div className="row">
          {/* Sidebar */}
          <nav
            id="sidebar"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar"
          >
            <div className="position-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className="nav-link active" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/orders">
                    Orders
                  </Link>
                </li>
                {/* Add more navigation links here */}
              </ul>
            </div>
          </nav>

          {/* Main content */}
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            {/* Your dashboard content goes here */}
            <h3>Welcome to your dashboard</h3>
            {/* Add your dashboard components and content here */}
          </main>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
