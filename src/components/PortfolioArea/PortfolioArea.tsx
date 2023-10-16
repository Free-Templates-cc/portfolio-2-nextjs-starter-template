import Image from "next/image";
import React from "react";
import PortFolioImage1 from "public/images/1.webp"
import PortFolioImage2 from "public/images/2.webp"
import PortFolioImage3 from "public/images/3.webp"
import PortFolioImage4 from "public/images/4.webp"
import PortFolioImage5 from "public/images/5.webp"
import PortFolioImage6 from "public/images/6.webp"
import PortFolioImage7 from "public/images/7.webp"
import PortFolioImage8 from "public/images/8.webp"
import PortFolioImage9 from "public/images/9.webp"

const PortfolioArea = () => {
  return (
    <div className="portfolio_area">
      <div className="portfolio_wrap">
        <div className=" single_gallery">
          <div className="thumb">
            <Image src={PortFolioImage1} alt="portfolio 1" />
          </div>
          <div className="gallery_hover">
            <div className="hover_inner">
              <span>Mobile App</span>
              <a href="work_details.html">
                {" "}
                <h3>Ubar Mobile App</h3>
              </a>
            </div>
          </div>
        </div>
        <div className="single_gallery small_width">
          <div className="thumb">
          <Image src={PortFolioImage2} alt="portfolio 2" />
          </div>
          <div className="gallery_hover">
            <div className="hover_inner">
              <span>Mobile App</span>
              <a href="work_details.html">
                {" "}
                <h3>Ubar Mobile App</h3>
              </a>
            </div>
          </div>
        </div>
        <div className="single_gallery">
          <div className="thumb">
          <Image src={PortFolioImage3} alt="portfolio 3" />
          </div>
          <div className="gallery_hover">
            <div className="hover_inner">
              <span>Mobile App</span>
              <a href="work_details.html">
                {" "}
                <h3>Ubar Mobile App</h3>
              </a>
            </div>
          </div>
        </div>
        <div className=" single_gallery">
          <div className="thumb">
          <Image src={PortFolioImage4} alt="portfolio 4" />
          </div>
          <div className="gallery_hover">
            <div className="hover_inner">
              <span>Mobile App</span>
              <a href="work_details.html">
                {" "}
                <h3>Ubar Mobile App</h3>
              </a>
            </div>
          </div>
        </div>
        <div className="single_gallery">
          <div className="thumb">
          <Image src={PortFolioImage5} alt="portfolio 5" />
          </div>
          <div className="gallery_hover">
            <div className="hover_inner">
              <span>Mobile App</span>
              <a href="work_details.html">
                {" "}
                <h3>Ubar Mobile App</h3>
              </a>
            </div>
          </div>
        </div>
        <div className=" single_gallery small_width">
          <div className="thumb">
          <Image src={PortFolioImage6} alt="portfolio 6" />
          </div>
          <div className="gallery_hover">
            <div className="hover_inner">
              <span>Mobile App</span>
              <a href="work_details.html">
                {" "}
                <h3>Ubar Mobile App</h3>
              </a>
            </div>
          </div>
        </div>
        <div className="single_gallery">
          <div className="thumb">
          <Image src={PortFolioImage7} alt="portfolio 7" />
          </div>
          <div className="gallery_hover">
            <div className="hover_inner">
              <span>Mobile App</span>
              <a href="work_details.html">
                {" "}
                <h3>Ubar Mobile App</h3>
              </a>
            </div>
          </div>
        </div>
        <div className=" single_gallery small_width">
          <div className="thumb">
          <Image src={PortFolioImage8} alt="portfolio 8" />
          </div>
          <div className="gallery_hover">
            <div className="hover_inner">
              <span>Mobile App</span>
              <a href="work_details.html">
                {" "}
                <h3>Ubar Mobile App</h3>
              </a>
            </div>
          </div>
        </div>
        <div className=" single_gallery">
          <div className="thumb">
          <Image src={PortFolioImage9} alt="portfolio 9" />
          </div>
          <div className="gallery_hover">
            <div className="hover_inner">
              <span>Mobile App</span>
              <a href="work_details.html">
                {" "}
                <h3>Ubar Mobile App</h3>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="more_works text-center">
        <a href="portfolio-work.html">More Works</a>
      </div>
    </div>
  );
};

export default PortfolioArea;
