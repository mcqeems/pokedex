import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function About() {
  const [imageSrc, setImageSrc] = useState("/pokemonsabout.png");
  const [altText, setAltText] = useState("Pokemon_About");

  const changeImg = () => {
    if (imageSrc.includes("/pokemonsabout.png")) {
      setImageSrc("/pokemonsaboutclick.png");
      setAltText("Pokemon_Click");
    } else {
      setImageSrc("/pokemonsabout.png");
      setAltText("Pokemon_About");
    }
  };

  return (
    <>
      <div className="flex h-full w-[90%] flex-col justify-self-center bg-white px-3 pt-20 pb-5 md:flex-row md:px-10 md:py-30">
        <div className="my-5 w-full self-center justify-self-start md:w-[50%]">
          <AnimatePresence mode="wait">
            <motion.img
              className="mx-auto h-auto max-h-200 w-auto cursor-pointer object-contain"
              onClick={changeImg}
              src={imageSrc}
              alt={altText}
              key={imageSrc} // Key ensures Framer Motion detects changes
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
            />
          </AnimatePresence>
        </div>
        <div className="fade-in-scale my-5 h-full w-full self-center justify-self-end md:w-[50%]">
          <h1 className="dm-sans-bold text-center text-5xl text-red-500 md:text-start md:text-9xl">
            About
          </h1>
          <br></br>
          <p className="dm-sans-medium text-justify">
            Welcome to PokeDex, your ultimate online destination for everything
            Pokémon! Our website is designed to be a comprehensive database
            where trainers of all ages and experience levels can explore
            detailed information about every Pokémon species. Whether
            you&apos;re looking for stats, abilities, evolutions, or type
            matchups, PokeDex has got you covered. With an intuitive interface
            and regularly updated content, we strive to make your journey
            through the world of Pokémon as seamless and enjoyable as
            possible.Dive in and discover new facts, strengthen your battle
            strategies, and enhance your understanding of these incredible
            creatures.
          </p>
          <br></br>
          <p className="dm-sans-medium text-justify">
            At PokeDex, our mission is to foster a vibrant community of Pokémon
            enthusiasts by providing accurate and engaging resources. Each page
            is crafted with care, ensuring that both casual fans and competitive
            players find value in what we offer. Beyond just data, we aim to
            celebrate the magic and wonder of the Pokémon universe, bringing its
            rich lore and captivating stories closer to you. Join us on this
            adventure, share your insights, and become part of a global network
            united by a shared love for Pokémon. Together, let’s continue
            exploring, learning, and growing alongside our favorite pocket
            monsters!
          </p>
          <br></br>
          <div className="flex h-auto w-full flex-col rounded-md bg-red-500 p-5 md:h-60 md:flex-row-reverse">
            <img
              className="h-70 w-auto rounded-md object-contain md:h-full"
              src="/selfPicture.jpg"
            ></img>
            <p className="dm-sans-medium mt-5 h-auto text-justify leading-7 text-white md:mt-0 md:pr-10">
              Welcome, Trainers! 🚀 I’m the developer behind PokeDex, your
              trusted guide to all things Pokémon. Whether you’re chasing stats,
              strategies, or lore, this site is built to fuel your adventures.
              Explore, learn, and join our community of fans. Thanks for
              exploring with us, happy catching! 🎯. <br />
              <br /> — Mustaqim Nawahhudi Ma&apos;arif
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
