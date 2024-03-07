import Image from "next/image";
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { BiAccessibility } from "react-icons/bi";
import Carousel from "./components/carousel";

export default function Home() {
  return (
    <main>
      <div >
        <section className=" bg-primary min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl ">devlopedbyed</h1>
            <ul className="flex items-center">
              <li className="cursor-pointer text-2xl "><BsFillMoonStarsFill /></li>
              <li className=" bg-gradient-to-r from-cyan-500 to-teal-200 ml text-black px-4 py-2 rounded-md mr-8 ml-8"><a href="#">Resume</a></li>
            </ul>
          </nav>
        </section>
      </div>
    </main>
  );
}
