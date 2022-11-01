import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const Details = () => {
  const [userData, setUserData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();

  const getData = async () => {
    const res = await fetch("/getdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 404 || !data) {
      alert("error occured");
      console.log("error occured");
    } else {
      setUserData(data);
      console.log("get data");
    }
  };

  const navigateBack = () => {
    navigate("/");
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="details-header">
        <h3 className="details-heading">Contact Details</h3>
        <button className="btn-details" onClick={navigateBack}>
          Home
        </button>
      </div>

      <div className="details-container">
        {userData.map((user) => {
          const {
            firstname,
            lastname,
            workemail,
            phone,
            companyname,
            companysize,
            jobtitle,
            training,
          } = user;
          return (
            <div className="details-card">
              <p>First Name: {firstname}</p>
              <p>Last Name: {lastname}</p>
              <p>Email : {workemail}</p>
              <p>Phone No : {phone}</p>
              <p>Company Name: {companyname}</p>
              <p>Company Size : {companysize}</p>
              <p>Job Title : {jobtitle}</p>
              <p>Training : {training}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Details;
