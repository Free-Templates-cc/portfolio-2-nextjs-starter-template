import React from "react";
import ThumbImage from "public/images/thumb.webp"
import Image from "next/image";

const TestimonialArea = () => {
  return (
    <div className="testimonial_area ">
      <div className="outline_text white testmonial d-none d-lg-block">
        Testimonial
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="testmonial_active owl-carousel">
              <div className="single_carousel">
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <div className="single_testmonial text-center">
                      <div className="thumb">
                        <Image src={ThumbImage} alt="Image 1" />
                      </div>
                      <p>
                        Innovative brewing methods and our coffee is sourced
                        from various parts of the globe and are roasted to
                        perfection.{" "}
                      </p>
                      <div className="testmonial_author">
                        <h3>Mesica Chouhan</h3>
                        <span>Mesica Chouhan</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single_carousel">
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <div className="single_testmonial text-center">
                      <div className="thumb">
                        <Image src={ThumbImage} alt="Image 1" />
                      </div>
                      <p>
                        Innovative brewing methods and our coffee is sourced
                        from various parts of the globe and are roasted to
                        perfection.{" "}
                      </p>
                      <div className="testmonial_author">
                        <h3>Mesica Chouhan</h3>
                        <span>Mesica Chouhan</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single_carousel">
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <div className="single_testmonial text-center">
                      <div className="thumb">
                        <Image src={ThumbImage} alt="Image 1" />
                      </div>
                      <p>
                        Innovative brewing methods and our coffee is sourced
                        from various parts of the globe and are roasted to
                        perfection.{" "}
                      </p>
                      <div className="testmonial_author">
                        <h3>Mesica Chouhan</h3>
                        <span>Mesica Chouhan</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialArea;
