import React from "react";
import BlogImage1 from "public/images/1.webp"
import BlogImage2 from "public/images/2.webp"
import BlogImage3 from "public/images/3.webp"
import BlogImage4 from "public/images/4.webp"
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import dynamic from "next/dynamic";
import { CarouselProps } from "react-responsive-carousel";

const Carousel = dynamic(() => import("react-responsive-carousel").then((mod) => mod.Carousel), {
  ssr: false,
});


const BlogArea = () => {

  const carouselConfig = { ariaLabel: undefined, } as CarouselProps

  return (
    <div className="creative_blog_area">
      <div className="outline_text blog d-none d-lg-block ">Blog</div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-9 col-md-6">
            <div className="blog_title">
              <h3>Our Creative Articles</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="more_blog">
              <a href="#" className="boxed-btn3">
                More Blogs
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Carousel className="creative_blog_active owl-carousel" {...carouselConfig}>
              <div className="single_blog">
                <div className="thumb">
                  <a href="#">
                    <Image src={BlogImage1} alt="blog 1" />
                  </a>
                </div>
                <div className="blog_content">
                  <a href="#">
                    <span className="date">October 19, 2019</span>
                  </a>
                  <a href="#">
                    <h3>Industry as their over draft</h3>
                  </a>
                  <div className="owner_info">
                    <div className="author_thumb">
                      <img src="img/creative_blog/author2.png" alt="" />
                    </div>
                    <div className="info">
                      <a href="#">
                        <h4>Mesica Chouhan</h4>
                      </a>
                      <p>Business Owner</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single_blog">
                <div className="thumb">
                  <a href="#">
                  <Image src={BlogImage2} alt="blog 2" />
                  </a>
                </div>
                <div className="blog_content">
                  <a href="#">
                    <span className="date">October 19, 2019</span>
                  </a>
                  <a href="#">
                    <h3>Construction their over draft</h3>
                  </a>
                  <div className="owner_info">
                    <div className="author_thumb">
                      <img src="img/creative_blog/author3.png" alt="" />
                    </div>
                    <div className="info">
                      <a href="#">
                        <h4>Mesica Chouhan</h4>
                      </a>
                      <p>Business Owner</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single_blog">
                <div className="thumb">
                  <a href="#">
                  <Image src={BlogImage3} alt="blog 3" />
                  </a>
                </div>
                <div className="blog_content">
                  <a href="#">
                    <span className="date">October 19, 2019</span>
                  </a>
                  <a href="#">
                    <h3>Industry as their over draft</h3>
                  </a>
                  <div className="owner_info">
                    <div className="author_thumb">
                      <img src="img/creative_blog/author.png" alt="" />
                    </div>
                    <div className="info">
                      <a href="#">
                        <h4>Mesica Chouhan</h4>
                      </a>
                      <p>Business Owner</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single_blog">
                <div className="thumb">
                  <a href="#">
                  <Image src={BlogImage4} alt="blog 4" />
                  </a>
                </div>
                <div className="blog_content">
                  <a href="#">
                    <span className="date">October 19, 2019</span>
                  </a>
                  <a href="#">
                    <h3>Industry as their over draft</h3>
                  </a>
                  <div className="owner_info">
                    <div className="author_thumb">
                      <img src="img/creative_blog/author.png" alt="" />
                    </div>
                    <div className="info">
                      <a href="#">
                        <h4>Mesica Chouhan</h4>
                      </a>
                      <p>Business Owner</p>
                    </div>
                  </div>
                </div>
              </div>
              </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArea;
