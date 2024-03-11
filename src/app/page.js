import { BsFillMoonStarsFill } from 'react-icons/bs'
import { BiAccessibility } from "react-icons/bi";
import Carousel from "./components/carousel";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import Image  from "next/image";
import sukuna from '/public/sukuna.jpeg';

export default function Home() {
  return (
    <main>
      <div>
        <section className=" bg-white min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="ml-8 text-xl font-burtons uppercase ">CreatedbyTonyT</h1>
            <ul className="flex items-center">
              <li className="cursor-pointer text-2xl  "><BsFillMoonStarsFill /></li>
              <li className=" bg-gradient-to-r from-cyan-500 to-teal-500 ml text-black px-4 py-2 rounded-md mr-8 ml-8"><a href="#">Resume</a></li>
            </ul>
          </nav>
          <div className="text-center p-10 ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">Tony T</h2>
            <h3 className="text-2xl py-1">Developer and Creator</h3>
            <p className=" text-md py-5 leading-7 text-gray-600">
              Passionate creative with expertise in graphic design transitioning into the realm of
              Software Development. As a recent graduate, I bring a robust background in creative endeavors,
              driven by a fervent interest in front-end development. Eager to channel my creative prowess
              into diverse projects, I aim to blend innovation, design excellence, and technical proficiency
              to deliver impactful solutions.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <AiFillLinkedin />
          <AiFillYoutube />
          <AiFillTwitterCircle />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image src={sukuna} layout='fill' objectFit='cover'  />

          </div>
        </section>

      </div>
    </main>
  );
}
