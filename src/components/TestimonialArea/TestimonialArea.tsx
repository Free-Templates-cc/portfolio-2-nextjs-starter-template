import React from "react";
import ThumbImage from "public/images/thumb.webp"
import Image from "next/image";
import RBCarousel  from 'react-bootstrap-carousel';

const TestimonialArea = () => {
  return (
    <div className="testimonial_area ">
      <div className="outline_text white testmonial d-none d-lg-block">
        Testimonial
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
  
            <RBCarousel
              animation={true}
              slideshowSpeed={2000}
              defaultActiveIndex={0}
              version={4}
              className="testmonial_active"
            >
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
              </RBCarousel>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialArea;
