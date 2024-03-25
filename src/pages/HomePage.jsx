import React from "react";
import Speakers from "../components/Speakers";
import Layout from "../Layout";
import { motion, useSpring } from "framer-motion"

function HomePage() {

  const spring = useSpring(2)
    const dragConstraints = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    };
  

  return (
    <div   className="w-screen lg:h-screen px-4 lg:px-10 py-8 grid grid-cols-1 lg:grid-cols-6 lg:grid-rows-6 gap-4">
      <div   className="lg:col-start-1 lg:col-end-3 w-full h-full rounded-2xl flex gap-4 order-1 lg:order-auto">
        <motion.div drag dragConstraints={dragConstraints}   className="w-fit lg:h-full aspect-square bg-blue-500 rounded-2xl">
          Dark Mode
        </motion.div>
        <motion.div drag dragConstraints={dragConstraints}  className="lg:h-full w-full border-2 border-black rounded-2xl">
          <p className="text-3xl">Timer</p>
        </motion.div>
      </div>
      <motion.div drag dragConstraints={dragConstraints}   className="lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-5 border-2 border-black w-full h-full rounded-2xl flex flex-col items-center justify-center order-2 lg:order-auto">
        <p className="text-6xl">TechOtsav</p>
        <p className="text-6xl">TechOtsav</p>
        <p className="text-6xl">TechOtsav</p>
        <p className="text-6xl">TechOtsav</p>
      </motion.div>


      <motion.div drag dragConstraints={dragConstraints}  className="lg:col-start-5 lg:col-end-7 lg:row-start-1 lg:row-end-3 border-2 border-black w-full h-full rounded-2xl order-7 lg:order-auto">
        <p className="text-3xl">Venue</p>
        <p className="text-3xl">Venue</p>
        <p className="text-3xl">Venue</p>
      </motion.div>

      <motion.div drag dragConstraints={dragConstraints}  className="lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-5 border-2 border-black w-full h-full rounded-2xl order-4 lg:order-auto">
        <p className="text-3xl">Giveways</p>
        <p className="text-3xl">Giveways</p>
        <p className="text-3xl">Giveways</p>
      </motion.div>
      <motion.div drag dragConstraints={dragConstraints}  className="lg:col-start-5 lg:col-end-7 lg:row-start-3 lg:row-end-6 border-2 border-black w-full h-full rounded-2xl order-3 lg:order-auto">
        <Speakers />
      </motion.div>

      <motion.div drag dragConstraints={dragConstraints}  className="lg:col-start-1 lg:col-end-3 lg:row-start-5 lg:row-end-7 border-2 border-black w-full h-full rounded-2xl order-5 lg:order-auto">
        <p className="text-3xl">Sponsors</p>
        <p className="text-3xl">Sponsors</p>
        <p className="text-3xl">Sponsors</p>
      </motion.div>
      <motion.div drag dragConstraints={dragConstraints}  className="lg:col-start-3 lg:col-end-5 lg:row-start-5 lg:row-end-7 border-2 border-black w-full h-full rounded-2xl order-6 lg:order-auto">
        <p className="text-3xl">Community Partners</p>
        <p className="text-3xl">Community Partners</p>
        <p className="text-3xl">Community Partners</p>
        <p className="text-3xl">Community Partners</p>
      </motion.div>
      <motion.div drag dragConstraints={dragConstraints}  className="lg:col-start-5 lg:col-end-7 lg:row-start-6 lg:row-end-7 border-2 border-black w-full h-full rounded-2xl order-8 lg:order-auto">
        <p className="text-3xl">Social Media</p>
        <p className="text-3xl">Social Media</p>
        <p className="text-3xl">Social Media</p>
      </motion.div>
    </div>
  );
}

export default HomePage;
