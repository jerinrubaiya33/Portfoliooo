"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/app/components/contact/Form";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Contact() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <Image
        src={bg}
        alt="background-image"
        className="fixed w-full h-full object-cover opacity-60 -z-0 top-0 left-0"
      />

      {/* Overlay Content */}
      <motion.article
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full flex flex-col items-center justify-center space-y-2 px-4 sm:px-0"
      >
        <motion.div
          variants={fadeInUp}
          className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4 mt-24 sm:mt-0"
        >
          <h1 className="text-white font-semibold text-center text-2xl sm:text-4xl font-supermercado tracking-[0.1rem] sm:tracking-[0.2rem] uppercase">
            Get ahold of me
          </h1>
          <p className="font-medium text-center font-supermercado text-sm sm:text-base leading-relaxed sm:leading-loose tracking-wide uppercase text-white/80">
            I’ve built several personal  projects using HTML5, CSS3, JavaScript (ES6+), and frameworks like React, NextJs.
            Through these projects, I’ve gained hands-on experience with responsive design, cross browser compatibility, Git for version control, and integrating RESTful APIs. I also have basic knowledge of backend technologies like Node.js. Thank you.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="w-full sm:w-3/4 mt-6">
          <Form />
        </motion.div>
      </motion.article>
    </div>
  );
}
