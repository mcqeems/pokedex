"use client";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ShinyText = ({ text = "Shiny text" }) => {
  return (
    <motion.div
      className="fade-in-blur-long dm-sans-bold mt-4 inline-block justify-self-center bg-gradient-to-r from-transparent from-45% via-black/80 via-50% to-transparent to-60% bg-clip-text text-center text-2xl font-semibold text-red-500/50 md:mt-8 md:text-5xl dark:via-white/100"
      animate={{ backgroundPosition: ["100%", "-100%"] }}
      transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      style={{
        backgroundSize: "200% 100%",
      }}
    >
      <p>{text}</p>
    </motion.div>
  );
};

ShinyText.propTypes = {
  text: PropTypes.string,
};

export default ShinyText;
