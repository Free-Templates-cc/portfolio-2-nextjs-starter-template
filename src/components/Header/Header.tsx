import React, { useRef } from "react";
import LogoImage from "public/images/logo.webp"
import Image from "next/image";
import Link from "next/link";
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
                  <Link href="/">
                    <Image src={LogoImage} alt="Logo" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-9 col-lg-10">
                <div className="main-menu  d-none d-lg-block text-right">
                  <nav>
                    <ul id="navigation">
                      <li>
                        <Link className="active" href="/">
                          home
                        </Link>
                      </li>
                      <li>
                        <a href="/about">About</a>
                      </li>
                      <li>
                        <a href="#">
                          blog <i className="ti-angle-down"></i>
                        </a>
                        <ul className="submenu">
                          <li>
                            <Link href="/blog">blog</Link>
                          </li>
                          <li>
                            <Link href="/single-blog">single-blog</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          pages <i className="ti-angle-down"></i>
                        </a>
                        <ul className="submenu">
                          <li>
                            <Link href="/portfolio-work">Portfolio work</Link>
                          </li>
                          <li>
                            <Link href="/work-details">work details</Link>
                          </li>
                          <li>
                            <Link href="/services">Services</Link>
                          </li>
                          <li>
                            <Link href="/elements">elements</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
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
