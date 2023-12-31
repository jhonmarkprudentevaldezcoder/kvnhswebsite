"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { GiUpgrade } from "react-icons/gi";
import { ImHome } from "react-icons/im";
import { BsFillHouseGearFill } from "react-icons/bs";
import { ImFolderDownload } from "react-icons/im";
import { FaRegistered } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import Image from "next/image";
import Cookies from "js-cookie";

export const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [scrolledFromTop, setScrolledFromTop] = useState(false);
  const [authNav, setAuthNav] = useState(false);

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("userId");
    window.location.href = "/Login";
  };

  useEffect(() => {
    // Check if the "token" cookie exists
    const token = Cookies.get("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

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
          <div className="hidden md:flex ml-8   flex-row items-center gap-3 text-sm ">
            <MdEmail className="icons" />
            <p>kasiglahanvillagenhs.301446@deped.gov.phh</p>
          </div>
          {isLoggedIn ? (
            <div className="mr-8 mt-1 flex flex-row items-center gap-3 md:gap-6 text-sm  ">
              <span className="flex flex-row items-center gap-2">
                <FaRegistered className="icons" />
                <p>WELCOME</p>
              </span>
              <span className="flex flex-row items-center gap-2">
                <AiOutlineLogin className="icons" />
                <Link onClick={handleLogout} href={"/"}>
                  LOGOUT
                </Link>
              </span>
            </div>
          ) : (
            <div className="mr-8 mt-1 flex flex-row items-center gap-3 md:gap-6 text-sm  ">
              <span className="flex flex-row items-center gap-2">
                <FaRegistered className="icons" />
                <Link href={"/Register"} onClick={() => setAuthNav(true)}>
                  REGISTER
                </Link>
              </span>
              <span className="flex flex-row items-center gap-2">
                <AiOutlineLogin className="icons" />{" "}
                <Link href={"/Login"} onClick={() => setAuthNav(true)}>
                  LOGIN
                </Link>
              </span>
            </div>
          )}
        </div>
        <header
          className={`fixed w-full z-50 bg-gray-50 flex md:gap-9 justify-between items-center px-4 md:px-12 transition-all duration-200 ${
            !scrolledFromTop ? "h-20 " : "h-14 top-0 shadow-lg"
          }`}
        >
          <Link href={"/"} className="flex flex-row items-center gap-3">
            <Image
              src={"/images/finallogo.ico"}
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
              K.V.S.H.S
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
              <li className="md:bg-gray-50 w-100 bg-gray-50  flex flex-row items-center gap-2 text-sm rounded-md px-4">
                <ImHome className="text-gray-800" />

                <Link
                  className="links "
                  href="/"
                  onClick={() => {
                    setNavOpen(false);
                    setAuthNav(false);
                  }}
                >
                  HOME
                </Link>
              </li>

              <li className=" md:bg-gray-50 w-100 bg-gray-50  flex flex-row items-center gap-2 text-sm rounded-md px-4">
                <BsFillHouseGearFill className="text-gray-800" />
                <Link
                  className="links"
                  href={authNav ? "/" : "#About"}
                  onClick={() => {
                    setNavOpen(false);
                    setAuthNav(false);
                  }}
                >
                  NEWS
                </Link>
              </li>

              <li className=" md:bg-gray-50 w-100 bg-gray-50  flex flex-row items-center gap-2 text-sm rounded-md px-4">
                <BsFillHouseGearFill className="text-gray-800" />
                <Link
                  className="links"
                  href={authNav ? "/" : "#About"}
                  onClick={() => {
                    setNavOpen(false);
                    setAuthNav(false);
                  }}
                >
                  ABOUT
                </Link>
              </li>
              <li className=" md:bg-gray-50 w-100 bg-gray-50  flex flex-row items-center gap-2 text-sm rounded-md px-4">
                <BsFillHouseGearFill className="text-gray-800" />
                <Link
                  className="links"
                  href={authNav ? "/" : "#Contact"}
                  onClick={() => {
                    setNavOpen(false);
                    setAuthNav(false);
                  }}
                >
                  CONTACT
                </Link>
              </li>

              {!isLoggedIn ? (
                <li className=" md:bg-gray-50 w-100 bg-gray-50  flex flex-row items-center gap-2 text-sm rounded-md px-4"></li>
              ) : (
                <div className="flex flex-row">
                  <li className=" md:bg-gray-50 w-100 bg-gray-50  flex flex-row items-center gap-2 text-sm rounded-md px-4">
                    <GiUpgrade className="text-amber-800" />
                    <Link
                      className="links"
                      href="/Grade"
                      onClick={() => {
                        setNavOpen(false);
                        setAuthNav(false);
                      }}
                    >
                      VIEW GRADES
                    </Link>
                  </li>
                  <li className=" md:bg-gray-50 w-100 bg-gray-50  flex flex-row items-center gap-2 text-sm rounded-md px-4">
                    <ImFolderDownload className="text-amber-800" />
                    <Link
                      className="links"
                      href={authNav ? "/" : "#Contact"}
                      onClick={() => {
                        setNavOpen(false);
                        setAuthNav(false);
                      }}
                    >
                      DOWNLOAD APP
                    </Link>
                  </li>
                </div>
              )}
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};
