import Image from "next/image";
import {BsFillMoonStarsFill} from 'react-icons/bs'
import { BiAccessibility } from "react-icons/bi";

export default function Home() {
  return (
    <main className="bg-yellow-700 px-10 ">
      <div >
        <section className=" bg-yellow-500 min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl">devlopedbyed</h1>
            <ul className="flex items-center">
              <li className="cursor-pointer text-2xl "><BsFillMoonStarsFill/></li>
              <li className=" bg-cyan-500 text-white px-4 py-2 rounded-md ml-8"><a href="#">Resume</a></li>
            </ul>
          </nav>

        </section>
      </div>
    </main>
  );
}
