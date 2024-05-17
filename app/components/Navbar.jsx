"use client" 
import Link from "next/link";
import React from "react";
import page from "../All_Model/page";
import Login from "../Login/page";
import { useState } from "react"; // โหลดคำสั่ง useState จากไลบรารี React เพื่อใช้ในการจัดการสถานะของคอมโพเนนต์
import { MdLogin } from "react-icons/md";

export default function Navbar() {
  const [OpenModal, setOpenModal] = useState(false);
  // const [ani, setanime] = useState(false);
  return (
    <div className="Nav">
      <div className="AudiHeaderstyle">
        <div className="Audi-logo">
          <a href="/">
            <svg height="24" width="69" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M56.927 0a11.798 11.798 0 00-7.495 2.671A11.906 11.906 0 0041.9 0a11.719 11.719 0 00-7.494 2.671C32.347 1.006 29.745 0 26.91 0a11.798 11.798 0 00-7.494 2.671C17.358 1.006 14.756 0 11.92 0 5.32 0 0 5.303 0 11.884c0 6.58 5.32 11.884 11.921 11.884 2.835 0 5.475-1.007 7.495-2.671 2.058 1.664 4.66 2.67 7.494 2.67 2.835 0 5.475-1.006 7.495-2.67a11.906 11.906 0 007.533 2.67c2.874 0 5.475-1.006 7.533-2.67 2.058 1.664 4.66 2.67 7.495 2.67 6.601 0 11.921-5.302 11.921-11.883C68.848 5.342 63.528 0 56.927 0zm-7.495 17.226a9.126 9.126 0 01-1.708-5.342c0-1.974.621-3.832 1.708-5.342a9.126 9.126 0 011.709 5.342c0 2.013-.66 3.832-1.709 5.342zm-15.027 0a9.126 9.126 0 01-1.709-5.342c0-1.974.621-3.832 1.709-5.342a9.126 9.126 0 011.708 5.342c0 2.013-.66 3.832-1.708 5.342zm-15.028 0a9.126 9.126 0 01-1.709-5.342c0-1.974.622-3.832 1.709-5.342a9.126 9.126 0 011.708 5.342c0 2.013-.66 3.832-1.708 5.342zM2.602 11.884c0-5.071 4.116-9.213 9.242-9.213a9.22 9.22 0 015.63 1.897c-1.592 2.013-2.524 4.529-2.524 7.316 0 2.748.932 5.303 2.524 7.316-1.553 1.2-3.495 1.897-5.63 1.897-5.087 0-9.242-4.103-9.242-9.213zM21.24 19.2c1.592-2.013 2.524-4.529 2.524-7.316 0-2.749-.932-5.303-2.524-7.316 1.553-1.2 3.495-1.897 5.63-1.897 2.136 0 4.078.697 5.63 1.897-1.591 2.013-2.523 4.529-2.523 7.316 0 2.748.932 5.303 2.524 7.316-1.553 1.2-3.495 1.897-5.63 1.897-2.136 0-4.078-.697-5.631-1.897zm15.028 0c1.592-2.013 2.524-4.529 2.524-7.316 0-2.749-.932-5.303-2.524-7.316 1.553-1.2 3.494-1.897 5.63-1.897a9.22 9.22 0 015.63 1.897c-1.591 2.013-2.523 4.529-2.523 7.316 0 2.748.932 5.303 2.524 7.316-1.554 1.2-3.495 1.897-5.63 1.897a9.22 9.22 0 01-5.631-1.897zm20.658 1.897a9.22 9.22 0 01-5.63-1.897c1.591-2.013 2.523-4.529 2.523-7.316 0-2.749-.932-5.303-2.524-7.316 1.554-1.2 3.495-1.897 5.63-1.897 5.088 0 9.243 4.103 9.243 9.213 0 5.11-4.155 9.213-9.242 9.213z"
                fill="#000000"
                fillRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="menu" id="menu">
          <button onClick={() => setOpenModal(!OpenModal)}>
            <div className="tab">
              <div className="aaa"></div>
              <div className="bbb"></div>
              <div className="ccc"></div>
              <div className="ddd"></div>
            </div>
            <span>Menu</span>
          </button>
          {/* <button>
          <div className="t">
              <div className="aaa"></div>
              <div className="bbb"></div>
            </div>
          </button> */}
        </div>
        <div className="empty"></div>
        <nav>
          <div className="navHeaderstyle">
            <div className="AudiHeaderNavstyle">
              <ul className="navbar" id="navbar">
                <li>
                  <Link href="/All_Model">All Models</Link>
                </li>
                <li>
                  <a href="#">Service & Accessories</a>
                </li>
                <li>
                  <a href="#">Innovation</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <form className="navform">
          <input type="search" />
        </form>
        <div className="button-search">
          <button aria-label="Search" type="button">
            <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22 22l-8.3-8.3L22 22zM15.5 9c.1 3.5-2.6 6.4-6.1 6.5H9c-3.6 0-6.5-2.9-6.5-6.5S5.4 2.5 9 2.5s6.5 2.9 6.5 6.5c0 0 0 0 0 0z"
                fill="none"
                stroke="currentColor"
              ></path>
            </svg>
          </button>
        </div>
        <div>
          <a href="/Login">
            <MdLogin className="flex mt-[23px] ml-[5px] w-[24px] h-[24px] cursor-pointer stroke-3"/></a>
      </div>
      </div>
      
      <div className={`w-full absolute overflow-hidden bg-white opacity-100 left-0 top-[72px] z-50 ${
          OpenModal === false
          ? "h-0"
          : "h-[871px]"
        }`}
        >
          <div className="nav-box">
            <ul className="navul" >
              <li>
                <Link onClick = {() => setOpenModal(!OpenModal)} href="/All_Model">All Models</Link>
              </li>
              <li>
                <a href="#">
                  <span>Service & Accessories</span>
                  <svg
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 16.9l5.5-5.4L10 6.1"
                      fill="none"
                      stroke="currentColor"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Innovation</span>
                  <svg
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 16.9l5.5-5.4L10 6.1"
                      fill="none"
                      stroke="currentColor"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Support</span>
                  <svg
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 16.9l5.5-5.4L10 6.1"
                      fill="none"
                      stroke="currentColor"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
    </div>
  );
}
