import React from "react";
import Footer from "./Footer";
import FormPage from "./FormPage";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="side-padding main-container">
          <section className="text-section">
            <h2 className="demo-heading">Get your demo</h2>
            <p className="para-text mb-2">
              See why leading organizations choose Udemy Business as their
              destination for employee learning.
            </p>
            <ul className="ul-details">
              <h4 className="mb-2">In your demo, learn more about:</h4>
              <li className="para-text mb-1">
                Unlimited access to 17,000+ top courses selected from Udemy.com
                – anytime, on any device
              </li>
              <li className="para-text mb-1">
                Fresh content taught by global instructors – for any learning
                style
              </li>
              <li className="para-text mb-1">
                Actionable learning insights and admin functionality
              </li>
            </ul>
            <div className="trusted-list">
              <h3>Trusted by:</h3>
              <div>
                <ul className="logo-list">
                  <li>
                    <img src="../images/gofundme.png.webp" alt="gofundme" />
                  </li>
                  <li>
                    <img src="../images/Box.png.webp" alt="box" />
                  </li>
                  <li>
                    <img src="../images/Fender.png.webp" alt="fender" />
                  </li>
                  <li>
                    <img src="../images/Aflac-1.png.webp" alt="alfac" />
                  </li>
                  <li>
                    <img src="../images/VW-logo-grey.png.webp" alt="vw" />
                  </li>
                  <li>
                    <img src="../images/Tata.TCS_.png.webp" alt="tcs" />
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <FormPage />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
