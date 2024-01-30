'use client'
import React from "react";
import logoImage from "@/Images/logo/logo.png";
import Image from "next/image";

function Footer() {
  return (
    <div>
      <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl text-center">
          <a
            href="#"
            className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <Image
              src={logoImage}
              className="h-10 w-10 mr-3"
              alt="Flowbite Logo"
            />{" "}
            PolygloTalk
          </a>
          <p className="my-6 text-gray-500 dark:text-gray-400">
            Polyglot Chat: Bridging Cultures, Connecting Hearts. Break barriers
            with seamless cross-language communication on our platform.
          </p>
          <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Premium
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Affiliate Program
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Contact
              </a>
            </li>
          </ul>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023-2024 . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
