import hero from "../assets/images/hero/hero.jpg";
import { motion } from "framer-motion";
const heroParent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.25,
      delayChildren: 1.5,
    },
  },
};

const heroChildren = {
  hidden: { opacity: 0, y: -200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const HeroSection = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 gradient-background"></div>
      <div
        className="bg-cover bg-center min-h-screen flex items-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <motion.div
          variants={heroParent}
          initial="hidden"
          animate="visible"
          className="max-w-[1200px] mx-auto text-white text-center z-10 p-4 md:p-1"
        >
          <motion.h1 variants={heroChildren} className="">
            Welcome to Smart Health & MediCare
          </motion.h1>
          <motion.p
            variants={heroChildren}
            className="md:max-w-[70ch] md:text-lg my-8 px-8"
          >
            Our post-disaster community health and medical supply chain platform
            aims to streamline and strengthen the distribution of vital
            healthcare resources in the aftermath of disasters, ensuring prompt
            and efficient delivery to affected communities.
          </motion.p>
          <motion.div
            variants={heroChildren}
            className="mt-6 flex gap-5 justify-center"
          >
            <button className="px-4 py-3 bg-green-600 rounded-md">
              Learn More
            </button>
            <button className="rounded-md px-3 py-2 text-sm bg-white md:text-base md:px-8 md:py-2 hover:bg-green-600 text-black bg-transparent hover:text-white border-2 duration-500">
              Get In Touch
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
