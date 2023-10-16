import React, { useRef } from "react";
import LogoImage from "public/images/logo.webp"
import Image from "next/image";
import useVerticalScrollEvent from "@/hooks/useVerticalScrollEvent";

const Header = () => {

  const stickyRef = useRef<HTMLDivElement>(null);

  useVerticalScrollEvent((evt) => {
    if((evt.currentTarget as Window).scrollY >= 150) {
      (stickyRef.current as HTMLDivElement).classList.add('sticky');
      return;
    } 
    (stickyRef.current as HTMLDivElement).classList.remove('sticky');
  });

  return (
    <header>
      <div className="header-area ">
        <div id="sticky-header" className="main-header-area" ref={stickyRef}>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-2">
                <div className="logo">
                  <a href="index.html">
                    <Image src={LogoImage} alt="Logo" />
                  </a>
                </div>
              </div>
              <div className="col-xl-9 col-lg-10">
                <div className="main-menu  d-none d-lg-block text-right">
                  <nav>
                    <ul id="navigation">
                      <li>
                        <a className="active" href="index.html">
                          home
                        </a>
                      </li>
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li>
                        <a href="#">
                          blog <i className="ti-angle-down"></i>
                        </a>
                        <ul className="submenu">
                          <li>
                            <a href="blog.html">blog</a>
                          </li>
                          <li>
                            <a href="single-blog.html">single-blog</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          pages <i className="ti-angle-down"></i>
                        </a>
                        <ul className="submenu">
                          <li>
                            <a href="portfolio-work.html">Portfolio work</a>
                          </li>
                          <li>
                            <a href="work_details.html">work details</a>
                          </li>
                          <li>
                            <a href="services.html">Services</a>
                          </li>
                          <li>
                            <a href="elements.html">elements</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
