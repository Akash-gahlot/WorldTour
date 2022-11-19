import React from "react";

export default function Footer() {
  return (
    <footer class="text-center text-lg-start bg-light" id="contact">
      <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div class="me-5 d-none d-lg-block fw-normal">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="https://www.facebook.com/akash.gahlot.355" class="me-4 link-secondary">
            <img
              src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Facebook_glyph_svg-512.png"
              alt="fb"
              width="40px"
            />
          </a>
          <a href="https://twitter.com/akashgahlot17?t=1a7cWGoAdZmIWTdwFciROw&s=08" class="me-4 link-secondary">
            <img
              src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Twitter_svg-512.png"
              alt="twitter"
              width="40px"
            />
          </a>
          <a href="https://www.instagram.com/akashgahlot_?utm_source=qr" class="me-4 link-secondary">
            <img
              src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Instagram_svg-512.png"
              alt="insta"
              width="40px"
            />
          </a>
          <a href="https://mail.google.com/mail/" class="me-4 link-secondary">
            <img
              src="https://cdn0.iconfinder.com/data/icons/social-circle-3/72/Email-512.png"
              alt="mail"
              width="40px"
            />
          </a>
        </div>
      </section>
      <section class="">
        <div class="container text-center text-md-start mt-5">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-gem me-3"></i>Company name
              </h6>
              <p>
                Founded in 2021 as Tour&Travels.com later change it to WorldTour.com and expand our services to Global level.
              </p>
            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" class="text-reset">
                  Mountaineering
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Trekking
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Camping
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  SkyDiving
                </a>
              </p>
            </div>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" class="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Help
                </a>
              </p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
              <a href="https://goo.gl/maps/VzmerkeYe52qyqj76">
              <p>
                <img
                  src="https://cdn2.iconfinder.com/data/icons/maps-navigation-linear-black/614/3708_-_Location_Found-512.png"
                  alt="fb"
                  width="30px"
                />
                Sarjapur Road,Bangalore IN
                </p>
                </a>
              <p>
                <img
                  src="https://cdn1.iconfinder.com/data/icons/outline-imperial-seo/128/SEO_C_50_09.12.14-1_Artboard_15-512.png"
                  alt="fb"
                  width="30px"
                />
                tour77@gmail.com
              </p>
              <p>
                <img
                  src="https://cdn0.iconfinder.com/data/icons/media-and-communication-3/64/support-number-communication-call-phone-telephone-512.png"
                  alt="fb"
                  width="30px"
                />
                + 91 9012723459
              </p>
            </div>
          </div>
        </div>
      </section>
      <div class="text-center p-4">
        © 2021 Copyright:
        <a class="text-reset fw-bold" href="/#home">
          WorldTour.com
        </a>
      </div>
    </footer>
  );
}
