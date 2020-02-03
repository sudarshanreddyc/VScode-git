import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter
      className="font-small mb-auto"
      style={{
        position: "absolute",
        backgroundColor: "#1c6863",
        left: "0",
        right: "0",
        bottom: "0"
      }}
    >
      <MDBContainer fluid className="text-center">
        <MDBRow>
          <MDBCol className="md-6 ml=12 sm=6">
            <ul>
              <li className="text-danger">Links</li>
              <li className="list-unstyled">
                <a href="#!" className="text-light">
                  Terms and Conditions
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#!" className="text-light">
                  About Us
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#!" className="text-light">
                  Location
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center text-light">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.MDBootstrap.com" className="text-danger">
            {" "}
            Naturo.com{" "}
          </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
