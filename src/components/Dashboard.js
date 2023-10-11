import React, { useState } from "react";
import Profile from "./personalDetails";
import AddressBook from "./AddressBook";

function Dashboard() {
  const [comp, setComp] = useState("");

  // Function to handle button clicks and set 'comp' state
  const handleButtonClick = (functionality) => {
    setComp(functionality);
  };

  return (
    <>
      <div className="container-fluid p-5 border">
        <div className="row">
          <div className="col-3 border">
            <h5> Manage My Account </h5>
            <div>
              <button onClick={() => handleButtonClick("profile")}>
                My Profile
              </button>
              <br />
              <button onClick={() => handleButtonClick("uploadProfilePic")}>
                Upload Profile Pic
              </button>
              <br />
              <button onClick={() => handleButtonClick("resetPassword")}>
                Reset Password
              </button>
              <br />
              <button onClick={() => handleButtonClick("addressBook")}>
                Address Book
              </button>
              <br />
              <button onClick={() => handleButtonClick("paymentMethods")}>
                Payment Methods
              </button>
            </div>
          </div>

          <div className="col-9">
            {(() => {
              switch (comp) {
                case "profile":
                  return <Profile />;

                case "addressBook":
                  return <AddressBook />;

                // Add cases for other functionalities here

                default:
                  return null;
              }
            })()}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
