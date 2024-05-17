"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialYoutube } from "react-icons/ti";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa6";
import list from "./list.json";

export default function Footer() {
  const [inSite, setInSite] = useState(false);
  const [inAite, setInAite] = useState(false);
  const [inBite, setInBite] = useState(false);
  const [inCite, setInCite] = useState(false);
  return (
    <footer className="footer">
      <div className="Back-to-top">
        <a href="#" className="upds">
          <span>Back to top</span>
          <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 10l5.5 5.5L18 10"
              fill="none"
              stroke="currentColor"
            ></path>
          </svg>
        </a>
      </div>
      <div className="footer-main">
        <ul className="footer-table">
          <div>
            <div className="footer-space1">
              <ul>
                <a href="#">
                  <span>Model overview</span>
                </a>
                <li>
                  <a href="#">Overview</a>
                </li>
                <li>
                  <a href="#">All Models</a>
                </li>
              </ul>
            </div>
            <div className="footer-space2">
              <ul>
                <a href="#">
                  <span>Service & Accessories</span>
                </a>
                <li>
                  <a href="#">Overview</a>
                </li>
                <li>
                  <a href="#">Audi Service Center</a>
                </li>
                <li>
                  <a href="#">Audi Genuine Parts and Accessories</a>
                </li>
                <li>
                  <a href="#">Audi Warranty</a>
                </li>
                <li>
                  <a href="#">Audi Roadside Assistance</a>
                </li>
                <li>
                  <a href="#">Service Appointment</a>
                </li>
                <li>
                  <a href="#">Recall Campaign Enquiry System</a>
                </li>
              </ul>
            </div>
            <div className="footer-space3">
              <ul>
                <span>
                  <a href="#">Innovation</a>
                </span>
                <li>
                  <a href="#">Overview</a>
                </li>
                <li>
                  <a href="#">Vorsprung durch Technik</a>
                </li>
                <li>
                  <a href="#">Audi Sport</a>
                </li>
                <li>
                  <a href="#">Audi quattro</a>
                </li>
              </ul>
            </div>
            <div className="footer-space4">
              <ul>
                <a href="#">
                  <span>Support</span>
                </a>
                <li>
                  <a href="#">Overview</a>
                </li>
                <li>
                  <a href="#">Request a test drive</a>
                </li>
                <li>
                  <a href="#">Contact &Service</a>
                </li>
              </ul>
            </div>
          </div>
        </ul>
      </div>
      {/* ????????????????????? ????????????????????? */}
      <div className="flex flex-col h-[400px]">
        <div className="scorrl">
          <button
            onClick={() => setInSite((inSite) => !inSite)}
            className=" text-white flex w-full justify-between absolute px-[28px] border-white"
          >
            Model overview
            {!inSite ? (
              <FaChevronDown className="text-white self-center w-3" />
            ) : (
              <FaChevronUp className="text-white self-center flex w-3" />
            )}
          </button>
          {inSite && (
            <div className=" relative bg-[#1a1a1a] top-10 text-white w-full h-full">
              {list.map((item) => (
                <div className="cursor-pointer w-full py-2 pl-[28px] flex">
                  <h3>{item.model}</h3>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="scorrl">
          <button
            onClick={() => setInAite((inAite) => !inAite)}
            className=" text-white flex w-full justify-between px-[28px] top-[28px] border-white absolute"
          >
            Service & Accessories
            {!inAite ? (
              <FaChevronDown className="text-white self-center w-3" />
            ) : (
              <FaChevronUp className="text-white self-center flex w-3" />
            )}
          </button>
          {inAite && (
            <div className=" relative bg-[#1a1a1a] top-10 text-white w-full">
              {list.map((item) => (
                <div className="cursor-pointer w-full py-2 pl-[28px] top-4">
                  <h3>{item.acc}</h3>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="Ascorrl">
          <button
            onClick={() => setInBite((inBite) => !inBite)}
            className=" text-white flex w-full justify-between px-[28px] top-[40px] border-white absolute"
          >
            Innovation
            {!inBite ? (
              <FaChevronDown className="text-white self-center w-3" />
            ) : (
              <FaChevronUp className="text-white self-center flex w-3" />
            )}
          </button>
          {inBite && (
            <div className=" relative bg-[#1a1a1a] top-20 text-white w-full">
              {list.map((item) => (
                <div className="cursor-pointer w-full py-2 pl-[28px] flex flex-col">
                  <h3>{item.inno}</h3>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="Ascorrl">
          <button
            onClick={() => setInCite((inCite) => !inCite)}
            className=" text-white flex w-full justify-between px-[28px] top-[80px] border-white absolute"
          >
            Support
            {!inCite ? (
              <FaChevronDown className="text-white self-center w-3" />
            ) : (
              <FaChevronUp className="text-white self-center w-3" />
            )}
          </button>
          {inCite && (
            <div className=" relative bg-[#1a1a1a] top-[120px] text-white w-full">
              {list.map((item) => (
                <div className="cursor-pointer w-full py-2 pl-[28px]">
                  <h3>{item.sup}</h3>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="social-media ">
        <div className="icon">
          <Link
            href="//www.facebook.com/AudiThailand/"
            target="_blank"
            className="linkfacebook p-3"
          >
            <FaFacebookF className="text-white" />
          </Link>
          <Link
            href="//www.instagram.com/audithailand/"
            target="_blank"
            className="linkinstagram p-3"
          >
            <SlSocialInstagram className="text-white" />
          </Link>
          <Link
            href="//www.youtube.com/c/AudiThailandOfficial"
            target="_blank"
            className="linkyoutube p-3"
          >
            <TiSocialYoutube className="text-white" />
          </Link>
        </div>
        <div className="line"></div>
        <div className="bottomline">
          <p className="AUDI-TH">© 2023 AUDI TH. All rights reserved</p>
          <ul className="Careers">
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Imprint</a>
            </li>
            <li>
              <a href="#">Legal</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
