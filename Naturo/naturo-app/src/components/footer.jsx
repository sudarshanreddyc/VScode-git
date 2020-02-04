import React from "react";

const FooterPage = () => {
  return (
    <footer style={{ backgroundColor: "#070101" }}>
      <div class="container">
        <div class="row ">
          <div class="col-md-4 text-center text-md-left ">
            <div class="py-0">
              <h3 class="my-4 text-white">
                <span class="mx-2 font-italic text-warning ">Quick Links</span>
              </h3>

              <p class="footer-links font-weight-bold">
                <a class="text-white" href="#">
                  About Us
                </a>
                ||
                <a class="text-white" href="#">
                  Services
                </a>
                ||
                <a class="text-white" href="#">
                  Testimonials
                </a>
                ||
                <a class="text-white" href="#">
                  Contact Us
                </a>
              </p>
              <p class="text-light py-4 mb-4">&copy;2020 Naturo.</p>
            </div>
          </div>

          <div class="col-md-4 text-white text-center text-md-left ">
            <div class="py-2 my-4">
              <div>
                <p class="text-white">
                  {" "}
                  <i class="fa fa-map-marker mx-2 "></i>
                  Lovely Professionsl University, Phagwara, Punjab, 144411
                </p>
              </div>

              <div>
                <p>
                  <i class="fa fa-phone  mx-2 "></i> +91 22-27782183
                </p>
              </div>
              <div>
                <p>
                  <i class="fa fa-envelope  mx-2"></i>
                  <a href="mailto:support@eduonix.com">support@naturo.com</a>
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4 text-white my-4 text-center text-md-left ">
            <span class=" font-weight-bold ">About the Company</span>
            <p class="text-warning my-2">
              We offer varieties of food to varieties of persons considering
              quality and cost in mind
            </p>
            <div class="py-2">
              <a href="#">
                <i class="fab fa-facebook fa-2x text-primary mx-3"></i>
              </a>
              <a href="#">
                <i class="fab fa-google-plus fa-2x text-danger mx-3"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter fa-2x text-info mx-3"></i>
              </a>
              <a href="#">
                <i class="fab fa-youtube fa-2x text-danger mx-3"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
