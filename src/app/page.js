"use client";

import { BsFillMoonStarsFill } from 'react-icons/bs'
import { BiAccessibility } from "react-icons/bi";
import Carousel from "./components/carousel";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import Image from "next/image";
import sukuna from '/public/sukuna.jpeg';
import design from '/public/design.png';
import code from '/public/code.png';
import consulting from '/public/consulting.png';
import web1 from '/public/web1.png';
import web2 from '/public/web2.png';
import web3 from '/public/web3.png';
import web4 from '/public/web4.png';
import web5 from '/public/web5.png';
import web6 from '/public/web6.png';
import { useState } from 'react';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false); /* reference https://www.youtube.com/watch?v=zFFuV_vXNhY&t=115s */

  return (
    <div className={darkMode ? 'dark' : ""}>
      <head>
        <title>Tony T Portfolio</title>
      </head>
    <main className='bg-white px-10 dark:bg-gray-800 md:px-20 lg:px-4'>
      <div>
        <section className=" bg-white min-h-screen dark:bg-gray-800">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="ml-8 text-xl font-burtons uppercase dark:text-white">CreatedbyTonyT</h1>
            <ul className="flex items-center">
              <li className="cursor-pointer text-2xl dark:text-white "><BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)} />
                </li>
              <li className=" bg-gradient-to-r from-cyan-500 to-teal-500 ml text-black px-4 py-2 rounded-md mr-8 ml-8 dark:text-white" ><a href="#">Resume</a></li>
            </ul>
          </nav>
          <div className="text-center p-10 ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Tony T</h2>
            <h3 className="text-2xl py-1 md:text-3xl dark:text-white">Front-End Developer and Graphic Designer</h3>
            <p className=" text-md py-5 leading-7 text-gray-600 md:text-xl  max-w-xl mx-auto dark:text-white">
              Passionate creative with expertise in graphic design transitioning into the realm of
              Software Development. As a recent graduate, I bring a robust background in creative endeavors,
              driven by a fervent interest in front-end development. Eager to channel my creative prowess
              into diverse projects, I aim to blend innovation, design excellence, and technical proficiency
              to deliver impactful solutions.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">  {/* hover?? */}
            <AiFillLinkedin />
            <AiFillYoutube />
            <AiFillTwitterCircle />
          </div>
          <div className="relative mx-auto py-2 bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden border-teal-500 border-8 md:h-96 md:w-96 dark:border-white">
            <Image src={sukuna} layout='fill' objectFit='cover' />
          </div>
        </section>

        {/* Card Section */}
        <section>
          <div className='lg:flex lg:flex-col gap-5 mx-auto' >
            <h3 className="text-3xl pt-7 pb-3 md:text-center lg:text-center max-w-xl mx-auto dark:text-white">Services I offer</h3>
            <p className="text-md md:text-l pb-4 leading-8 text-gray-600  max-w-xl mx-auto dark:text-white">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md pb-2 md:text-center lg:text-center leading-8 max-w-xl text-gray-600 mx-auto dark:text-white"> I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className='lg:flex gap-10 justify-center'>
            <div className='text-center  shadow-xl p-10 rounded-xl my-10 dark:bg-gray-500 dark:text-white'>
              <Image src={code} width={100} height={100} className='mx-auto' />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className=' py-2'>
                Creating chaos everywhere I go. Yuji is a hoe.</p>
              <h4 className='py-4 text-teal-600 uppercase dark:text-teal-300'>Design tools I use</h4>
              <p className='text-gray-600 py-1 dark:text-white'>Illustrator</p>
              <p className='text-gray-600 py-1 dark:text-white' >Photoshop</p>
              <p className='text-gray-600 py-1 dark:text-white'>Figma</p>
            </div>
            <div className='text-center shadow-xl p-10 rounded-xl my-10 dark:bg-gray-500 dark:text-white'>
              <Image src={design} width={100} height={100} className='mx-auto' />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className=' py-2'>
                Creating chaos everywhere I go. Yuji is a hoe.</p>
              <h4 className='py-4 text-teal-600 uppercase dark:text-teal-300'>Design tools I use</h4>
              <p className='text-gray-600 py-1 dark:text-white'>Photoshop</p>
              <p className='text-gray-600 py-1 dark:text-white'>Illustrator</p>
              <p className='text-gray-600 py-1 dark:text-white'>Figma</p>
            </div>
            <div className='text-center shadow-xl p-10 rounded-xl my-10 dark:bg-gray-500 dark:text-white'>
              <Image src={consulting} width={100} height={100} className='mx-auto' />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className=' py-2'>
                Creating chaos everywhere I go. Yuji is a hoe.</p>
              <h4 className='py-4 text-teal-600 uppercase dark:text-teal-300'>Design tools I use</h4>
              <p className='text-gray-600 py-1 dark:text-white'>Photoshop</p>
              <p className='text-gray-600 py-1 dark:text-white'>Illustrator</p>
              <p className='text-gray-600 py-1 dark:text-white'>Figma</p>
            </div>
          </div>
        </section>

        {/* footer?? */}
        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-600 dark:text-white">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
          </div> {/* Fixed flex issue */}
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1 '>
              <Image src={web1} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' />
            </div>
            <div className='basis-1/3 flex-1 '>
              <Image src={web2} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' />
            </div>
            <div className='basis-1/3 flex-1 '>
              <Image src={web3} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' />
            </div>
            <div className='basis-1/3 flex-1 '>
              <Image src={web4} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' />
            </div>
            <div className='basis-1/3 flex-1 '>
              <Image src={web5} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' />
            </div>
            <div className='basis-1/3 flex-1 '>
              <Image src={web6} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' />
            </div>
          </div>
        </section>
      </div>
    </main>
    </div>
  );
}
