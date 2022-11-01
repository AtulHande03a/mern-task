import React, { useState } from "react";

const FormPage = () => {
  const [inputVal, setInputVal] = useState({
    firstname: "",
    lastname: "",
    workemail: "",
    phone: "",
    companyname: "",
    companysize: "",
    jobtitle: "",
    training: "",
  });

  const setData = (e) => {
    const { name, value } = e.target;
    setInputVal((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
    console.log(inputVal);
  };

  const addInputData = async (e) => {
    e.preventDefault();

    const {
      firstname,
      lastname,
      workemail,
      phone,
      companyname,
      companysize,
      jobtitle,
      training,
    } = inputVal;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        workemail,
        phone,
        companyname,
        companysize,
        jobtitle,
        training,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 404 || !data) {
      alert("error occured");
      console.log("error occured");
    } else {
      alert("data added succesfully");
      console.log("data added succesfully");
    }
  };

  return (
    <section className="form-container">
      <form>
        <div className="form-detail">
          <input
            type="text"
            name="firstname"
            placeholder="First Name *"
            className="form-input"
            value={inputVal.firstname}
            onChange={setData}
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name *"
            className="form-input"
            value={inputVal.lastname}
            onChange={setData}
          />
          <input
            type="email"
            name="workemail"
            placeholder="Work Email  *"
            className="form-input"
            value={inputVal.workemail}
            onChange={setData}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number *"
            className="form-input"
            value={inputVal.phone}
            onChange={setData}
          />
          <input
            type="text"
            name="companyname"
            placeholder="Company Name *"
            className="form-input"
            value={inputVal.companyname}
            onChange={setData}
          />
          {/* <input
            type="text"
            name="jobtitle"
            placeholder="Job title *"
            className="form-input"
            value={inputVal.companysize}
            onChange={setData}
          /> */}
          <select
            name="companysize"
            id="companysize"
            className="select-form"
            placeholder="Company Size *"
            value={inputVal.companysize}
            onChange={setData}
          >
            <option value="Contarctor/Freelancer">Contarctor/Freelancer</option>
            <option value="1-199">1-199</option>
            <option value="200-999">200-999</option>
            <option value="1000-5000">1000-5000</option>
            <option value="5000+">5000+</option>
          </select>
          <input
            type="text"
            name="jobtitle"
            placeholder="Job title *"
            className="form-input"
            value={inputVal.jobtitle}
            onChange={setData}
          />
          <input
            type="text"
            name="training"
            placeholder="What are your training needs *"
            className="form-input"
            value={inputVal.training}
            onChange={setData}
          />
        </div>
        <div className="form-btn-container">
          <button type="submit" className="btn-submit" onClick={addInputData}>
            Get in touch
          </button>
          <p className="form-privacy-term">
            By signing up, you agree to our terms and privacy policy. You agree
            that we can contact you about Udemy and use data from third parties
            to personalize your experience.
          </p>
        </div>
      </form>
    </section>
  );
};

export default FormPage;
