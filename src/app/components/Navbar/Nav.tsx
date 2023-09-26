"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { ImHome } from "react-icons/im";
import { BsFillHouseGearFill } from "react-icons/bs";
import { ImFolderDownload } from "react-icons/im";
import Image from "next/image";

export const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolledFromTop, setScrolledFromTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledFromTop(window.scrollY >= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  return (
    <>
      <div id="header">
        <div
          className={`${
            !scrolledFromTop ? "h-8" : "h-8 top-0"
          } bg-[#051c40] text-slate-300 flex flex-row justify-around `}
        >
          <div className="ml-8  flex flex-row items-center gap-3 text-sm ">
            <MdEmail className="icons" /> <p>kvnhs@deped.gov.ph</p>
          </div>
          <div className="mr-8 mt-1 flex flex-row items-center gap-1 text-sm  ">
            <AiFillPhone className="icons" /> +63123456723
          </div>
        </div>
        <header
          className={`fixed w-full z-50 bg-gray-50 flex md:gap-9 justify-between items-center px-4 md:px-12 transition-all duration-200 ${
            !scrolledFromTop ? "h-20 " : "h-14 top-0 shadow-lg"
          }`}
        >
          <Link href={"/"} className="flex flex-row items-center gap-3">
            <Image
              src={"/images/final.jpg"}
              width={45}
              height={45}
              alt="logo"
              className="rounded-full"
            />
            <p
              className={`h-12 md:hidden lg:flex transform origin-left mt-4 transition md:mr-10 duration-200 text-base text-[#283c5d] font-bold  ${
                !scrolledFromTop ? "scale-60" : "scale-90"
              }`}
            >
              K.V.N.H.S
            </p>
          </Link>
          <nav>
            <button className="md:hidden" onClick={toggleNav}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <ul
              className={`fixed left-0 right-0 min-h-screen px-4 pt-8 space-y-4 bg-gray-200 md:bg-gray-50 text-white transform transition duration-300 ${
                !navOpen ? "translate-x-full" : "translate-x-0 flex flex-col"
              } md:relative md:flex  md:space-x-4 lg:space-x-6 md:min-h-0 md:px-0 md:py-0 md:space-y-0 md:translate-x-0`}
            >
              <li className="w-100 md:bg-gray-50 bg-gray-50 ml-10 flex flex-row items-center gap-2 text-sm rounded-md">
                <ImHome className="text-gray-800" />

                <Link
                  className="links "
                  href="#header"
                  onClick={() => setNavOpen(false)}
                >
                  HOME
                </Link>
              </li>
              <li className=" md:bg-gray-50 w-100 bg-gray-50  flex flex-row items-center gap-2 text-sm rounded-md">
                <BsFillHouseGearFill className="text-gray-800" />
                <Link
                  className="links"
                  href="#News"
                  onClick={() => setNavOpen(false)}
                >
                  NEWS
                </Link>
              </li>
              {/*  <li className=" md:bg-gray-50 w-100 bg-gray-50  flex flex-row items-center gap-2 text-sm rounded-md">
                <BsFillHouseGearFill className="text-gray-800" />
                <Link
                  className="links"
                  href="#Contact"
                  onClick={() => setNavOpen(false)}
                >
                  CITIZENS CHARTER
                </Link>
              </li> */}
              <li className=" md:bg-gray-50 w-100 bg-gray-50  flex flex-row items-center gap-2 text-sm rounded-md">
                <BsFillHouseGearFill className="text-gray-800" />
                <Link
                  className="links"
                  href="#About"
                  onClick={() => setNavOpen(false)}
                >
                  ABOUT
                </Link>
              </li>
              <li className=" md:bg-gray-50 w-100 bg-gray-50  flex flex-row items-center gap-2 text-sm rounded-md">
                <BsFillHouseGearFill className="text-gray-800" />
                <Link
                  className="links"
                  href="#Contact"
                  onClick={() => setNavOpen(false)}
                >
                  CONTACT
                </Link>
              </li>
              <li className=" md:bg-gray-50 w-100 bg-gray-50  flex flex-row items-center gap-2 text-sm rounded-md">
                <ImFolderDownload className="text-amber-800" />
                <Link
                  className="links "
                  href="#Contact"
                  onClick={() => setNavOpen(false)}
                >
                  DOWNLOAD APP
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};
