"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiAcademicCap } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import {
  AiFillPhone,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { ImLocation2 } from "react-icons/im";
import { BsFillArrowUpCircleFill, BsArrowBarRight } from "react-icons/bs";
import Image from "next/image";

export const Footer = () => {
  const [scrolled, setScrolled] = useState(false);
  const emailAddress = "wawaes.109480@deped.gov.ph";
  const sendhandleClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.3447667162927!2d121.1390142114666!3d14.749595973350429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397bb339296dead%3A0xd54a714c35f8ed56!2sKasiglahan%20Village%20National%20High%20School!5e0!3m2!1sen!2sph!4v1695732060578!5m2!1sen!2sph"
        width="600"
        height="450"
        id="Contact"
        className="border-none w-full px-5
      py-2"
        loading="lazy"
      ></iframe>
      <footer className="bg-[#051c40]">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-1 gap-2 px-9 py-6 lg:py-16 md:grid-cols-2 lg:grid-cols-3">
            <div className="">
              <h2 className="mb-6 text-xl font-semibold md:font-semibold text-slate-200 uppercase flex flex-row items-center gap-3">
                {/*    <HiAcademicCap className="icons text-4xl" /> */}
                <Image
                  src={"/images/logo.png"}
                  width={70}
                  height={70}
                  alt="logo"
                />
                K.V.N.H.S
              </h2>
              <p className="text-slate-200">
                “Education is the key to success in life, and teachers make a
                lasting impact in the lives of their students”(Solomon Ortiz).
              </p>

              <div className=" mt-4 space-x-5 hidden md:flex">
                <Link
                  href="https://www.facebook.com/DepEdTayoWES109480?mibextid=ZbWKwL"
                  target="_blank"
                  className="text-gray-200  hover:text-amber-400"
                >
                  <AiFillFacebook className="text-xl" />
                  <span className="sr-only">Facebook page</span>
                </Link>

                <Link href="#" className="text-gray-200 hover:text-amber-400">
                  <AiFillTwitterSquare className="text-xl" />
                  <span className="sr-only">Location</span>
                </Link>

                <Link href="#" className="text-gray-200 hover:text-amber-400">
                  <BiLogoGmail className="text-xl" />
                  <span className="sr-only">Email</span>
                </Link>
              </div>
            </div>
            <div className="ml-2 ">
              <h2 className="mt-5 mb-3 font-semibold text-slate-200  uppercase">
                Featured Links
              </h2>
              <ul className="text-white  items-center md:grid md:grid-cols-2  mt-5">
                <li className="mb-1 w-100 md:bg-[#051c40] md:p-0 bg-[#1c2f4e] p-3 rounded-md">
                  <Link
                    href="#"
                    className="hover:underline flex flex-row gap-3 items-center"
                  >
                    <BsArrowBarRight className="icons text-xl" /> Home
                  </Link>
                </li>
                <li className="mb-1 w-100 md:bg-[#051c40] md:p-0 bg-[#1c2f4e] p-3 rounded-md">
                  <Link
                    href="#About"
                    className="hover:underline  flex flex-row gap-3 items-center"
                  >
                    <BsArrowBarRight className="icons text-xl" /> About us
                  </Link>
                </li>
                <li className="mb-1 w-100 md:bg-[#051c40] md:p-0 bg-[#1c2f4e] p-3 rounded-md">
                  <Link
                    href="#"
                    className="hover:underline  flex flex-row gap-3 items-center"
                  >
                    <BsArrowBarRight className="icons text-xl" /> Facebook
                  </Link>
                </li>
                <li className="mb-1  w-100 md:bg-[#051c40] md:p-0 bg-[#1c2f4e] p-3 rounded-md">
                  <Link
                    href="#"
                    className="hover:underline  flex flex-row gap-3 items-center"
                  >
                    <BsArrowBarRight className="icons text-xl" /> Contact Us
                  </Link>
                </li>
                <li className="mb-1  w-100 md:bg-[#051c40] md:p-0 bg-[#1c2f4e] p-3 rounded-md">
                  <Link
                    href="#"
                    className="hover:underline  flex flex-row gap-3 items-center"
                  >
                    <BsArrowBarRight className="icons text-xl" /> Contact Us
                  </Link>
                </li>
                <li className="mb-1  w-100 md:bg-[#051c40] md:p-0 bg-[#1c2f4e] p-3 rounded-md">
                  <Link
                    href="#"
                    className="hover:underline  flex flex-row gap-3 items-center"
                  >
                    <BsArrowBarRight className="icons text-xl" /> Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mt-5 text-base  mb-4  font-semibold text-slate-200 uppercase ">
                Information
              </h2>
              <ul className="text-slate-200 text-sm font-sans font-medium">
                <li className="mb-2">
                  <span className="flex flex-row items-center gap-3 ">
                    <ImLocation2 className="icons" /> Kasiglahan Village
                    National High School , Rodriguez, Rizal
                  </span>
                </li>
                <li className="mb-2">
                  <span className="flex flex-row items-center gap-3">
                    <MdEmail className="icons" /> kvnhs.@deped.gov.ph
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <button
            onClick={scrollToTop}
            className={`fixed bottom-4 right-4 ${
              scrolled ? "block" : "hidden"
            } bg-[#193055] text-white rounded-full p-2  hover:bg-green-600 transition-all duration-300`}
          >
            <BsFillArrowUpCircleFill className="text-2xl" />
          </button>
        </div>
      </footer>
      <div className="py-2 w-100 bg-[#0b1525]  md:flex md:items-center md:justify-around">
        <span className="text-sm text-gray-400  sm:text-center p-2">
          © 2023 - 2023. All Rights Reserved.
          <span className="text-gray-300 ml-2  text-sm">K.V.N.H.S</span>
        </span>
        <div className="flex mt-4 space-x-5    justify-center md:mt-0">
          <Link
            href="https://www.facebook.com/DepEdTayoWES109480?mibextid=ZbWKwL"
            target="_blank"
            className="text-gray-400  hover:text-amber-600 text-sm"
          >
            <AiFillFacebook className="text-xl" />
            <span className="sr-only">Facebook page</span>
          </Link>

          <Link href="#" className="text-gray-400 text-sm hover:text-amber-600">
            <ImLocation2 className="text-xl" />
            <span className="sr-only">Location</span>
          </Link>

          <Link
            href={"#header"}
            onClick={sendhandleClick}
            className="text-gray-400 text-sm hover:text-amber-600"
          >
            <BiLogoGmail className="text-xl" />
            <span className="sr-only">EMAL</span>
          </Link>
        </div>
      </div>
    </>
  );
};
