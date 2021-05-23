import React from "react";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 offset-1 col-sm-2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Home</a>
                <br />
                <a href="#">About</a>
                <br />
                <a href="#">Menu</a>
                <br />
                <a href="contactus.html">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-7col-sm-5">
            <h5>Our Address</h5>
            <address>
              121, Clear Water bay Road
              <br />
              Clear Water Bay, Kowloon <br />
              Hong Kong
              <br />
              <i className="fa fa-phone fa-lg"></i>: +852 1234 5678 <br />
              <i className="fa fa-fax fa-lg"></i>: +852 1234 5678 <br />
              <i className="fa fa-envelope fa-lg"></i>:{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center">
              <a
                className="btn btn-social-icon btn-google"
                href="http://google.com/+"
              >
                <i className="fa fa-google-plus"></i>
              </a>
              <a
                className="btn btn-social-icon btn-facebook"
                href="http://www.facebook.com/profile.php?id="
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                className="btn btn-social-icon btn-linkedin"
                href="http://www.linkedin.com/in/"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                className="btn btn-social-icon btn-twitter"
                href="http://twitter.com/"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                className="btn btn-social-icon btn-google"
                href="http://youtube.com/"
              >
                <i className="fa fa-youtube"></i>
              </a>
              <a className="btn btn-social-icon" href="mailto:">
                <i className="fa fa-envelope-o"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto ">
            <p>Copyright whatever</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;