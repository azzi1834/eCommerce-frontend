import React from "react";
import corporates from "../assets/corporates.png";

function Education() {
  return (
    <div className="container my-4 p-3">
      <h3>Best Buy Education</h3>

      <div className="row p-4 border">
        <div className="col-5">
          <img src="https://www.transparentpng.com/thumb/student/ECcMj8-student-png.png"></img>
        </div>
        <div className="col-7 p-5">
          <img
            src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/SOL-69019-edu-lockup-200160.jpg"
            style={{ width: "25%" }}
          ></img>
          <h2 className="mt-3">Let's talk about what's possible.</h2>
          <p>
            Creating an end-to-end tech solution for a school can be a daunting
            task. That's why Best Buy Education is here to help with everything
            from planning and installation to ongoing tech support. Contact a
            dedicated Education Account Manager to get started and customize a
            complete solution for your school.
          </p>
        </div>
      </div>

      <h4 className="text-center mt-5">
        ----- Here are some of the ways we can help your school succeed -----
      </h4>

      <div className="row p-4 my-5">
        <div className="col-5">
          <img src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/SOL-69019-account-manager-der-199203.jpg;maxHeight=305;maxWidth=390"></img>
        </div>
        <div className="col-7 p-2">
          <h3>Meet your Education Account Manager.</h3>
          <p>
            You'll work with a professional who exclusively supports education
            clients and who will be dedicated to your account. They'll help you
            choose from thousands of education-grade products and give you
            options for how to best configure your classrooms and common areas.
            Once installation begins, they'll work with Best Buy Project
            Managers to make sure your project goes smoothly and that you
            receive daily updates and customized reporting.{" "}
          </p>
        </div>
      </div>
      <div className="row p-4 my-5">
        <div className="col-7 p-2">
          <h3>A true end-to-end solution.</h3>
          <p>
            Best Buy Education saves you from having to work with multiple
            vendors, as we can truly do it all. Geek Squad® Agents can customize
            your new devices, install apps and provide asset tagging so students
            are ready to learn from day one. At your school, our unmatched
            combination of space planning, technology and installation expertise
            will create the modern learning environments and virtual
            capabilities you're hoping for.
          </p>
        </div>
        <div className="col-5">
          <img src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/SOL-69019-setup-der-199204.jpg;maxHeight=305;maxWidth=390"></img>
        </div>
      </div>

      <div className="row p-4 my-5">
        <div className="col-5">
          <img src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/SOL-69019-students-pol-der-199244.jpg;maxHeight=305;maxWidth=390"></img>
        </div>
        <div className="col-7 p-2">
          <h3>All of the devices your students and staff need.</h3>
          <p>
            Using the power of Best Buy's product assortment, we offer great
            prices on thousands of the latest education-grade devices from the
            world's premium tech brands. Work one-to-one with your Account
            Manager to select a suite of products that fits your needs and
            budget. We can even customize Chromebooks, laptops and tablets to
            your specifications.
          </p>
        </div>
      </div>

      <div className="row border" style={{ backgroundColor: "#ECECEC" }}>
        <div className="col-6">
          <img src={corporates}></img>
        </div>
        <div className="col-6 my-auto p-3">
          <h2>Cooperative contracts.</h2>
          Join with other schools and use your combined purchasing power to
          guarantee favorable pricing on products and services. We offer a
          variety of cooperative contracts that align with both state and
          district purchasing guidelines.
        </div>
      </div>
    </div>
  );
}

export default Education;
