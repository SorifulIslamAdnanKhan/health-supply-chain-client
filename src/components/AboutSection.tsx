import ceo from "../assets/images/about/about.png";
import { motion } from "framer-motion";

const AboutSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      className="p-4 max-w-[1200px] mx-auto mt-0 md:mt-10"
    >
      <div className="flex gap-4 md:gap-10 items-center flex-col lg:flex-row">
        {/* CEO Photo Area */}
        <motion.div variants={item} className="p-4">
          <img src={ceo} className=" rounded-md" alt="CEO" />
        </motion.div>
        {/* Our Story Area */}
        <motion.div
          variants={item}
          className="w-full p-4 bg-white rounded-md dark:text-black"
        >
          <h2>Our Story</h2>
          <p className="max-w-full md:max-w-[100ch] my-5 leading-loose">
            Aliquam tempus arcu eget felis feugiat, ac condimentum mi mollis.
            Quisque varius dapibus enim. Pellentesque eleifend neque id pulvinar
            porta. Nullam eu imperdiet libero. Vivamus eu dignissim tellus.
            Suspendisse eget erat et diam posuere lobortis. Etiam placerat
            turpis semper, dapibus justo a, venenatis arcu. Morbi tristique
            eleifend tempus.
          </p>
          <h2>Who We Are</h2>
          <p className="max-w-full md:max-w-[100ch] leading-loose my-5">
            Donec pretium elit enim, sed dapibus sem euismod eget. Duis laoreet
            turpis sed felis finibus, eu euismod tortor facilisis. Maecenas
            imperdiet metus quis posuere vestibulum. Aliquam vitae ornare lacus,
            eu fermentum ligula.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
