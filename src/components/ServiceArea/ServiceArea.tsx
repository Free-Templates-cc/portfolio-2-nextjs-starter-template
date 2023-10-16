import Image from "next/image";
import React from "react";
import ServiceImage1 from "public/images/1.svg"
import ServiceImage2 from "public/images/2.svg"
import ServiceImage3 from "public/images/3.svg"

const ServiceArea = () => {
  return (
    <div className="service_area">
      <div className="outline_text white d-none d-lg-block">Services</div>
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single_service">
              <div className="icon">
                <Image src={ServiceImage1} alt="Service 1" />
              </div>
              <h3>3D Modeling</h3>
              <p>
                A wonderful serenity has taken to the <br></br> possession of my
                entire soul network <br></br> infrastructure, including
                consolidation of <br></br> established network designed and
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single_service">
              <div className="icon">
              <Image src={ServiceImage2} alt="Service 1" />
              </div>
              <h3>UI/UX Design</h3>
              <p>
                A wonderful serenity has taken to the <br></br> possession of my
                entire soul network <br></br> infrastructure, including
                consolidation of <br></br> established network designed and
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single_service">
              <div className="icon">
              <Image src={ServiceImage3} alt="Service 1" />
              </div>
              <h3>Architectural Design</h3>
              <p>
                A wonderful serenity has taken to the <br></br> possession of my
                entire soul network <br></br> infrastructure, including
                consolidation of <br></br> established network designed and
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;
