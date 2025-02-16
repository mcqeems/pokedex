// import backgroundImage from "../assets/backgroundhome.png";
import Waves from "../components/Waves";
import BlurText from "../components/BlurText";
import ShinyText from "../components/ShinyText";
import SearchBox from "../components/SearchBox";

function Home() {
  return (
    <>
      <div className="relative h-100 w-full bg-gradient-to-t from-gray-50 to-gray-300 md:h-150">
        <Waves className="z-0 h-100 w-full md:h-150"></Waves>
        <div className="relative z-10 flex h-full flex-col flex-wrap items-center justify-center px-10 pt-20">
          <BlurText
            className="dm-sans-bold justify-center text-5xl text-red-500 drop-shadow-md md:text-8xl"
            text="Welcome to Pokédex"
          ></BlurText>
          <ShinyText
            className="dm-sans-bold justify-center"
            text="The ultimate Pokemon Database"
          ></ShinyText>
          <SearchBox className=""></SearchBox>
        </div>
      </div>
    </>
  );
}

export default Home;
