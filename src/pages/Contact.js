import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container margin-gap">
        <h2 className="center">Contact Us</h2>

        <hr />

        <div className="center card-contact">
          <div class="row ">
            <div class="col s12 m12">
              <div class="card">
                <div class="card-image">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448183.73907005717!2d76.81307299667618!3d28.646677259922765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1580128176128!5m2!1sen!2sin"
                    frameBorder="0"
                    style={{ width: "100%" }}
                  ></iframe>
                  <span class="black-text card-title">Card Title</span>
                </div>

                <div class="card-content center">
                  <div>
                    <p>
                      Name :
                      <a style={{ color: "#444" }} target="_top">
                        TARUN GUPTA
                      </a>
                    </p>
                    <p>
                      Phone Number :
                      <a href="tel:7415626643" style={{ color: "#333" }}>
                        7415626643
                      </a>
                    </p>
                    <p>Whatsapp : 7415626643</p>
                  </div>
                </div>
                <div class="card-action">
                  <a href="mailto:comm.dwarf@gmail.com">
                    Email : comm.dwarf@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
