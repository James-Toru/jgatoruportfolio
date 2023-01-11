import Head from 'next/head';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { ContactUs } from "../components/Contactus"

import {
  AiFillTwitterCircle,
  AiFillLinkedin, 
  AiFillGithub,
  
} from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { SiAffinitydesigner } from "react-icons/si";
import { RiCodeBoxLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import toru from "../public/toru.png";
import Image from "next/image";
import umfana from "../public/umfana.png";
import aslice from "../public/aslice.png";
import rezz from "../public/rezz.png";
import lugawa from "../public/lugawa.png";
import texplore from "../public/texplore.png";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>James Gatoru</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-[image:url('../public/bgg.png')] bg-cover bg-no-repeat bg-gray-200 dark:bg-gray-900 font-montserrat">
        <section className="min-h-screen px-10 md:px-20 lg:px-40">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl text-cyan-300  cursor-pointer">jToru</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl text-cyan-300 hover:text-cyan-800"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="../public/resume.docx" download
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-cyan-300 font-medium dark:text-cyan-400 md:text-6xl">
              James Gatoru
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Developer and designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              A developer with experience building full stack applications using a variety of technologies. Very open to learning and implementing new technologies.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-cyan-300 dark:text-cyan-400">
              <a href="https://twitter.com/Gt0ru"><AiFillTwitterCircle className="hover:text-6xl hover:text-cyan-500 ease-out duration-300" /></a>
              <a href="https://www.linkedin.com/in/james-mbugua-78a63917b/"><AiFillLinkedin className="hover:text-6xl hover:text-cyan-500 ease-out duration-300"/></a>
              <a href="https://github.com/James-Toru"><AiFillGithub className="hover:text-6xl hover:text-cyan-500 ease-out duration-300"/></a>
            </div>
            <div className="z-40 mx-auto bg-gradient-to-b from-cyan-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={toru} layout="fill" objectFit="cover" alt={''} />
            </div>
          </div>
        </section>
        <section id="Services" className="px-10 md:px-20 lg:px-40">
          <div className="text-center">
            <h3 className="cursor-pointer text-3xl  ml-40 mr-40 py-1 text-cyan-300 ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-cyan-500"> agencies </span>
              and <span className="text-cyan-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including Graphic design,
              Web Development and Application Development.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-900 flex-1">
              <SiAffinitydesigner  className="text-5xl text-center w-full text-cyan-300 "/>
              <h3 className="text-lg font-medium pt-8 pb-2 text-cyan-300 ">
                UI/UX Design
              </h3>
              <p className="py-2 text-gray-700 dark:text-gray-200">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-cyan-500">Design Tools I Use:</h4>
              <p className="text-gray-700 py-1 dark:text-gray-200">Photoshop</p>
              <p className="text-gray-700 py-1 dark:text-gray-200">Illustrator</p>
              <p className="text-gray-700 py-1 dark:text-gray-200">Figma</p>
              <p className="text-gray-700 py-1 dark:text-gray-200">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-900 flex-1">
              <RiCodeBoxLine className="text-5xl text-center w-full text-cyan-300 " />
              <h3 className="text-lg font-medium pt-8 pb-2 text-cyan-300 ">
                Frontend Development
              </h3>
              <p className="py-2 text-gray-700 dark:text-gray-200">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-cyan-500">Frontend Integration using:</h4>
              <p className="text-gray-800 py-1 dark:text-gray-200">Html/CSS</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">Javascript</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">Bootstrap</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">React</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">Tailwind</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-900 flex-1">
              <FaServer className="text-5xl text-center w-full text-cyan-300" />
              <h3 className="text-lg font-medium pt-8 pb-2 text-cyan-300 ">Backend Development</h3>
              <p className="py-2 text-gray-700 dark:text-gray-200">
                Require Backend services for your website or system? Im your guy.
              </p>
              <h4 className="py-4 text-cyan-500">Backend Services Include:</h4>
              <p className="text-gray-800 py-1 dark:text-gray-200">Build APIs</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">Server Configuration</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">Website Deployment</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">Configuring SSL certificates</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">Configuring Load Balancing</p>
            </div>
          </div>
        </section>
        <section id="Portfolio" className="py-10 px-10 md:px-20 lg:px-40">
          <div className="text-center">
            <h3 className="text-3xl py-1 text-cyan-300 ">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Take a look at some of the various projects I have worked on.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              
            </p>
          </div>
          <div className="flex justify-center pt-10 bg-transparent">
            <Carousel>
            <div className="items-center">
            <div className="pb-3 text-center  items-center">
                <h3 className="text-xl text-white">Umfana Initiative</h3>
                <p className="py-2 text-gray-700">Developed the responsive website for Umfana global Foundation</p>
                <a className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 hover:bg-gradient-to-r hover:from-white hover:to-white hover hover:text-cyan-500 hover:border-cyan-500" 
                href="https://umfanainitiative.org/">
                  View
                </a>
              </div>
              <Image
                className="rounded-lg object-cover w-full h-full hover:opacity-20"
                layout="responsive"
                src={umfana} alt={''} />
            </div>
            <div className="">
            <div className="pb-3 text-center z-100 items-center">
                <h3 className="text-xl text-white">Aslice by Alice</h3>
                <p className="py-2 text-gray-700">Design for a showcase website intended to be used by Aslice cake company</p>
                <a className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 hover:bg-gradient-to-r hover:from-white hover:to-white hover hover:text-cyan-500 hover:border-cyan-500" 
                href="https://www.figma.com/file/npKdfx2CwOVvo62RxyU2fo/Aslice?t=AyTY89xPEe3v2bcT-0">
                  View
                </a>
              </div>
              <Image
                className="rounded-lg object-cover w-full h-full"
                layout="responsive"
                src={aslice} alt={''}              />
            </div>
            <div className="">
            <div className="pb-3 text-center z-100 items-center">
                <h3 className="text-xl text-white">Rezz</h3>
                <p className="py-2 text-gray-700">Design for a website that is intended to be used bystudents to find hostels around their universities</p>
                <a className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 hover:bg-gradient-to-r hover:from-white hover:to-white hover hover:text-cyan-500 hover:border-cyan-500" 
                href="https://www.figma.com/proto/qdjBQJeKqwmRZuzACd5qIQ/Web_design?node-id=2%3A2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=2%3A2">
                  View
                </a>
              </div>
              <Image
                className="rounded-lg object-cover w-full h-full"
                layout="responsive"
                src={rezz} alt={''}              />
            </div>
            <div className="">
              <div className="pb-3 text-center z-100 items-center">
                <h3 className="text-xl text-white">Lugawa</h3>
                <p className="py-2 text-gray-700">Front end markup for Lugawa travelling website. Includes design of the company logo and website.</p>
                <a className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 hover:bg-gradient-to-r hover:from-white hover:to-white hover hover:text-cyan-500 hover:border-cyan-500" 
                href="https://github.com/James-Toru/Lugawa">
                  View
                </a>
              </div>
              <Image
                className="rounded-lg object-cover w-full h-full"
                layout="responsive"
                src={lugawa} alt={''}              />
            </div>
            <div className="">
              <div className="pb-3 text-center z-100 items-center">
                <h3 className="text-xl text-white">Texplore</h3>
                <p className="py-2 text-gray-700">Full on web apllication for Texplore online store.</p>
                <a className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 hover:bg-gradient-to-r hover:from-white hover:to-white hover hover:text-cyan-500 hover:border-cyan-500" 
                href="https://github.com/James-Toru/texplore">
                  View
                </a>
              </div>
              <Image
                className="rounded-lg object-cover w-full h-full"
                layout="responsive"
                src={texplore} alt={''}              />
            </div>
            </Carousel>
          </div>
        </section>
        <section id="Contact" className="pb-10 px-10 md:px-20 lg:px-40">
          <h3 className="text-center text-3xl py-3 text-cyan-300">Contact Me</h3>
          <div className="flex flex-col md:justify-between md:flex-row text-center">
          <div className="p-5">
            <div className="py-2 flex flex-row justify-center text-center items-center text-xl text-cyan-500">
            <FiPhone className="mr-2 "/>
            <h4>Call me</h4>
            </div>
            <p className="text-gray-700 dark:text-gray-200">+25416708175</p>
            <div className="py-2 flex flex-row justify-center text-center items-center text-xl text-cyan-500">
            <HiOutlineMail className="mr-2"/>
            <h4 className="text-xl text-cyan-500">Email</h4>
            </div>
            <p className="text-gray-700 dark:text-gray-200">gatorumbugua@gmail.com</p>
            <div className="py-2 flex flex-row justify-center text-center items-center text-xl text-cyan-500">
            <HiOutlineLocationMarker className="mr-2"/>
            <h4 className="text-xl text-cyan-500">Location</h4>
            </div>
            <p className="text-gray-700 dark:text-gray-200">Nairobi-Kenya</p>
          </div>
          <div className="flex flex-col p-5">
            <ContactUs />
          </div>
          </div>
        </section>
        <section className="py-10 bg-gray-900 dark:bg-slate-900">
          <div className="px-20 pb-5 flex flex-col text-center items-center md:justify-between md:flex-row">
          <div>
            <h5 className="text-xl text-cyan-300">James</h5>
            <p>Developer and Designer</p>
          </div>
          <div className="text-cyan-300">
            <ul className="flex">
              <li className="p-1"><a href="#Services">Services</a></li>
              <li className="p-1"><a href="#Portfolio">Portfolio</a></li>
              <li className="p-1"><a href="#Contact">Contact</a></li>
            </ul>
          </div>
          <div className="flex text-cyan-300 text-xl">
            <a className="px-1" href="https://twitter.com/Gt0ru"><AiFillTwitterCircle /></a>
            <a className="px-1" href="https://www.linkedin.com/in/james-mbugua-78a63917b/"><AiFillLinkedin /></a>
            <a className="px-1" href="https://github.com/James-Toru"><AiFillGithub /></a>
          </div>
          </div>
          <div className=" mr-10 ml-10 text-center border-t-2 border-gray-700">
            <p className="pt-5 text-gray-700">&#169;JamesGatoru. All rights reserved</p>
          </div>
        </section>
      </main>
      </div>
  )
}
